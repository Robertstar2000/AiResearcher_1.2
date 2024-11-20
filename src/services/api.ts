// This file handles API interactions for generating research titles and conducting section research using LLMs.

import axios from 'axios';
import { ResearchTypeConfig, CitationStyle, ResearchType, ResearchMode, ResearchSection } from '../types';
import generalResearch from './researchTypes/general';
import literatureResearch from './researchTypes/literature';
import experimentalResearch from './researchTypes/experimental';
import advancedGeneralResearch from './researchTypes/a_general';
import { literatureSearchPaper as advancedLiteratureResearch } from './researchTypes/a_literature';
import { experimentalDesign as advancedExperimentalResearch } from './researchTypes/a_expermental';

// Formats the list of requirements into a numbered string
const formatRequirements = (requirements: string[]): string => {
  return requirements.map((req, index) => `${index + 1}. ${req}`).join('\n');
};

// Constructs a prompt for the LLM to generate content for a research section
const constructPrompt = (title: string, section: ResearchSection, citationStyle: CitationStyle): string => {
  const citationInstructions = {
    academic: "Use APA format for citations (Author, Year). Include full references at the end.",
    web: "Include URLs and access dates for web sources. List full references with titles and URLs at the end.",
    informal: "Use in-text mentions of sources. Include a simplified reference list at the end."
  };

  return `
Research Title: "${title}"

Section: ${section.title}

Task: ${section.prompt}

Requirements:
${formatRequirements(section.requirements)}

Citation Instructions:
${citationInstructions[citationStyle]}

Research Guidelines:
1. Provide a comprehensive response addressing all requirements
2. Use academic language and proper structure
3. Support ALL claims with citations
4. Include at least 3-5 relevant citations
5. Add citations throughout the text, not just at the end
6. Conclude with a complete REFERENCES section

Format your response EXACTLY as follows:

[Content with in-text citations]

REFERENCES:
1. [First reference]
2. [Second reference]
(etc.)

Note: Do not include any other text or formatting instructions in your response.
`.trim();
};

// Introduces a delay to simulate processing time
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Generates a research title using the LLM
export const generateTitle = async (query: string, apiKey: string): Promise<string> => {
  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama-3.1-8b-instant',  
        messages: [
          {
            role: 'system',
            content: 'Generate one professional, academic title for a research paper based on the given query. The title should be concise but descriptive.'
          },
          {
            role: 'user',
            content: `Generate one title for a research paper about: ${query}`
          }
        ],
        temperature: 0.7,
        max_tokens: 100
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    await delay(30000); // 30-second delay

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error?.message || 'Failed to generate title');
    }
    throw error;
  }
};

// Maps research types to their configurations
export const RESEARCH_TYPES: Record<string, ResearchTypeConfig> = {
  general: generalResearch,
  literature: literatureResearch,
  experimental: experimentalResearch,
  a_general: advancedGeneralResearch,
  a_literature: advancedLiteratureResearch,
  a_experimental: advancedExperimentalResearch
};

// Retrieves the configuration for a specific research type and mode
export const getResearchTypeConfig = (type: ResearchType, mode: ResearchMode): ResearchTypeConfig => {
  const key = mode === 'advanced' ? `a_${type}` : type;
  return RESEARCH_TYPES[key] || RESEARCH_TYPES[type];
};

// Conducts research for each section using the LLM and assembles the document
export const conductSectionResearch = async (
  title: string,
  sections: ResearchSection[],
  apiKey: string,
  citationStyle: CitationStyle,
  researchMode: ResearchMode,
  researchType: ResearchType
): Promise<{ content: string; citations: string[] }> => {
  try {
    const config = getResearchTypeConfig(researchType, researchMode);
    
    if (!config) {
      throw new Error(`Research type configuration not found for ${researchType} in ${researchMode} mode`);
    }

    const model = researchMode === 'advanced' ? 'mixtral-8x7b-32768' : 'mixtral-8x7b-32768';
    let fullContent = '';
    let allCitations: string[] = [];

    for (const section of sections) {
      const prompt = constructPrompt(title, section, citationStyle);

      const response = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          model,
          messages: [
            {
              role: 'system',
              content: `You are an expert research assistant specializing in ${config.title}. 
                       Provide detailed, well-structured content with appropriate citations in ${citationStyle} format. 
                       Every paragraph must include at least one citation.
                       Ensure all claims are supported by references.
                       Always include a numbered REFERENCES section at the end.
                       Keep the original formatting exactly as requested.`
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 2000
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      await delay(30000); // 30-second delay

      const sectionContent = response.data.choices[0].message.content;
      const [mainContent, referencesSection] = splitContentAndReferences(sectionContent);
      const citations = extractCitations(referencesSection);

      console.log(`Section content for "${section.title}":`, mainContent);
      console.log(`Citations for "${section.title}":`, citations);

      fullContent += mainContent.trim() + '\n\n';
      allCitations = allCitations.concat(citations);
    }
    
    return {
      content: fullContent.trim(),
      citations: allCitations
    };
  } catch (error) {
    console.error('Error during section research:', error);
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error?.message || 'API request failed');
    }
    throw error;
  }
};

// Splits the content and references section from the LLM response
const splitContentAndReferences = (content: string): [string, string] => {
  const parts = content.split(/REFERENCES:?/i);
  if (parts.length > 1) {
    return [parts[0].trim(), parts[1].trim()];
  }
  return [content.trim(), ''];
};

// Extracts citations from the references section
const extractCitations = (referencesSection: string): string[] => {
  if (!referencesSection) return [];
  
  return referencesSection
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => line.replace(/^\d+\.\s*/, '').trim())
    .filter(citation => citation.length > 0 && !citation.includes('[') && !citation.includes(']'));
};

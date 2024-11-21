import { ResearchTypeConfig } from '../../types';

const generalResearch: ResearchTypeConfig = {
  title: "General Research",
  description: "Comprehensive research framework tailored for academic purposes to assist human researchers",
  sections: [
    {
      title: "I. Abstract",
      prompt: "Provide a concise summary of the research topic, objectives, and key findings.",
      requirements: [
        "Summarize the research topic in a concise manner.",
        "Highlight the main research objectives.",
        "Mention the key findings or results.",
        "Provide a brief statement on the significance of the study."
      ]
    },
    {
      title: "II. Introduction",
      prompt: "Introduce the topic, provide background information, and clearly state the research objectives.",
      requirements: [
        "Introduce the topic and explain its relevance.",
        "Provide necessary background information and context.",
        "Clearly articulate the research problem or question.",
        "Outline the scope and objectives of the research."
      ]
    },
    {
      title: "III. Literature Review",
      prompt: "Review and analyze existing research, highlighting gaps and connections to the current study.",
      requirements: [
        "Summarize key studies and findings.",
        "Discuss existing theories, frameworks, or methodologies.",
        "Identify gaps, inconsistencies, or limitations in prior research.",
        "Explain how the current study builds upon or diverges from previous work."
      ]
    },
    {
      title: "IV. Research Methodology",
      prompt: "Detail the research methods, tools, and approaches used in the study.",
      requirements: [
        "Explain the research design and rationale.",
        "Detail data collection methods and tools.",
        "Describe sampling strategy and participant demographics.",
        "Outline data analysis techniques and software (if applicable).",
        "Discuss ethical considerations and limitations in the methodology."
      ]
    },
    {
      title: "IV-A. Data Sources and Organization",
      prompt: "Identify and describe the data sources used in the research, and present data in organized formats.",
      requirements: [
        "List and describe all primary and secondary data sources.",
        "Explain the relevance and reliability of the data sources.",
        "Present available data in well-organized tables or charts.",
        "For large datasets, provide accessible links to the data files.",
        "Ensure proper formatting and citation of data sources."
      ]
    },
    {
      title: "V. Results",
      prompt: "Present the findings with data analysis and visual representation.",
      requirements: [
        "Report findings in a clear and organized manner.",
        "Include relevant data, statistics, or qualitative results.",
        "Use tables, graphs, or visuals to support findings.",
        "Highlight significant trends, patterns, or anomalies."
      ]
    },
    {
      title: "VI. Discussion",
      prompt: "Interpret findings and discuss their implications in the context of the research objectives.",
      requirements: [
        "Discuss how findings align or contrast with existing research.",
        "Interpret results within the theoretical or practical framework.",
        "Identify limitations of the findings.",
        "Propose implications for theory, practice, or policy."
      ]
    },
    {
      title: "VII. Conclusion",
      prompt: "Summarize the key takeaways and propose directions for future research.",
      requirements: [
        "Recap the main findings and their significance.",
        "Discuss the contribution of the research to the field.",
        "Suggest practical applications or future research directions."
      ]
    },
    {
      title: "VIII. References",
      prompt: "Compile a comprehensive list of references cited in the research.",
      requirements: [
        "Ensure citations are formatted according to the selected academic style (e.g., APA, MLA, Chicago).",
        "Include all sources referenced in the paper.",
        "Verify accuracy of citations and attributions."
      ]
    },
    {
      title: "IX. Appendices",
      prompt: "Provide additional data, tools, or resources used in the study.",
      requirements: [
        "Include supplementary materials like surveys, raw data, or extended tables.",
        "Organize appendices clearly with appropriate labels.",
        "Reference appendices within the main text as needed."
      ]
    },
    {
      title: "X. Acknowledgements",
      prompt: "Acknowledge individuals, institutions, or organizations that contributed to the research.",
      requirements: [
        "Mention funding sources, if applicable.",
        "Thank collaborators, advisor, or institutions.",
      ]
    }
  ]
};

export default generalResearch;

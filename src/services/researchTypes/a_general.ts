import { ResearchTypeConfig } from '../../types';

export const generalResearch = {
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
      subsections: [
        {
          title: "III-A. Theoretical Foundations",
          prompt: "Discuss the theoretical basis for the research topic.",
          requirements: [
            "Explain key theories relevant to the research.",
            "Discuss their development and significance.",
            "Relate theories to the current study."
          ]
        },
        {
          title: "III-B. Historical Context",
          prompt: "Provide an overview of the historical development of the research topic.",
          requirements: [
            "Trace the evolution of the topic over time.",
            "Highlight significant milestones or breakthroughs.",
            "Identify major contributors to the field."
          ]
        },
        {
          title: "III-C. Comparative Analysis",
          prompt: "Compare and contrast findings from key studies.",
          requirements: [
            "Identify similarities and differences among studies.",
            "Highlight conflicting evidence or perspectives.",
            "Discuss implications of the variations for the current research."
          ]
        },
        {
          title: "III-D. Emerging Trends",
          prompt: "Explore recent advancements and emerging trends in the research area.",
          requirements: [
            "Identify new developments or technologies.",
            "Discuss their potential impact on the field.",
            "Highlight areas of innovation and opportunity."
          ]
        }
      ]
    },
    {
      title: "IV. Research Methodology",
      prompt: "Detail the research methods, tools, and approaches used in the study.",
      subsections: [
        {
          title: "IV-A. Research Design",
          prompt: "Explain the overall research framework and approach.",
          requirements: [
            "Describe whether the research is qualitative, quantitative, or mixed-methods.",
            "Justify the choice of design for the research objectives."
          ]
        },
        {
          title: "IV-B. Tools and Instruments",
          prompt: "Detail the tools, technologies, or instruments used for data collection.",
          requirements: [
            "List all tools and their specifications.",
            "Explain their role in ensuring data accuracy and reliability."
          ]
        },
        {
          title: "IV-C. Ethical Considerations",
          prompt: "Discuss ethical aspects of the research process.",
          requirements: [
            "Describe how participant confidentiality was maintained.",
            "Address any ethical challenges encountered."
          ]
        }
      ]
    },
    {
      title: "IV-D. Data Sources and Organization",
      prompt: "Identify and describe the data sources used in the research, and present data in organized formats.",
      subsections: [
        {
          title: "IV-D-1. Data Categorization",
          prompt: "Explain how data was categorized for analysis.",
          requirements: [
            "Define key data categories and their relevance.",
            "Ensure clarity in the categorization logic."
          ]
        },
        {
          title: "IV-D-2. Data Validation and Cleaning",
          prompt: "Describe processes for validating and cleaning data.",
          requirements: [
            "Explain steps taken to identify and correct errors.",
            "Discuss how data reliability was ensured."
          ]
        }
      ]
    },
    {
      title: "V. Results",
      prompt: "Present the findings with data analysis and visual representation.",
      subsections: [
        {
          title: "V-A. Key Findings",
          prompt: "Summarize the main results of the study.",
          requirements: [
            "Highlight the most significant findings.",
            "Provide interpretations relevant to the research question."
          ]
        },
        {
          title: "V-B. Statistical Analysis",
          prompt: "Detail statistical methods used and their outcomes.",
          requirements: [
            "Include confidence intervals, p-values, and effect sizes.",
            "Explain the statistical significance of results."
          ]
        },
        {
          title: "V-C. Qualitative Insights",
          prompt: "Summarize insights derived from qualitative data.",
          requirements: [
            "Present themes or patterns in the data.",
            "Use direct quotes or excerpts where appropriate."
          ]
        }
      ]
    },
    {
      title: "VI. Discussion",
      prompt: "Interpret findings and discuss their implications in the context of the research objectives.",
      subsections: [
        {
          title: "VI-A. Theoretical Implications",
          prompt: "Discuss how findings contribute to existing theories.",
          requirements: [
            "Explain whether findings support or challenge theoretical assumptions.",
            "Propose refinements or extensions to current theories."
          ]
        },
        {
          title: "VI-B. Practical Applications",
          prompt: "Explore how findings can be applied in real-world contexts.",
          requirements: [
            "Identify potential industries or fields of application.",
            "Discuss practical benefits or challenges."
          ]
        },
        {
          title: "VI-C. Unanticipated Outcomes",
          prompt: "Describe unexpected findings or results.",
          requirements: [
            "Explain possible reasons for these outcomes.",
            "Discuss their implications for the field."
          ]
        }
      ]
    },
    {
      title: "VII. Conclusion",
      prompt: "Summarize the key takeaways and propose directions for future research.",
      subsections: [
        {
          title: "VII-A. Policy Implications",
          prompt: "Discuss the relevance of findings for policymaking.",
          requirements: [
            "Highlight potential impacts on public or organizational policy.",
            "Provide actionable recommendations for policymakers."
          ]
        },
        {
          title: "VII-B. Knowledge Gaps",
          prompt: "Identify remaining questions or gaps in the research area.",
          requirements: [
            "List specific areas that require further exploration.",
            "Explain the importance of addressing these gaps."
          ]
        }
      ]
    },
    {
      title: "VIII. References",
      prompt: "Compile a comprehensive list of references cited in the research.",
      subsections: [
        {
          title: "VIII-A. Annotated Bibliography",
          prompt: "Provide a brief annotation for each reference used.",
          requirements: [
            "Include a summary of each source’s main points.",
            "Explain its relevance to the study."
          ]
        }
      ]
    },
    {
      title: "IX. Appendices",
      prompt: "Provide additional data, tools, or resources used in the study.",
      subsections: [
        {
          title: "IX-A. Supplementary Figures",
          prompt: "Include figures that support the findings but are not in the main text.",
          requirements: [
            "Label and describe each figure clearly.",
            "Explain its relevance to the study."
          ]
        },
        {
          title: "IX-B. Raw Data",
          prompt: "Provide raw data or summarized datasets used in the analysis.",
          requirements: [
            "Ensure data is organized for easy reference.",
            "Include explanations for abbreviations or codes."
          ]
        }
      ]
    }
  ]
};

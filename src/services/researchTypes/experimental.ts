import { ResearchTypeConfig } from '../../types'; 

const experimentalResearch: ResearchTypeConfig = {
  title: "Experimental Design",
  description: "Comprehensive framework for planning and executing an experimental study",
  sections: [
    {
      title: "I. Abstract",
      prompt: "Summarize the experimental design and objectives",
      requirements: [
        "Provide a concise overview of the experiment",
        "State the main objectives and purpose",
        "Mention the key hypotheses or research questions",
        "Highlight the expected contribution to the field"
      ]
    },
    {
      title: "II. Introduction",
      prompt: "Present research questions and hypotheses",
      requirements: [
        "Introduce the experimental topic and its significance",
        "Clearly state the research questions",
        "Formulate the hypotheses to be tested",
        "Explain the rationale behind the hypotheses",
        "Discuss the background context or prior research influencing the experiment"
      ]
    },
    {
      title: "III. Literature Review",
      prompt: "Analyze existing studies related to the experiment",
      requirements: [
        "Identify key studies and their relevance",
        "Discuss theoretical frameworks and methodologies used in prior research",
        "Highlight gaps or limitations in existing studies",
        "Establish how the current experiment addresses these gaps"
      ]
    },
    {
      title: "IV. Experimental Objectives",
      prompt: "Define the aims and scope of the experiment",
      requirements: [
        "List specific goals the experiment seeks to achieve",
        "Clarify the scope and boundaries of the experiment",
        "Explain the relevance of each objective to the overarching research problem",
        "Ensure objectives are measurable and actionable"
      ]
    },
    {
      title: "V. Methods",
      prompt: "Detail experimental procedures and materials",
      requirements: [
        "Describe the experimental setup, equipment, and materials",
        "Outline step-by-step procedures with clear instructions",
        "Specify independent, dependent, and control variables",
        "Detail how data will be collected, measured, and recorded",
        "Discuss methods for ensuring experimental reproducibility"
      ]
    },
    {
      title: "VI. Data Collection Plan",
      prompt: "Outline strategies for data collection and storage",
      requirements: [
        "Describe instruments and tools used for data collection",
        "Define sampling techniques or participant selection criteria",
        "Explain how data accuracy and reliability will be ensured",
        "Plan for secure and organized data storage"
      ]
    },
    {
      title: "VII. Expected Results",
      prompt: "Describe anticipated outcomes and analysis methods",
      requirements: [
        "State the expected findings or trends with justification",
        "Explain statistical or qualitative methods for analyzing results",
        "Discuss how findings will be interpreted in the context of the hypotheses",
        "Address potential variations or unexpected trends in the data"
      ]
    },
    {
      title: "VIII. Risk Assessment and Mitigation",
      prompt: "Identify potential risks and strategies to mitigate them",
      requirements: [
        "List risks associated with the experimental procedures",
        "Assess the likelihood and impact of each risk",
        "Develop contingency plans to address identified risks",
        "Outline safety protocols and ethical considerations"
      ]
    },
    {
      title: "IX. Discussion",
      prompt: "Consider implications and potential limitations",
      requirements: [
        "Interpret the anticipated results within the broader research context",
        "Discuss theoretical, practical, or policy implications",
        "Identify potential limitations, biases, or confounding factors",
        "Propose strategies for addressing limitations in future experiments"
      ]
    },
    {
      title: "X. Resources and Budget",
      prompt: "Detail the resources and financial requirements for the experiment",
      requirements: [
        "List required materials, equipment, and personnel",
        "Provide an estimated budget for each resource",
        "Identify funding sources or financial constraints",
        "Discuss resource allocation and optimization strategies"
      ]
    },
    {
      title: "XI. Timeline",
      prompt: "Outline the experimental schedule and milestones",
      requirements: [
        "Provide a detailed timeline for each phase of the experiment",
        "Include specific milestones, deliverables, and deadlines",
        "Highlight dependencies and critical path tasks",
        "Indicate resource allocation and time estimates for each phase"
      ]
    },
    {
      title: "XII. Ethical Considerations",
      prompt: "Address ethical aspects of the experimental design",
      requirements: [
        "Discuss how participant rights and confidentiality will be protected",
        "Ensure compliance with relevant ethical standards and regulations",
        "Address potential ethical dilemmas and their resolution",
        "Plan for obtaining necessary ethical approvals or permissions"
      ]
    },
    {
      title: "XIII. Reporting and Dissemination",
      prompt: "Plan for sharing findings and experiment outcomes",
      requirements: [
        "Outline formats and platforms for reporting results (e.g., journals, conferences)",
        "Include a strategy for creating visualizations or summaries of findings",
        "Plan for sharing raw data or supplementary materials (if applicable)",
        "Identify target audiences for the experiment findings"
      ]
    },
    {
      title: "XIV. Appendices",
      prompt: "Include supplementary materials and documentation",
      requirements: [
        "Attach detailed protocols, consent forms, or supplementary figures",
        "Provide raw data samples or detailed calculations",
        "Include troubleshooting guidelines or additional resources",
        "Ensure all appendices are clearly referenced in the main text"
      ]
    }
  ]
};

export default experimentalResearch;

import { ResearchTypeConfig } from '../../types';

const generalResearch: ResearchTypeConfig = {
  title: "Advanced General Research",
  description: "Comprehensive research on any topic",
  sections: [
    {
      title: "I. Abstract",
      prompt: "Provide a brief overview of the research topic and main findings",
      requirements: [
        "Summarize the research topic in a concise manner",
        "Highlight the main research objectives",
        "Mention the key findings or results",
        "Provide a brief statement on the significance of the study",
        "Elaborate on the research methodology",
        "Summarize key conclusions drawn",
        "Ensure clarity in presenting extended information"
      ]
    },
    {
      title: "I.B. Keywords",
      prompt: "List relevant keywords associated with the research",
      requirements: [
        "Include 5-7 pertinent keywords",
        "Ensure keywords reflect main topics",
        "Assist in indexing and search optimization",
        "Avoid overly generic terms"
      ]
    },
    {
      title: "I.D. Research Implications",
      prompt: "Briefly discuss the potential impact of the findings",
      requirements: [
        "Highlight theoretical implications",
        "Mention practical applications",
        "Address possible future developments",
        "Stay within the abstract's length constraints"
      ]
    },
    {
      title: "II. Introduction",
      prompt: "Introduce the topic, provide background information, and state research objectives",
      requirements: [
        "Introduce the topic and explain its relevance",
        "Provide background information and context",
        "Clearly state the research problem or question",
        "Outline the research objectives and scope"
      ]
    },
    {
      title: "II.A. Historical Background",
      prompt: "Detail the historical development related to the topic",
      requirements: [
        "Chronicle key events leading up to current research",
        "Discuss previous significant studies",
        "Highlight shifts in understanding over time",
        "Provide context for current research importance"
      ]
    },
    {
      title: "II.B. Significance of the Study",
      prompt: "Explain why the research is important",
      requirements: [
        "Discuss the gap in knowledge the study addresses",
        "Highlight potential benefits",
        "Connect to real-world applications",
        "Justify the need for the study"
      ]
    },
    {
      title: "II.C. Conceptual Framework",
      prompt: "Outline the conceptual framework guiding the research",
      requirements: [
        "Define key concepts and variables",
        "Explain relationships between them",
        "Illustrate the framework with a diagram if possible",
        "Set the foundation for hypotheses or questions"
      ]
    },
    {
      title: "II.D. Hypotheses",
      prompt: "State the hypotheses to be tested",
      requirements: [
        "Present clear and testable hypotheses",
        "Ensure they align with research objectives",
        "Differentiate between null and alternative hypotheses",
        "Provide rationale for each hypothesis"
      ]
    },
    {
      title: "II.E. Scope and Delimitations",
      prompt: "Clarify the study's scope and any delimitations",
      requirements: [
        "Specify what is included and excluded",
        "Justify these choices",
        "Discuss how they affect the study's applicability",
        "Acknowledge any constraints"
      ]
    },
    {
      title: "III. Literature Review",
      prompt: "Review and analyze relevant existing research and theories",
      requirements: [
        "Summarize key studies and their findings",
        "Highlight gaps or limitations in existing research",
        "Discuss theoretical frameworks or models",
        "Establish the connection to the current research"
      ]
    },
    {
      title: "III.A. Theoretical Perspectives",
      prompt: "Examine different theories related to the topic",
      requirements: [
        "Describe multiple theoretical viewpoints",
        "Compare and contrast these theories",
        "Discuss their relevance to your study",
        "Highlight the chosen theory for your framework"
      ]
    },
    {
      title: "III.B. Methodological Approaches",
      prompt: "Analyze various research methods used in previous studies",
      requirements: [
        "Review different methodologies applied",
        "Include explanation of the use of AI, agentic AI processes, chain of thought, and tree of thought processes",
        "Assess their strengths and weaknesses",
        "Discuss trends in methodological choices",
        "Relate findings to your methodological decisions"
      ]
    },
    {
      title: "III.C. Critical Analysis",
      prompt: "Critically analyze the literature to identify inconsistencies",
      requirements: [
        "Identify conflicting findings",
        "Discuss possible reasons for discrepancies",
        "Evaluate the robustness of studies",
        "Highlight areas needing clarification"
      ]
    },
    {
      title: "III.D. Summary of Key Findings",
      prompt: "Summarize the main findings from the literature",
      requirements: [
        "Synthesize information across studies",
        "Identify common themes",
        "Discuss overall trends",
        "Prepare the reader for your research contribution"
      ]
    },
    {
      title: "III.E. Conceptual Gaps",
      prompt: "Identify conceptual gaps in the existing literature",
      requirements: [
        "Point out unexplored concepts",
        "Explain the significance of these gaps",
        "Relate them to your research questions",
        "Suggest how your study will address them"
      ]
    },
    {
      title: "IV. Research Methodology",
      prompt: "Describe the research methods and approach found, use chain of thought to list methods and approach",
      requirements: [
        "Detail the research and rationale",
        "Describe data collection methods and tools",
        "Explain sampling strategy and participants",
        "Outline data analysis techniques"
      ]
    },
    {
      title: "IV.A. Research Philosophy",
      prompt: "Discuss the underlying research philosophy (e.g., positivism, interpretivism)",
      requirements: [
        "Define the chosen philosophy",
        "Justify its selection for your study",
        "Explain how it influences methodology",
        "Contrast with other philosophies if relevant"
      ]
    }
  ]
};

export default generalResearch;
import { ResearchTypeConfig } from '../../types';

export const experimentalDesign: ResearchTypeConfig = {
  title: "Advanced Experimental Design",
  description: "Detailed experimental research planning",
  sections: [
    {
      title: "I. Abstract",
      prompt: "Summarize the experimental design and objectives",
      requirements: [
        "Provide a concise overview of the experiment",
        "State the main objectives and purpose",
        "Mention the key hypotheses or research questions",
        "Highlight the expected contribution to the field",
        "Summarize key developments in the field",
        "Explain the motivation for the study",
        "Keep the context concise and relevant"
      ]
    },
    // ... rest of the sections remain the same
  ]
};

export default experimentalDesign;
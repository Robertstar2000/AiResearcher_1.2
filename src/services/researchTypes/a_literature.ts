import { ResearchTypeConfig } from '../../types';

export const literatureSearchPaper: ResearchTypeConfig = {
  title: "Advanced Literature Search",
  description: "A comprehensive literature search to support advanced research",
  sections: [
    {
      title: "I. Introduction",
      prompt: "Provide an overview of the research topic and its significance",
      requirements: [
        "Introduce the advanced research topic",
        "Explain the importance and relevance of the topic",
        "Outline the objectives of the literature search",
        "State the scope and limitations of the search"
      ]
    },
    // ... rest of the sections remain the same
  ]
};

export default literatureSearchPaper;
import { ResearchTypeConfig } from '../../types'; 

const literatureResearch: ResearchTypeConfig = {
  title: "Literature Search",
  description: "In-depth analysis of existing research",
  sections: [
    {
      title: "I. Abstract",
      prompt: "Summarize the literature review objectives and findings",
      requirements: [
        "Clearly state the objectives of the literature review",
        "Highlight the main insights gained",
        "Provide an overview of the scope of the review",
        "Conclude with the significance of the findings"
      ]
    },
    {
      title: "II. Introduction",
      prompt: "Present the scope and objectives of the literature review",
      subsections: [
        {
          title: "II-A. Historical Context",
          prompt: "Provide a historical overview of the topic",
          requirements: [
            "Trace the evolution of the field or topic over time",
            "Identify key milestones or events",
            "Explain how historical developments shape current research"
          ]
        },
        {
          title: "II-B. Technological Impact",
          prompt: "Discuss the role of technology in advancing the field",
          requirements: [
            "Highlight key technological breakthroughs",
            "Explain their contributions to the field",
            "Discuss current technological limitations"
          ]
        },
        {
          title: "II-C. Human and Social Impact",
          prompt: "Examine the human and societal implications of the research area",
          requirements: [
            "Discuss how the field affects human lives or society",
            "Identify social challenges or controversies",
            "Explain the importance of addressing these impacts"
          ]
        },
        {
          title: "II-D. Mathematical Frameworks",
          prompt: "Explain the mathematical principles underlying the topic",
          requirements: [
            "Identify key mathematical theories or models",
            "Explain their relevance to the topic",
            "Highlight challenges in applying these frameworks"
          ]
        },
        {
          title: "II-E. Ethical Considerations",
          prompt: "Discuss the ethical dimensions of the research area",
          requirements: [
            "Identify ethical challenges or dilemmas",
            "Explain their relevance to the literature",
            "Highlight ongoing debates in ethical practices"
          ]
        },
        {
          title: "II-F. Global Perspectives",
          prompt: "Discuss the topic from an international or cross-cultural perspective",
          requirements: [
            "Highlight differences in global research approaches",
            "Discuss regional advancements or challenges",
            "Explain how globalization impacts the field"
          ]
        },
        {
          title: "II-G. Economic Implications",
          prompt: "Analyze the economic impact of the research field",
          requirements: [
            "Discuss financial challenges or opportunities in the field",
            "Highlight the economic benefits of advancements",
            "Explain how economic factors influence research priorities"
          ]
        },
        {
          title: "II-H. Environmental Context",
          prompt: "Examine the environmental implications of the research topic",
          requirements: [
            "Identify environmental challenges or opportunities",
            "Discuss how the research impacts sustainability",
            "Explain the importance of addressing environmental concerns"
          ]
        },
        {
          title: "II-I. Policy and Regulation",
          prompt: "Explore the role of policy and regulation in the field",
          requirements: [
            "Highlight key policies shaping the field",
            "Discuss regulatory challenges or opportunities",
            "Explain how policy affects research directions"
          ]
        },
        {
          title: "II-J. Cross-Disciplinary Connections",
          prompt: "Identify connections between the topic and other fields",
          requirements: [
            "Highlight areas where interdisciplinary approaches have advanced knowledge",
            "Discuss potential for collaboration between disciplines",
            "Explain challenges in integrating multiple perspectives"
          ]
        }
      ]
    },
    {
      title: "III. Methodology",
      prompt: "Describe the literature search and selection process",
      subsections: [
        {
          title: "III-A. Source Selection",
          prompt: "Describe how sources were identified and selected",
          requirements: [
            "List databases, journals, or archives used",
            "Explain criteria for inclusion or exclusion",
            "Provide rationale for prioritizing certain sources"
          ]
        },
        {
          title: "III-B. Search Strategies",
          prompt: "Detail strategies used to locate relevant literature",
          requirements: [
            "List keywords, phrases, or Boolean operators used",
            "Explain adjustments made for different databases",
            "Discuss any challenges in refining the search"
          ]
        },
        {
          title: "III-C. Categorization Framework",
          prompt: "Explain how literature was organized and categorized",
          requirements: [
            "Define categories or themes used to sort literature",
            "Justify the chosen framework for organization",
            "Explain how categories align with review objectives"
          ]
        },
        {
          title: "III-D. Inclusion Criteria",
          prompt: "List specific criteria for including sources in the review",
          requirements: [
            "Explain the importance of each criterion",
            "Discuss thresholds for quality, relevance, or recency",
            "Highlight any special considerations for inclusion"
          ]
        },
        {
          title: "III-E. Exclusion Criteria",
          prompt: "Define criteria for excluding sources from the review",
          requirements: [
            "Discuss reasons for excluding certain types of literature",
            "Explain how potential biases were managed",
            "Highlight specific limitations that led to exclusion"
          ]
        },
        {
          title: "III-F. Literature Mapping",
          prompt: "Describe how literature was mapped to identify key themes",
          requirements: [
            "Explain tools or methods used for mapping literature",
            "Identify significant clusters or trends",
            "Discuss how mapping informed the analysis"
          ]
        },
        {
          title: "III-G. Comparative Analysis",
          prompt: "Explain methods for comparing and contrasting sources",
          requirements: [
            "Discuss criteria for evaluating similarities and differences",
            "Highlight trends revealed through comparative analysis",
            "Explain how findings align or diverge across studies"
          ]
        },
        {
          title: "III-H. Quality Assessment",
          prompt: "Describe how the quality of sources was evaluated",
          requirements: [
            "List criteria for assessing source credibility",
            "Discuss any tools or frameworks used for evaluation",
            "Explain how quality influenced inclusion decisions"
          ]
        },
        {
          title: "III-I. Trend Analysis",
          prompt: "Identify and analyze trends in the literature",
          requirements: [
            "Discuss emerging patterns or developments",
            "Explain their significance to the research field",
            "Highlight areas of rapid change or innovation"
          ]
        },
        {
          title: "III-J. Meta-Analysis",
          prompt: "Summarize quantitative findings from multiple studies",
          requirements: [
            "List metrics used for aggregating data",
            "Discuss methods for synthesizing results",
            "Highlight insights gained from combining datasets"
          ]
        }
      ]
    },
    {
      title: "IV. Analysis",
      prompt: "Analyze and synthesize the selected literature",
      requirements: [
        "Summarize key themes or patterns in the literature",
        "Identify significant trends or advancements",
        "Highlight any conflicting findings or debates",
        "Discuss the implications for the research topic"
      ]
    },
    {
      title: "V. Discussion",
      prompt: "Discuss patterns, trends, and gaps in the literature",
      requirements: [
        "Examine recurring themes and their significance",
        "Identify gaps in current research",
        "Discuss how these gaps relate to the research goals",
        "Provide a rationale for further investigation"
      ]
    },
    {
      title: "VI. Conclusion",
      prompt: "Summarize key insights and future research directions",
      requirements: [
        "Recap the main findings of the review",
        "Explain how the findings contribute to understanding the field",
        "Discuss practical or theoretical implications",
        "Suggest areas for additional research"
      ]
    }
  ]
};

export default literatureResearch;

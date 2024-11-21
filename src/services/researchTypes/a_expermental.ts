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
      subsections: [
        {
          title: "III-A. Key Studies Overview",
          prompt: "Summarize foundational studies relevant to the experiment",
          requirements: [
            "Identify major studies and their contributions to the field",
            "Explain how they provide context for the current experiment"
          ]
        },
        {
          title: "III-B. Theoretical Frameworks",
          prompt: "Describe theoretical models or frameworks used in prior research",
          requirements: [
            "Explain key theories shaping the experimental design",
            "Discuss their relevance to the research questions"
          ]
        },
        {
          title: "III-C. Methodological Trends",
          prompt: "Review common methods and techniques used in the field",
          requirements: [
            "Discuss prevalent methodologies in related research",
            "Highlight strengths and limitations of these methods"
          ]
        },
        {
          title: "III-D. Identified Gaps",
          prompt: "Highlight gaps or limitations in existing research",
          requirements: [
            "Identify areas where research is lacking or inconclusive",
            "Explain how the current experiment aims to address these gaps"
          ]
        }
      ]
    },
    {
      title: "IV. Experimental Objectives",
      prompt: "Define the aims and scope of the experiment",
      subsections: [
        {
          title: "IV-A. Specific Goals",
          prompt: "List measurable goals of the experiment",
          requirements: [
            "Ensure each goal is actionable and linked to the hypotheses",
            "Define expected outcomes for each goal"
          ]
        },
        {
          title: "IV-B. Research Boundaries",
          prompt: "Clarify the scope and limits of the study",
          requirements: [
            "Describe what is included or excluded from the experiment",
            "Justify the boundaries in the context of the research question"
          ]
        },
        {
          title: "IV-C. Alignment with Field",
          prompt: "Explain how the objectives fit into the larger field of study",
          requirements: [
            "Connect objectives to broader scientific or practical trends",
            "Highlight their potential impact on the field"
          ]
        }
      ]
    },
    {
      title: "V. Methods",
      prompt: "Detail experimental procedures and materials",
      subsections: [
        {
          title: "V-A. Experimental Setup",
          prompt: "Describe the physical or virtual setup of the experiment",
          requirements: [
            "List equipment, software, or materials used",
            "Include specifications and setup instructions"
          ]
        },
        {
          title: "V-B. Procedure Steps",
          prompt: "Outline detailed, step-by-step experimental procedures",
          requirements: [
            "Provide precise instructions for replicating the experiment",
            "Include timing, sequence, and interactions for each step"
          ]
        },
        {
          title: "V-C. Control Variables",
          prompt: "Detail how control variables will be managed",
          requirements: [
            "List all control variables and their significance",
            "Explain strategies to maintain consistent conditions"
          ]
        },
        {
          title: "V-D. Data Measurement Tools",
          prompt: "Describe instruments and techniques for data measurement",
          requirements: [
            "Specify how data will be collected, recorded, and processed",
            "Explain calibration and accuracy protocols"
          ]
        }
      ]
    },
    {
      title: "VI. Data Collection Plan",
      prompt: "Outline strategies for data collection and storage",
      subsections: [
        {
          title: "VI-A. Sampling Methods",
          prompt: "Detail participant or sample selection methods",
          requirements: [
            "Explain criteria for selecting participants or samples",
            "Justify sample size and representativeness"
          ]
        },
        {
          title: "VI-B. Data Recording Techniques",
          prompt: "Describe techniques for capturing data during the experiment",
          requirements: [
            "Include protocols for manual or automated data recording",
            "Highlight methods for ensuring data accuracy"
          ]
        },
        {
          title: "VI-C. Data Organization",
          prompt: "Plan for organizing and categorizing collected data",
          requirements: [
            "Define categories for sorting and structuring data",
            "Ensure clarity and consistency in organization"
          ]
        },
        {
          title: "VI-D. Data Storage and Security",
          prompt: "Outline plans for secure and accessible data storage",
          requirements: [
            "List tools or platforms for storing data",
            "Discuss encryption, backups, and access control measures"
          ]
        }
      ]
    },
    {
      title: "VII. Expected Results",
      prompt: "Describe anticipated outcomes and analysis methods",
      subsections: [
        {
          title: "VII-A. Hypothesized Trends",
          prompt: "State expected trends or patterns in the data",
          requirements: [
            "Link expected results to hypotheses and objectives",
            "Provide a rationale for predicted trends"
          ]
        },
        {
          title: "VII-B. Statistical Analysis Plan",
          prompt: "Explain statistical methods for analyzing data",
          requirements: [
            "Define tests, metrics, or models to be used",
            "Ensure compatibility with the data types and goals"
          ]
        },
        {
          title: "VII-C. Potential Variations",
          prompt: "Discuss possible deviations from expected results",
          requirements: [
            "Highlight potential sources of variability",
            "Explain how unexpected findings will be addressed"
          ]
        }
      ]
    },
    {
      title: "VIII. Risk Assessment and Mitigation",
      prompt: "Identify potential risks and strategies to mitigate them",
      subsections: [
        {
          title: "VIII-A. Procedural Risks",
          prompt: "List risks related to experimental procedures",
          requirements: [
            "Assess likelihood and severity of procedural risks",
            "Provide contingency plans for mitigating these risks"
          ]
        },
        {
          title: "VIII-B. Ethical Concerns",
          prompt: "Address ethical challenges in the experiment",
          requirements: [
            "Identify possible ethical dilemmas",
            "Propose strategies to resolve them"
          ]
        },
        {
          title: "VIII-C. Data Risks",
          prompt: "Assess risks to data integrity or security",
          requirements: [
            "List vulnerabilities in data collection or storage",
            "Propose safeguards to minimize these risks"
          ]
        }
      ]
    },
    {
      title: "IX. Discussion",
      prompt: "Consider implications and potential limitations",
      subsections: [
        {
          title: "IX-A. Theoretical Contributions",
          prompt: "Discuss how findings may contribute to theory",
          requirements: [
            "Relate anticipated results to existing theories",
            "Propose theoretical refinements based on the experiment"
          ]
        },
        {
          title: "IX-B. Practical Applications",
          prompt: "Explore real-world applications of findings",
          requirements: [
            "Identify potential use cases in industry or practice",
            "Discuss challenges in applying findings practically"
          ]
        },
        {
          title: "IX-C. Limitations and Biases",
          prompt: "Detail potential limitations of the experimental design",
          requirements: [
            "Identify sources of bias or error",
            "Propose adjustments to minimize their impact"
          ]
        }
      ]
    },
    {
      title: "X. Resources and Budget",
      prompt: "Detail the resources and financial requirements for the experiment",
      subsections: [
        {
          title: "X-A. Material Requirements",
          prompt: "List materials and equipment needed",
          requirements: [
            "Detail specifications and quantities",
            "Estimate costs for each item"
          ]
        },
        {
          title: "X-B. Personnel Needs",
          prompt: "Identify personnel roles and expertise required",
          requirements: [
            "Specify qualifications or training needed",
            "Allocate tasks to team members"
          ]
        }
      ]
    }
  ]
};

export default experimentalResearch;

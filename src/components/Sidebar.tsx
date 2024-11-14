import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-[30%] overflow-y-auto bg-gray-50 p-6 shadow-lg">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">About AI Researcher</h2>
          <p className="mt-2 text-sm text-gray-600">
            Advanced research assistant that generates comprehensive research papers designs experiments and performs literature reviews using AI.
          </p>
        </section>

        <section>
          <h3 className="font-medium text-gray-900">Research Types</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li><strong>General Research:</strong> Comprehensive research paper.</li>
            <li><strong>Literature Search:</strong> In-depth review and analysis of existing literature.</li>
            <li><strong>Experimental Design:</strong> Detailed experimental design including methodology, variables, and analysis plan.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-medium text-gray-900">Research Modes</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li><strong>Basic:</strong> Clear, concise explanations suitable for post-graduate level understanding.</li>
            <li><strong>Advanced:</strong> In-depth analysis (includes developments up to the current date, theoretical frameworks and 4x deeper than basic.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-medium text-gray-900">Citation Styles</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li><strong>Academic:</strong> Formal APA format citations with author, year, title, and publication details.</li>
            <li><strong>Web:</strong> Web-based citations including URLs and website information.</li>
            <li><strong>Informal:</strong> Conversational in-text citations with basic source information.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-medium text-gray-900">Features</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li>Automatic section generation based on research type</li>
            <li>Citation management and formatting</li>
            <li>Research history tracking</li>
            <li>Download results as markdown files</li>
            <li>Secure API key management</li>
          </ul>
        </section>

        <section>
          <h3 className="font-medium text-gray-900">Target Users</h3>
          <div className="mb-3 text-amber-700">
            This application is designed for anyone conducting research, including:
            <br />• Scientists and Researchers
            <br />• Engineers and Technical Professionals
            <br />• Laboratory Workers
            <br />• Research Enthusiasts and Hobbyists
          </div>
        </section>

        <section>
          <h3 className="font-medium text-gray-900">Getting Started</h3>
          <ol className="mt-2 space-y-2 text-sm text-gray-600">
            <li>1. Enter your OpenAI API key</li>
            <li>2. Select your research mode (Basic/Advanced)</li>
            <li>3. Choose a research type</li>
            <li>4. Select your preferred citation style</li>
            <li>5. Enter your research query</li>
            <li>6. Wait for the AI to generate all sections this can take awhile</li>
            <li>7. Download or review your research</li>
          </ol>
        </section>
      </div>
    </aside>
  );
};
// This file serves as the main entry point for the application, orchestrating the various components and managing the application's state.

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ResearchInput } from './components/ResearchInput';
import { ResearchResult } from './components/ResearchResult';
import { ApiKeyInput } from './components/ApiKeyInput';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ResearchHistory } from './components/ResearchHistory';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CitationStyleSelector } from './components/CitationStyleSelector';
import { ResearchTypeSelector } from './components/ResearchTypeSelector';
import { ResearchModeSelector } from './components/ResearchModeSelector';
import { DownloadButton } from './components/DownloadButton';
import { ProgressBar } from './components/ProgressBar';
import { conductSectionResearch, generateTitle, getResearchTypeConfig } from './services/api';
import { ResearchHistory as ResearchHistoryType, ResearchSection, CitationStyle, ResearchType, ResearchMode } from './types';

const App: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>(() => {
    const savedKey = localStorage.getItem('openai_api_key');
    return savedKey || '';
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentQuery, setCurrentQuery] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentSections, setCurrentSections] = useState<ResearchSection[]>([]);
  const [history, setHistory] = useState<ResearchHistoryType[]>([]);
  const [citationStyle, setCitationStyle] = useState<CitationStyle>('academic');
  const [researchType, setResearchType] = useState<ResearchType>('general');
  const [researchMode, setResearchMode] = useState<ResearchMode>('basic');
  const [totalSections, setTotalSections] = useState(0);
  const [showTitleEdit, setShowTitleEdit] = useState(false);
  const [progress, setProgress] = useState(0); // New state for progress

  useEffect(() => {
    const config = getResearchTypeConfig(researchType, researchMode);
    if (config && config.sections) {
      setTotalSections(config.sections.length);
    }
  }, [researchType, researchMode]);

  const handleApiKeySubmit = (key: string) => {
    setApiKey(key);
    localStorage.setItem('openai_api_key', key);
  };

  // Handles the submission of a research query and initiates title generation
  const handleQuerySubmit = async (query: string) => {
    if (!apiKey) {
      setError('Please enter your OpenAI API key first.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setCurrentQuery(query);
    setCurrentSections([]);
    setShowTitleEdit(false);
    setProgress(.1); // Set progress to 0.5% after query submission

    try {
      const title = await generateTitle(query, apiKey);
      setCurrentTitle(title);
      setShowTitleEdit(true);
      setProgress(.2); // Set progress to 1% after title generation
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate title');
      setIsLoading(false);
    }
  };

  // Accepts the generated title and conducts research for each section
  const handleTitleAccept = async () => {
    // Keep the title edit visible until logout
    // setShowTitleEdit(false);
    try {
      const config = getResearchTypeConfig(researchType, researchMode);
      if (!config || !Array.isArray(config.sections)) {
        throw new Error('Research type configuration not found or sections is not an array');
      }

      const results: ResearchSection[] = [];

      for (const section of config.sections) {
        console.log(`Fetching research for section: ${section.title}`);
        const result = await conductSectionResearch(
          currentTitle,
          [{
            id: uuidv4(),
            title: section.title,
            response: '', // Placeholder, will be filled by conductSectionResearch
            citations: [] // Placeholder, will be filled by conductSectionResearch
          }],
          apiKey,
          citationStyle,
          researchMode,
          researchType
        );
        console.log(`Received result for section: ${section.title}`, result);
        results.push({
          id: uuidv4(),
          title: section.title,
          response: result.content,
          citations: result.citations
        });
        setProgress((prevProgress) => prevProgress + (1 / totalSections)); // Update progress
      }

      console.log('Final research results:', results);
      setCurrentSections(results);

      const newHistoryItem: ResearchHistoryType = {
        id: uuidv4(),
        title: currentTitle,
        sections: results,
        citationStyle,
        researchType,
        researchMode,
        query: currentQuery,
        timestamp: Date.now().toString() // Ensure timestamp is a string
      };

      setHistory(prev => [newHistoryItem, ...prev]);
    } catch (err) {
      console.error('An error occurred during research:', err);
      setError(err instanceof Error ? err.message : 'An error occurred during research');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-4 overflow-y-auto">
        <div className="mx-auto max-w-6xl">
          <Header />
          
          {!apiKey && (
            <div className="mb-8">
              <ApiKeyInput onApiKeySubmit={handleApiKeySubmit} />
            </div>
          )}

          <div className="mb-6 space-y-4">
            <ResearchInput onSubmit={handleQuerySubmit} isLoading={isLoading} />
            
            {showTitleEdit && (
              <div className="mt-2 text-sm text-gray-500">
                Research Title: {currentTitle} <span className="italic">(Edit the title to better focus the research target)</span>
                <input
                  type="text"
                  value={currentTitle}
                  onChange={(e) => setCurrentTitle(e.target.value)}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  onClick={handleTitleAccept}
                  className="mt-2 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700" // Changed to green
                >
                  Accept Research Target
                </button>
              </div>
            )}

            {!showTitleEdit && (
              <>
                <ResearchModeSelector
                  selectedMode={researchMode}
                  onChange={setResearchMode}
                />
                <div className="flex gap-6">
                  <div className="flex-1 space-y-4">
                    <ResearchTypeSelector
                      selectedType={researchType}
                      selectedMode={researchMode}
                      onChange={setResearchType}
                    />
                    <CitationStyleSelector
                      selectedStyle={citationStyle}
                      onChange={setCitationStyle}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm">
                      <h4 className="mb-2 font-semibold text-amber-800">Processing Time Notice</h4>
                      <p className="mb-3 text-amber-700">
                        Due to extensive computational requirements:
                        <br />• Basic Research: May take several minutes to complete
                        <br />• Advanced Research: Can take hours for comprehensive analysis
                      </p>
                      <h4 className="mb-2 font-semibold text-amber-800">-----------</h4>
                      <p className="text-blue-600"> {/* Changed to blue */}
                        <strong>Acknowledgment:</strong> Developed under the Mars Technology Institute (MTI) to aid research benefiting Earth and the future colonization of Mars
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {isLoading && (
              <ProgressBar 
                progress={progress} // Use the new progress state
                total={totalSections} 
                isLoading={isLoading}
              />
            )}
          </div>

          {error && (
            <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-700">
              {error}
            </div>
          )}

          <ErrorBoundary>
            {currentSections && currentSections.length > 0 ? (
              <div className="mb-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">{currentTitle}</h2>
                  {currentSections.length === totalSections && (
                    <DownloadButton 
                      sections={currentSections} 
                      apiKey={apiKey}
                    />
                  )}
                </div>
                {Array.isArray(currentSections) ? (
                  (() => {
                    console.log(`Mapping over ${currentSections.length} sections.`);
                    return currentSections.map((section) => {
                      console.log(`Processing section: ${section.title}`);
                      return (
                        <ResearchResult
                          key={section.id}
                          title={section.title}
                          content={section.response}
                          citations={section.citations}
                        />
                      );
                    });
                  })()
                ) : (
                  (() => {
                    console.error('currentSections is not an array:', currentSections);
                    return null;
                  })()
                )}
              </div>
            ) : (
              <div>No sections available to display.</div>
            )}

            <ResearchHistory 
              history={history}
              onClearHistory={handleClearHistory}
            />
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
};

export { App };

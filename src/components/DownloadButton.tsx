// This file renders a download button component that allows users to download research sections in Markdown or DOCX format.

import React, { useState } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { ResearchSection } from '../types';
import { downloadDocument } from '../utils/downloadUtils';

interface DownloadButtonProps {
  sections: ResearchSection[];
  apiKey: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  sections, 
  apiKey 
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async (format: 'md' | 'docx') => {
    if (!Array.isArray(sections) || sections.length === 0) {
      console.error('No sections available for download.');
      return;
    }

    setIsLoading(true);
    try {
      await downloadDocument(sections, apiKey, format);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleDownload('md')}
        className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
      >
        <ArrowDownTrayIcon className="h-5 w-5" />
        Download Markdown
        {isLoading && <span className="loader ml-2"></span>}
      </button>
      <button
        onClick={() => handleDownload('docx')}
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        <ArrowDownTrayIcon className="h-5 w-5" />
        Download DOCX
        {isLoading && <span className="loader ml-2"></span>}
      </button>
    </div>
  );
};

// Add CSS for the loader
const style = document.createElement('style');
style.innerHTML = `
  .loader {
    border: 2px solid #f3f3f3;
    border-top: 2px solid #3498db;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

// This file renders a progress bar component to visually indicate the progress of a task.

import React from 'react';

interface ProgressBarProps {
  progress: number;
  total: number;
  isLoading?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total, isLoading }) => {
  const percentage = Math.round((progress / total) * 100);
  
  return (
    <div className="w-full">
      <div className="mb-1 flex justify-between text-xs text-gray-600">
        <span>Progress</span>
        {isLoading && <span className="loader ml-2"></span>}
        <span>{percentage}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
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

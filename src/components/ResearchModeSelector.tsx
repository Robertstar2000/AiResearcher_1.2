import React from 'react';
import { ResearchMode } from '../types';
import { BeakerIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

interface ResearchModeSelectorProps {
  selectedMode: ResearchMode;
  onChange: (mode: ResearchMode) => void;
}

export const ResearchModeSelector: React.FC<ResearchModeSelectorProps> = ({
  selectedMode,
  onChange,
}) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => onChange('basic')}
        className={`flex flex-1 items-center justify-center gap-2 rounded-lg border p-4 transition-colors ${
          selectedMode === 'basic'
            ? 'border-blue-600 bg-blue-50 text-blue-700'
            : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        <BeakerIcon className="h-5 w-5" />
        <span className="font-medium">Basic Research</span>
      </button>
      <button
        onClick={() => onChange('advanced')}
        className={`flex flex-1 items-center justify-center gap-2 rounded-lg border p-4 transition-colors ${
          selectedMode === 'advanced'
            ? 'border-blue-600 bg-blue-50 text-blue-700'
            : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        <AcademicCapIcon className="h-5 w-5" />
        <span className="font-medium">Advanced Research</span>
      </button>
    </div>
  );
};
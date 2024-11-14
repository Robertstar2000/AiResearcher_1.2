import React from 'react';
import { ResearchType, ResearchMode } from '../types';
import { RESEARCH_TYPES } from '../services/api';

interface ResearchTypeSelectorProps {
  selectedType: ResearchType;
  selectedMode: ResearchMode;
  onChange: (type: ResearchType) => void;
}

export const ResearchTypeSelector: React.FC<ResearchTypeSelectorProps> = ({
  selectedType,
  selectedMode,
  onChange,
}) => {
  const baseTypes = ['general', 'literature', 'experimental'] as ResearchType[];

  const getResearchTypeTitle = (type: ResearchType) => {
    const key = selectedMode === 'advanced' ? `a_${type}` : type;
    return RESEARCH_TYPES[key]?.title || RESEARCH_TYPES[type].title;
  };

  return (
    <div className="mb-4">
      <label className="text-sm font-medium text-gray-700">Research Type:</label>
      <div className="mt-2 space-y-2">
        {baseTypes.map((type) => (
          <label key={type} className="flex items-center">
            <input
              type="radio"
              value={type}
              checked={selectedType === type}
              onChange={() => onChange(type)}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">
              {getResearchTypeTitle(type)}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
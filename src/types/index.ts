// This file defines TypeScript types and interfaces used throughout the application for managing research data and state.

export type CitationStyle = 'academic' | 'web' | 'informal';
export type ResearchType = 'general' | 'literature' | 'experimental';
export type ResearchMode = 'basic' | 'advanced';

export interface ResearchSection {
  id: string;
  title: string;
  response: string;
  citations: string[];
  prompt: string; // Added prompt property
  requirements: string[]; // Added requirements property
}

export interface ResearchHistory {
  id: string;
  sections: ResearchSection[];
  citationStyle: CitationStyle; // Added citationStyle property
  researchType: ResearchType;
  researchMode: ResearchMode;
  query: string;
  timestamp: string; // Changed to string to match usage
}

export interface ResearchState {
  history: ResearchHistory[];
  currentQuery: string;
  isLoading: boolean;
  error: string | null;
}

export interface ResearchSectionConfig {
  title: string;
  prompt: string;
  requirements?: string[];
  subsections?: ResearchSectionConfig[];
}

export interface ResearchTypeConfig {
  title: string;
  description: string;
  sections: ResearchSectionConfig[];
}

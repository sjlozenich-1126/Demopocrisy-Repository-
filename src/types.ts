export interface NetworkNode {
  id: string;
  label: string;
  category: 'Case' | 'Agency' | 'FailureMode' | 'Reform';
  shape: 'circle' | 'square' | 'triangle' | 'hexagon';
  degree: number;
  inDegree?: number;
  outDegree?: number;
  betweenness?: number;
  closeness?: number;
  reachEfficiency?: number;
  description: string;
}

export interface NetworkEdge {
  id: string;
  source: string;
  target: string;
  type: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  year: number;
  month?: string;
  title: string;
  category: string;
  caseNumber?: string;
  location?: string;
  tags?: string[];
  summary?: string;
  details?: string;
  description?: string;
  discrepancyFlag?: string;
  statuteOrQuote?: string;
  proceduralAnomaly?: string;
  evidenceRef?: string;
  quote?: string;
}

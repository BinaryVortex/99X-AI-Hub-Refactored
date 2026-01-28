import { Agent, TeamMember, PerformanceMetrics, AccuracyMetrics, LatencyMetrics, TokenUsageMetrics, ProductivityMetrics, MetricDataPoint } from '@/app/types';

// Helper function to generate time series data
function generateTimeSeries(days: number, baseValue: number, variance: number): MetricDataPoint[] {
  const data: MetricDataPoint[] = [];
  const now = new Date();
  
  for (let i = days; i >= 0; i--) {
    const timestamp = new Date(now);
    timestamp.setDate(timestamp.getDate() - i);
    timestamp.setHours(0, 0, 0, 0);
    
    const randomVariance = (Math.random() - 0.5) * variance;
    const value = Math.max(0, baseValue + randomVariance);
    
    data.push({ timestamp, value });
  }
  
  return data;
}

// Mock Performance Metrics
export const mockPerformanceMetrics: PerformanceMetrics = {
  executionTime: generateTimeSeries(30, 3.2, 2),
  throughput: generateTimeSeries(30, 145, 40),
  failureRate: generateTimeSeries(30, 4.2, 3)
};

// Mock Accuracy Metrics
export const mockAccuracyMetrics: AccuracyMetrics = {
  taskSuccessRate: generateTimeSeries(30, 94, 5),
  validationPassRate: generateTimeSeries(30, 96, 3)
};

// Mock Latency Metrics
export const mockLatencyMetrics: LatencyMetrics = {
  endToEndLatency: generateTimeSeries(30, 850, 300),
  modelResponseTime: generateTimeSeries(30, 420, 150),
  toolCallLatency: generateTimeSeries(30, 230, 100)
};

// Mock Token Usage Metrics
export const mockTokenUsageMetrics: TokenUsageMetrics = {
  tokensPerAgent: [
    { agent: 'Customer Support Agent', tokens: 2450000 },
    { agent: 'Code Review Assistant', tokens: 1890000 },
    { agent: 'Sales Lead Qualifier', tokens: 1240000 },
    { agent: 'Content Moderator', tokens: 980000 },
    { agent: 'Incident Responder', tokens: 870000 },
    { agent: 'Data Pipeline Monitor', tokens: 750000 },
    { agent: 'Marketing Analyzer', tokens: 620000 },
    { agent: 'Invoice Processor', tokens: 450000 }
  ],
  costEstimation: generateTimeSeries(30, 1840, 400),
  modelBreakdown: [
    { model: 'GPT-4', tokens: 4120000, percentage: 42 },
    { model: 'Claude-3-Opus', tokens: 2760000, percentage: 28 },
    { model: 'GPT-3.5-Turbo', tokens: 1850000, percentage: 19 },
    { model: 'Claude-3-Sonnet', tokens: 980000, percentage: 10 },
    { model: 'Gemini-Pro', tokens: 620000, percentage: 6 }
  ]
};

// Mock Productivity Metrics
export const mockProductivityMetrics: ProductivityMetrics = {
  timeSaved: generateTimeSeries(30, 420, 80),
  tasksAutomated: generateTimeSeries(30, 1850, 300),
  roi: generateTimeSeries(30, 3.8, 0.6)
};

// Helper function to get filtered agents
export function getFilteredAgents(
  agents: Agent[],
  filters: {
    team?: string;
    environment?: string;
    model?: string;
    status?: string;
  }
): Agent[] {
  return agents.filter(agent => {
    if (filters.team && filters.team !== 'all' && agent.team !== filters.team) return false;
    if (filters.environment && filters.environment !== 'all' && agent.environment !== filters.environment) return false;
    if (filters.model && filters.model !== 'all' && agent.model !== filters.model) return false;
    if (filters.status && filters.status !== 'all' && agent.status !== filters.status) return false;
    return true;
  });
}

// Get unique values for filters
export function getUniqueTeams(agents: Agent[]): string[] {
  return Array.from(new Set(agents.map(a => a.team))).sort();
}

export function getUniqueEnvironments(agents: Agent[]): string[] {
  return Array.from(new Set(agents.map(a => a.environment))).sort();
}

export function getUniqueModels(agents: Agent[]): string[] {
  return Array.from(new Set(agents.map(a => a.model))).sort();
}

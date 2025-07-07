export interface SpreadsheetRow {
  id: number;
  jobRequest: string;
  submitted: string;
  status: 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  estValue: number;
}

export interface TabItem {
  id: string;
  label: string;
  isActive: boolean;
  hasIcon?: boolean;
}

export type StatusType = 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
export type PriorityType = 'High' | 'Medium' | 'Low';
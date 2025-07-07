import { SpreadsheetRow, TabItem } from '../type';

export const mockSpreadsheetData: SpreadsheetRow[] = [
  {
    id: 1,
    jobRequest: 'Launch social media campaign for pro...',
    submitted: '15-11-2024',
    status: 'In-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel.com',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    dueDate: '20-11-2024',
    estValue: 6200000
  },
  {
    id: 2,
    jobRequest: 'Update press kit for company redesign',
    submitted: '28-10-2024',
    status: 'Need to start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhan.com',
    assigned: 'Tejas Pandey',
    priority: 'High',
    dueDate: '30-10-2024',
    estValue: 3500000
  },
  {
    id: 3,
    jobRequest: 'Finalize user testing feedback for app...',
    submitted: '05-12-2024',
    status: 'In-process',
    submitter: 'Mark Johnson',
    url: 'www.markjohns.com',
    assigned: 'Rachel Lee',
    priority: 'Medium',
    dueDate: '10-12-2024',
    estValue: 4750000
  },
  {
    id: 4,
    jobRequest: 'Design new features for the website',
    submitted: '10-01-2025',
    status: 'Complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen.com',
    assigned: 'Tom Wright',
    priority: 'Low',
    dueDate: '15-01-2025',
    estValue: 5800000
  },
  {
    id: 5,
    jobRequest: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabro.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    dueDate: '30-01-2025',
    estValue: 2800000
  }
];

export const tabItems: TabItem[] = [
  { id: 'all', label: 'All Orders', isActive: true },
  { id: 'pending', label: 'Pending', isActive: false },
  { id: 'reviewed', label: 'Reviewed', isActive: false },
  { id: 'arrived', label: 'Arrived', isActive: false, hasIcon: true }
];
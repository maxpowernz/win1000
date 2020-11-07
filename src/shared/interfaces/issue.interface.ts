export interface Issue {
  childId: number;
  issueId: number;
  dateIssueOpened: string;
  agencyName: string;
  contact: string;
  issue: string;
  outcome: string;
  issueStatus: IssueStatus;
}

enum IssueStatus {
  Open,
  Closed,
}

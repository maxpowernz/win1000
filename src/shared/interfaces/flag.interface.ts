export interface Flag {
  childId: number;
  flagId: number;
  agencyId: number;
  schoolId: number;
  dateflagOpened: string;
  agencyName: string;
  contact: string;
  flagDescription: string;
  outcome: string;
  flagStatus: FlagStatus;
}

enum FlagStatus {
  Open,
  Closed,
}

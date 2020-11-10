export interface Flag {
  childId: number;
  flagId: number;
  agencyId: number;
  schoolId: number;
  dateFlagOpened: string;
  agencyName: string;
  contact: string;
  flagDescription: string;
  outcome: string;
  flagStatus: FlagStatus;
  privacyStatus: string;
  contactNumber: string;
}

enum FlagStatus {
  Open,
  Closed,
}

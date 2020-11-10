export interface Flag {
  childId: number;
  flagId: string;
  agencyId: number;
  schoolId: number;
  dateflagOpened: string;
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
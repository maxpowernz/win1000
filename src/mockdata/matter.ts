enum MatterStatus {
  Open,
  Closed,
}

export interface Matter {
  childId: number;
  matterId: number;
  agencyId: number;
  status: MatterStatus;
  contact: string;
  details: string;
}

export const matters: Matter[] = [
  {
    childId: 1,
    matterId: 1,
    agencyId: 1,
    status: MatterStatus.Open,
    contact: "Fred Jones",
    details: "Father was seriously ill...",
  },
  {
    childId: 1,
    matterId: 1,
    agencyId: 1,
    status: MatterStatus.Open,
    contact: "Mary Freeman",
    details: "Some details",
  },
];

export const findChildMatters = (childId: number) => {
  const childMatters = matters.filter((matter: Matter) => matter.childId === childId);

  return childMatters;
};

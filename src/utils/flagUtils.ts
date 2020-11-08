import { Flag } from "../shared/interfaces/flag.interface";

export const findChildflags = (childId: number, flags: Flag[]) => {
  const childMatters = flags.filter((flag: Flag) => flag.childId === childId);

  return childMatters;
};

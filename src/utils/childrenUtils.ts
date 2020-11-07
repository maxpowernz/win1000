import { Child } from "../shared/interfaces/child.interface";

export const findChildById = (childId: number, children: Child[]): Child => {
  const child = children.find((child) => child.childId === childId);

  if (child === undefined) return {} as Child;

  return child;
};

export const findChildByName = (childId: number, children: Child[]) => {
  const child = children.find((child) => child.childId === childId);

  return child;
};

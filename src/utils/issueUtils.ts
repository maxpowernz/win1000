import { Issue } from "../shared/interfaces/issue.interface";

export const findChildIssues = (childId: number, issues: Issue[]) => {
  const childMatters = issues.filter((issue: Issue) => issue.childId === childId);

  return childMatters;
};

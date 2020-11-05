import { matters, findChildMatters, Matter } from "../mockdata/matter";
import { children } from "../mockdata/children";

it("finds children", () => {
  expect(findChildMatters(1)).toHaveLength(2);
});

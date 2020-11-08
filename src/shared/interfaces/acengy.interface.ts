import { Flag } from "./flag.interface";

export interface Child {
  childId: number;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  ethnicity: Ethnicity;
  nsn: string;
  flags: Flag[];
  family: any;
  health: any;
  education: any;
}

enum Ethnicity {
  Maori,
  European,
  Samoan,
  Tongan,
  Chinese,
  Indian,
}

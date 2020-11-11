import { EducationDocument } from "./documents.interface";
import { Education } from "./education.interface";
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
  education: Education[];
  educationDocuments: EducationDocument[];
  personalDocuments: any;
  healthDocuments: any;
}

enum Ethnicity {
  Maori,
  European,
  Samoan,
  Tongan,
  Chinese,
  Indian,
}

export interface Education {
  schoolId: number;
  schoolName: string;
  schoolType: SchoolType;
  dateStart: string;
}

enum SchoolType {
  ESE,
  Primary,
  Intermediate,
  "High School",
}

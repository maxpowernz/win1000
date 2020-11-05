enum Ethnicity {
  Maori,
  European,
  Samoan,
  Tongan,
  Chinese,
  Indian,
}

interface Child {
  childId: number;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: Date;
  ethnicity: Ethnicity;
}

export const children: Child[] = [
  {
    childId: 1,
    firstName: "Hine",
    ethnicity: Ethnicity.Maori,
    lastName: "Tekapo",
    middleName: "",
    dob: new Date("2010, 08, 05"),
  },
  {
    childId: 2,
    firstName: "Mary",
    lastName: "Johnson",
    middleName: "",
    ethnicity: Ethnicity.European,
    dob: new Date("2005, 08, 05"),
  },
];

export const findChildById = (childId: number) => {
  const child = children.find((child) => child.childId === childId);

  return child;
};

export const findChildByName = (childId: number) => {
  const child = children.find((child) => child.childId === childId);

  return child;
};

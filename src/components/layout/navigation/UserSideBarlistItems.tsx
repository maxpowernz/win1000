import { Dashboard, Domain, LocalHospital, School } from "@material-ui/icons";

import People from "@material-ui/icons/People";
import Person from "@material-ui/icons/Person";
import DashBoardHome from "../../../pages/DashBoardHome";
import PersonalInfo from "../../../pages/PersonalInfo";

export interface SideBarListItem {
  title: string;
  path: string;
  icon: any;
  component: any;
  layout?: string;
  section?: string;
}

export const userSideBarListItems: SideBarListItem[] = [
  {
    title: "Home",
    path: "/dashboard",
    icon: Dashboard,
    component: DashBoardHome,
    layout: "/admin",
  },

  {
    title: "Personal Info",
    path: "/personal-info",
    icon: Person,
    component: PersonalInfo,
    layout: "/admin",
  },

  {
    title: "Whanau",
    path: "/whanau",
    icon: People,
    component: () => "Whanau",
    layout: "/admin",
  },

  {
    title: "Health",
    path: "/health",
    icon: LocalHospital,
    component: () => "Health",
    layout: "/admin",
  },

  {
    title: "Education",
    path: "/education",
    icon: School,
    component: () => "Education",
    layout: "/admin",
  },
];
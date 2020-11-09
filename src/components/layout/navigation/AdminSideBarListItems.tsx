import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Person from "@material-ui/icons/Person";
import Flag from "@material-ui/icons/Flag";
import Business from "@material-ui/icons/Business";
import School from "@material-ui/icons/School";
import DashBoardHome from "../../../pages/DashBoardHome";
import PersonalInfo from "../../../pages/PersonalInfo";
import UserMessages from "../../../pages/user/UserMessages";
import UserProfile from "../../../pages/user/UserProfile";
import Education from "../../../pages/child/Education";
import AdminAgencies from "../../../pages/user/AdminAgenices";
import AdminEducation from "../../../pages/user/AdminEducation";

export interface SideBarListItem {
  title: string;
  path: string;
  icon: any;
  component: any;
  layout?: string;
  section?: string;
}

export const adminSideBarListItems: SideBarListItem[] = [
  {
    title: "Agencies",
    path: "/user/agencies",
    icon: Business,
    component: AdminAgencies,
    layout: "/admin",
  },
  {
    title: "Education",
    path: "/user/education",
    icon: School,
    component: AdminEducation,
    layout: "/admin",
  },
];

import Business from "@material-ui/icons/Business";
import School from "@material-ui/icons/School";
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

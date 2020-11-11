import Business from "@material-ui/icons/Business";
import School from "@material-ui/icons/School";
import AdminAgencies from "../../../pages/user/AdminAgenices";
import AdminEducation from "../../../pages/user/AdminEducation";
import { SideBarListItem } from "../../../shared/interfaces/sideBarListItem.interface";

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

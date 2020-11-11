import Email from "@material-ui/icons/Email";
import Person from "@material-ui/icons/Person";
import Flag from "@material-ui/icons/Flag";
import UserMessages from "../../../pages/user/UserMessages";
import UserProfile from "../../../pages/user/UserProfile";
//import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import UserFlags from "../../../pages/user/UserFlags";

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
    title: "My Profile",
    path: "/user/profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    title: "My Flags",
    path: "/user/flags",
    icon: Flag,
    component: UserFlags,
    layout: "/admin",
  },
  {
    title: "Messages",
    path: "/user/messages",
    icon: Email,
    component: UserMessages,
    layout: "/admin",
  },
];

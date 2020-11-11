import Email from "@material-ui/icons/Email";
import Person from "@material-ui/icons/Person";
import Flag from "@material-ui/icons/Flag";
import UserMessages from "../../../pages/user/UserMessages";
import UserProfile from "../../../pages/user/UserProfile";
import UserFlags from "../../../pages/user/UserFlags";
import { SideBarListItem } from "../../../shared/interfaces/sideBarListItem.interface";

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

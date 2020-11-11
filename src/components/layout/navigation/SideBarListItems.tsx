import Home from "@material-ui/icons/Home";
import DashBoardHome from "../../../pages/DashBoardHome";
import { SideBarListItem } from "../../../shared/interfaces/sideBarListItem.interface";

export const sideBarListItems: SideBarListItem[] = [
  {
    title: "Home",
    path: "/dashboard",
    icon: Home,
    component: DashBoardHome,
    layout: "/admin",
  },
];

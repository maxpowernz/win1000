
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { adminSideBarListItems } from "./components/layout/navigation/AdminSideBarListItems";
import { SideBarListItem, sideBarListItems } from "./components/layout/navigation/SideBarListItems";
import { userSideBarListItems } from "./components/layout/navigation/UserSideBarListItems";
import useLocalStorage from "./hooks/uselocalStorage";

import { Child } from "./shared/interfaces/child.interface";
import { EducationDocument } from "./shared/interfaces/documents.interface";
import { User } from "./shared/interfaces/user.interface";

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

interface AppState {
  isDrawerOpen: boolean;
  sideBarListItems: SideBarListItem[];
  userSideBarListItems: SideBarListItem[];
  adminSideBarListItems: SideBarListItem[];
  selectedChild: Child;
  showChildNavTabs: boolean;
  user: User;
  userLoggedIn: boolean;
}

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const appData: AppState = {
  isDrawerOpen: true,
  sideBarListItems: sideBarListItems,
  userSideBarListItems: userSideBarListItems,
  adminSideBarListItems: adminSideBarListItems,
  selectedChild: {} as Child,
  showChildNavTabs: false,
  user: {} as User,
  userLoggedIn: false,
};

type Action =
  | { type: "OPEN_CLOSE_DRAWER"; payload: boolean }
  | { type: "SHOW_CHILD_NAVTABS"; payload: boolean }
  | { type: "SET_SELECTED_CHILD"; payload: Child }
  | { type: "SET_USER"; payload: User }
  | {
      type: "UPLOAD_DOCUMENT";
      payload: EducationDocument;
    }
  | { type: "SET_LOGGED_IN_STATUS"; payload: boolean };

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "OPEN_CLOSE_DRAWER": {
      return {
        ...state,
        isDrawerOpen: action.payload,
      };
    }
    case "SHOW_CHILD_NAVTABS": {
      return {
        ...state,
        showChildNavTabs: action.payload,
      };
    }
    case "SET_SELECTED_CHILD": {
      return {
        ...state,
        selectedChild: action.payload,
      };
    }
    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "SET_LOGGED_IN_STATUS": {
      return {
        ...state,
        userLoggedIn: action.payload,
      };
    }
    case "UPLOAD_DOCUMENT": {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  // const { width } = useWindowDimensions();
  // appData.isDrawerOpen = width < 600 ? appData.isDrawerOpen : false
  const [state, dispatch] = useReducer(appStateReducer, appData);

  // console.log("provider");

  // const [userState, setUserState] = useLocalStorage("user", {});

  // console.log(userState);

  // useEffect(() => {}, []);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);

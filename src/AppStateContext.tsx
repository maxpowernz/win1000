import React, { createContext, useContext, useReducer } from "react";
import { SideBarListItem, sideBarListItems } from "./components/layout/navigation/SideBarListItems";
import { Child } from "./shared/interfaces/child.interface";
import useWindowDimensions from "./utils/hooks/useWindowDimensions";

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

interface AppState {
  isDrawerOpen: boolean;
  sideBarListItems: SideBarListItem[];
  selectedChild: Child;
  showChildNavTabs: boolean;
}

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const appData: AppState = {
  isDrawerOpen: true,
  sideBarListItems: sideBarListItems,
  selectedChild: {} as Child,
  showChildNavTabs: false,
};

type Action =
  | { type: "OPEN_CLOSE_DRAWER"; payload: boolean }
  | { type: "SHOW_CHILD_NAVTABS"; payload: boolean }
  | { type: "SET_SELECTED_CHILD"; payload: Child };

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

    default: {
      return state;
    }
  }
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { width } = useWindowDimensions();
  appData.isDrawerOpen = width < 600 ? appData.isDrawerOpen : false
  const [state, dispatch] = useReducer(appStateReducer, appData);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);

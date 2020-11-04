import React, { createContext, useContext, useReducer } from "react";
import { SideBarListItem, sideBarListItems } from "./components/layout/navigation/SideBarListItems";

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

interface AppState {
  isDrawerOpen: boolean;
  sideBarListItems: SideBarListItem[];
}

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const appData: AppState = {
  isDrawerOpen: true,
  sideBarListItems: sideBarListItems,
};

type Action = { type: "OPEN_CLOSE_DRAWER"; payload: boolean };

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "OPEN_CLOSE_DRAWER": {
      return {
        ...state,
        isDrawerOpen: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);

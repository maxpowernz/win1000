import React from "react";
import { useAppState } from "../../AppStateContext";
import ChildAgenciesTable from "../../components/dashboard/ChildAgenciesTable";
import ChildflagsTable from "../../components/dashboard/ChildFlagsTable";

export default function Agencies() {
  const { state, dispatch } = useAppState();

  return (
    <div>
      {state.selectedChild.education && (
        <ChildAgenciesTable flags={state.selectedChild.flags}></ChildAgenciesTable>
      )}
    </div>
  );
}

import React from "react";
import { useAppState } from "../../AppStateContext";
import ChildAgenciesTable from "../../components/child/ChildAgenciesTable";

export default function Agencies() {
  const { state } = useAppState();

  return (
    <div>
      {state.selectedChild.education && (
        <ChildAgenciesTable flags={state.selectedChild.flags}></ChildAgenciesTable>
      )}
    </div>
  );
}

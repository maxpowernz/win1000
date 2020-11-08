import React from "react";
import { useAppState } from "../../AppStateContext";
import ChildIssuesTable from "../../components/dashboard/ChildIssuesTable";

export default function Agencies() {
  const { state, dispatch } = useAppState();

  return (
    <div>
      {state.selectedChild.education && (
        <ChildIssuesTable issues={state.selectedChild.issues}></ChildIssuesTable>
      )}
    </div>
  );
}

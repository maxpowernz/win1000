import React from "react";
import { useAppState } from "../../AppStateContext";
import ChildHealthTable from "../../components/dashboard/ChildHealthTable";

export default function Health() {
  const { state, dispatch } = useAppState();

  return (
    <div>
      {state.selectedChild.issues && (
        <ChildHealthTable data={state.selectedChild.health}></ChildHealthTable>
      )}
    </div>
  );
}

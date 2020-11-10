import React from "react";
import { useAppState } from "../../AppStateContext";
import ChildHealthTable from "../../components/child/ChildHealthTable";

export default function Health() {
  const { state, dispatch } = useAppState();

  return (
    <div>
      {state.selectedChild.flags && (
        <ChildHealthTable data={state.selectedChild.health}></ChildHealthTable>
      )}
    </div>
  );
}

import React from "react";
import { useAppState } from "../../AppStateContext";
import ChildEducationTable from "../../components/dashboard/ChildEducationTable";
import ChildHealthTable from "../../components/dashboard/ChildHealthTable";

export default function Education() {
  const { state, dispatch } = useAppState();

  return (
    <div>
      {state.selectedChild.education && (
        <ChildEducationTable data={state.selectedChild.education}></ChildEducationTable>
      )}
    </div>
  );
}

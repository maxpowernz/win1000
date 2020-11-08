import React from "react";
import { useAppState } from "../../AppStateContext";
import ChildflagsTable from "../../components/dashboard/ChildFlagsTable";

export default function Agencies() {
  const { state, dispatch } = useAppState();

  return (
    <div>
      {state.selectedChild.education && (
        <ChildflagsTable flags={state.selectedChild.flags}></ChildflagsTable>
      )}
    </div>
  );
}

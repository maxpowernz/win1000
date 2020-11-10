import React from "react";
import { useAppState } from "../../AppStateContext";
import ChildEducationTable from "../../components/child/ChildEducationTable";
import ChildHealthTable from "../../components/child/ChildHealthTable";
import DocumentsTable from "../../components/child/DocumentsTable";

export default function Education() {
  const { state, dispatch } = useAppState();

  return (
    <div>
      {state.selectedChild.education && (
        <>
          <ChildEducationTable data={state.selectedChild.education}></ChildEducationTable>
          <DocumentsTable
            data={state.selectedChild.education}
            heading="Documents"
            user={state.user}></DocumentsTable>
        </>
      )}
    </div>
  );
}

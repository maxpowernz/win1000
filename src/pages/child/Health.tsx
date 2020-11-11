import React from "react";
import { useAppState } from "../../AppStateContext";
import ChildHealthTable from "../../components/child/ChildHealthTable";
import HealthDocumentsTable from "../../components/child/HealthDocumentsTable";

export default function Health() {
  const { state } = useAppState();

  return (
    <div>
      {state.selectedChild.flags && (
        <ChildHealthTable data={state.selectedChild.health}></ChildHealthTable>
      )}
      {state.selectedChild.healthDocuments && (
        <HealthDocumentsTable
          data={state.selectedChild.healthDocuments}
          heading="Health Documents"></HealthDocumentsTable>
      )}
    </div>
  );
}

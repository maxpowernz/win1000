import Typography from "@material-ui/core/Typography";
import React from "react";
import { useAppState } from "../../AppStateContext";

export default function Family() {
  const { state, dispatch } = useAppState();

  const { father, mother, careGiver } = state.selectedChild.family;

  return (
    <Typography>
      <div>
        Mother: {mother.firstName} {mother.lastName}
      </div>
      <div>
        Father: {father.firstName} {father.lastName}
      </div>
      <div>
        Caregiver: {careGiver.firstName} {careGiver.lastName}
      </div>
    </Typography>
  );
}

import Typography from "@material-ui/core/Typography";
import React from "react";
import { useAppState } from "../../AppStateContext";

export default function Family() {
  const { state } = useAppState();

  const { father, mother, careGiver } = state.selectedChild.family;

  return (
    <>
      <Typography gutterBottom>
        Birth Mother: {mother.firstName} {mother.lastName}
      </Typography>
      <Typography gutterBottom>
        Birth Father: {father.firstName} {father.lastName}
      </Typography>
      <Typography gutterBottom>
        Current Caregiver: {careGiver.firstName} {careGiver.lastName}, {careGiver.relationShip}
      </Typography>
      <Typography gutterBottom>
        Primary Contact: {careGiver.firstName} {careGiver.lastName}, {careGiver.relationShip}
      </Typography>
      <Typography gutterBottom>Secondary Contact: Jane Smith, Oranga Tamariki</Typography>
    </>
  );
}

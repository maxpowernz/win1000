import Typography from "@material-ui/core/Typography";
import moment from "moment";
import React from "react";
import { useAppState } from "../../AppStateContext";
import ChildFlagsTable from "../../components/child/ChildFlagsTable";

export default function PersonalInfo() {
  const { state, dispatch } = useAppState();

  const { firstName, lastName, middleName, dateOfBirth } = state.selectedChild;

  return (
    <div>
      <Typography>Name: {`${firstName} ${middleName} ${lastName}`}</Typography>
      <Typography>Date of Birth: {moment(new Date(dateOfBirth)).format("DD/MM/YYYY")}</Typography>
      <Typography>Age: {moment().diff(dateOfBirth, "years")}</Typography>
      {state.selectedChild.flags && (
        <ChildFlagsTable flags={state.selectedChild.flags}></ChildFlagsTable>
      )}
    </div>
  );
}

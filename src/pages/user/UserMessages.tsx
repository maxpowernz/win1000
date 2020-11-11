import { Typography } from "@material-ui/core";
import React from "react";

interface Props {}

function UserMessages(props: Props) {
  return (
    <Typography variant="h5">
      this page is where you can read and send message, similar to an email inbox
    </Typography>
  );
}

export default UserMessages;

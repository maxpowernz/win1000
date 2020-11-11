import { Typography } from "@material-ui/core";
import React from "react";

interface Props {}

function UserFlags(props: Props) {
  return (
    <Typography variant="h5">
      This page will contain all the flags that you have created, and you can add and edit flags
    </Typography>
  );
}

export default UserFlags;

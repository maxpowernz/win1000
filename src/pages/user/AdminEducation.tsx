import { Typography } from "@material-ui/core";
import React from "react";

interface Props {}

function AdminEducation(props: Props) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        This page is where admins add and edit schools and there contacts
      </Typography>
      <Typography variant="h5">Import excel or database to start with</Typography>
    </>
  );
}

export default AdminEducation;

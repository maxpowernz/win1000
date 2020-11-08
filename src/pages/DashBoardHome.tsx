import Grid from "@material-ui/core/Grid";
import React from "react";
import DashBoardSearch from "../components/dashboard/DashBoardSearch";
import InboxTable from "../components/dashboard/InboxTable";
import FlagsTable from "../components/dashboard/ChildFlagsTable";
import user from "../mockdata/user.json";

function DashBoardHome() {
  return (
    <>
      <Grid container>
        <Grid item xs={8}>
          <DashBoardSearch />
        </Grid>

        <Grid
          container
          item={true}
          xs={4}
          direction="column"
          alignItems="flex-end"
          justify="space-around"
          style={{ fontSize: 16 }}>
          <div>
            {user.firstName} {user.lastName}
          </div>
          <div>Organisation: {user.organisation}</div>
          <div>Role: {user.role}</div>
        </Grid>
      </Grid>

      <InboxTable />
    </>
  );
}

export default DashBoardHome;

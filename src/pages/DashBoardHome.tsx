import Grid from "@material-ui/core/Grid";
import React from "react";
import DashBoardSearch from "../components/dashboard/DashBoardSearch";
import InboxTable from "../components/dashboard/InboxTable";
import { Avatar, Typography } from "@material-ui/core";
import { useAppState } from "../AppStateContext";

function DashBoardHome() {
  const { state } = useAppState();

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
          <Avatar style={{ padding: 30 }}>
            <Typography variant="h4">
              {state.user.userId && state.user.firstName.substring(0, 1)}
            </Typography>
          </Avatar>
          <div>
            {state.user.firstName} {state.user.lastName}
          </div>
          <div>Organisation: {state.user.organisationName}</div>
          <div>Role: {state.user.role}</div>
        </Grid>
      </Grid>

      <InboxTable />
    </>
  );
}

export default DashBoardHome;

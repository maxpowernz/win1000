import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import SchoolIcon from "@material-ui/icons/School";
import PeopleIcon from "@material-ui/icons/People";
import Person from "@material-ui/icons/Person";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { NavLink } from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button component={NavLink} to="/" activeStyle={{ color: "red" }} selected>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button component={NavLink} to="/test">
      <ListItemIcon>
        <Person />
      </ListItemIcon>
      <ListItemText primary="Personal Information" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Whanau" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <LocalHospitalIcon />
      </ListItemIcon>
      <ListItemText primary="Health" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Education" />
    </ListItem>
  </div>
);

export const adminListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);

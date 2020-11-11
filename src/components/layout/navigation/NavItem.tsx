import React from "react";
import { NavLink } from "react-router-dom";
import { Button, ListItem, makeStyles } from "@material-ui/core";
import { SideBarListItem } from "../../../shared/interfaces/sideBarListItem.interface";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    //color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "flex-start",
    letterSpacing: 0,
    padding: "10px 8px",
    width: "100%",
    color: theme.palette.grey[50],
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  icon: {
    marginRight: theme.spacing(2),
    fontSize: "2rem",
  },
  title: {
    marginRight: "auto",
  },
  active: {
    color: theme.palette.primary.main,
  },
}));

const NavItem = ({ path, icon: Icon, title, layout, onClick }: SideBarListItem) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.item} disableGutters>
      {!onClick ? (
        <Button
          activeClassName={classes.active}
          className={classes.button}
          component={NavLink}
          to={layout + path}>
          <Icon className={classes.icon} />
          <span className={classes.title}>{title}</span>
        </Button>
      ) : (
        <Button className={classes.button} onClick={onClick}>
          <Icon className={classes.icon} />
          <span className={classes.title}>{title}</span>
        </Button>
      )}
    </ListItem>
  );
};

export default NavItem;

import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import { makeStyles } from "@material-ui/core";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { useAuth } from "./contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    color: "inherit",
    "&:hover": {
      color: "inherit",
      textDecoration: "none",
    },
  },
});

export function MainListItems() {
  const { logout } = useAuth();
  const history = useHistory();
  const classes = useStyles();

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/admin/login");
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div>
      <Link className={classes.link} to="/admin/dashboard">
        <ListItem selected={history.location.pathname === "/admin/dashboard"} button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Thesis Panel" />
        </ListItem>
      </Link>
      <Link className={classes.link} to="/admin/contacts">
        <ListItem selected={history.location.pathname === "/admin/contacts"} button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItem>
      </Link>
      <Link className={classes.link} to="/admin/manage-account">
        <ListItem selected={history.location.pathname === "/admin/manage-account"} button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Account" />
        </ListItem>
      </Link>
      <ListItem onClick={handleLogout} button>
        <ListItemIcon>
          <PermIdentityIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </div>
  );
}

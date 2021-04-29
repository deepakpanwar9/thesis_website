import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AdminContactTable from "./AdminContactTable";
import AdminLayout from "./AdminLayout";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  heading: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    marginBottom: "20px",
    "& h3": {
      fontWeight: "bold",
    },
  },
  addButton: {
    justifySelf: "end",
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <AdminLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.heading}>
            <h3>All Contact Messages</h3>
          </div>
          <AdminContactTable />
        </Grid>
      </Grid>
    </AdminLayout>
  );
}

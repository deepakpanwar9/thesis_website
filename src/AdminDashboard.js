import React, { useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AdminThesisTable from "./AdminThesisTable";
import AdminLayout from "./AdminLayout";
import AddIcon from "@material-ui/icons/Add";
import UploadThesisForm from "./UploadThesisForm";

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
  const tableRef = React.createRef();

  //   states
  const [open, setOpen] = useState(false);

  //   handlers
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const refresh = () => {
    tableRef.current && tableRef.current.onQueryChange();
  };

  return (
    <>
      <UploadThesisForm
        open={open}
        handleClose={handleClose}
        refresh={refresh}
      />
      <AdminLayout>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.heading}>
              <h3>All Thesis</h3>
              <div className={classes.addButton}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpen}
                  endIcon={<AddIcon />}
                >
                  Add Thesis
                </Button>
              </div>
            </div>
            <AdminThesisTable tableRef={tableRef} refresh={refresh} />
          </Grid>
        </Grid>
      </AdminLayout>
    </>
  );
}

import React from "react";
import {
  makeStyles,
  Paper,
  TextField,
  FormControl,
  Button,
  FormHelperText,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import AdminLayout from "./AdminLayout";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Users() {
  const classes = useStyles();
  const history = useHistory();
  const { logout, updatePassword } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [serverErr, setServerError] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const initialValues = {
    new_password: "",
    confirm_password: "",
  };

  const validationSchema = yup.object().shape({
    new_password: yup
      .string()
      .min(6, "Must be longer than 6 character")
      .required(),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("new_password"), null], "Passwords dont match")
      .required(),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    setServerError("");
    try {
      // make the post request here
      await updatePassword(values.new_password);

      // show success message
      setOpen(true);

      // logout
      await logout();

      //redirect to login
      history.push("/admin/login");

      // console.log(data);
      resetForm();
    } catch (e) {
      // console.log(e.response.data);
      setServerError(e.response.data.message);
    }
    // console.log("Submit : ", values);
    setSubmitting(false);
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <AdminLayout title="Manage Account">
      <Grid justify="center" container spacing={3}>
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              justifyItems: "center",
            }}
          >
            <h3>Update Password</h3>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form
                  style={{
                    border: "2px solid #fff",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                  }}
                >
                  {serverErr.length > 0 ? (
                    <div
                      style={{
                        width: "100%",
                        display: "grid",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid red",
                        justifyContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <FormHelperText
                        style={{
                          fontSize: "1rem",
                          fontWeigth: "medium",
                        }}
                        error
                      >
                        {serverErr}
                      </FormHelperText>
                    </div>
                  ) : null}
                  <FormControl>
                    <Field
                      as={TextField}
                      required
                      name="new_password"
                      variant="outlined"
                      id="new-password"
                      label="New Password"
                      placeholder="New Password"
                      style={{ width: "55ch" }}
                      margin="normal"
                      helperText=""
                      type={showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleShowPassword}
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <ErrorMessage
                      name="new_password"
                      component={FormHelperText}
                      style={{
                        margin: "0 0 10px 10px",
                      }}
                      error
                    />
                  </FormControl>
                  <FormControl>
                    <Field
                      as={TextField}
                      required
                      name="confirm_password"
                      variant="outlined"
                      id="confirm-new-password"
                      label="Confirm New Password"
                      placeholder="Confirm New Password"
                      style={{ width: "55ch" }}
                      margin="normal"
                      helperText=""
                      type={showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleShowPassword}
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <ErrorMessage
                      name="confirm_password"
                      component={FormHelperText}
                      style={{
                        margin: "0 0 10px 10px",
                      }}
                      error
                    />
                  </FormControl>
                  <Button
                    color="primary"
                    variant="contained"
                    style={{
                      marginTop: "30px",
                    }}
                    type="submit"
                    disabled={props.isSubmitting}
                  >
                    {props.isSubmitting ? (
                      <CircularProgress style={{ color: "#fff" }} />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          Password Changed successfully !
        </Alert>
      </Snackbar>
    </AdminLayout>
  );
}

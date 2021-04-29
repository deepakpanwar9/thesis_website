import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
  Modal,
  Backdrop,
  Fade,
  Typography,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CancelIcon from "@material-ui/icons/Cancel";
import { projectStorage, firebase, db } from "./firebase/config";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyItems: "center",
    padding: "20px 30px",
  },
  form: {
    border: "2px solid #fff",
    display: "grid",
    gridTemplateColumns: "1fr",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  input: {
    display: "none",
  },
  uploadButton: {
    // marginTop: "20px",
  },
  errorMessage: {
    margin: "0 0 10px 0",
    fontSize: "1rem",
  },
  inputFileContainer: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gridGap: "10px",
    alignItems: "center",
    marginTop: "20px",
  },
  fileInfo: {
    display: "flex",
    alignItems: "center",
  },
  fileName: {
    margin: 0,
    marginRight: 10,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function UploadThesisForm({ open, handleClose, refresh }) {
  const classes = useStyles();
  const [file, setFile] = useState();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertConfig, setAlertConfig] = useState({
    status: "",
    message: "",
  });

  const initialValues = {
    title: "",
    description: "",
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required("Please give your thesis a title"),
    description: yup
      .string()
      //   .min(40, "Must be longer than 40 characters")
      .required("Please describe your thesis ( Preferably in 50-60 words )"),
    // file: yup
    //   .string()
    //   .oneOf([yup.ref("new_password"), null], "Passwords dont match")
    //   .required(),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    setAlertConfig({
      status: "",
      message: "",
    });
    setAlertOpen(false);
    if (!file) {
      setAlertConfig({
        status: "error",
        message: "Please select a file",
      });
      setAlertOpen(true);
      return;
    }
    try {
      const path = `/thesis/${values.title}_${file.name}`;
      const storageRef = projectStorage.ref(path);
      const uploadTask = await storageRef.put(file);
      const downloadURL = await storageRef.getDownloadURL();

      // console.log(uploadTask);
      await db.collection("thesis").add({
        ...values,
        file_path: path,
        downloadURL: downloadURL,
        filename: file.name,
        dateCollected: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setAlertConfig({
        status: "success",
        message: "Thesis uploaded successfully",
      });
      setAlertOpen(true);
      resetForm();
      setFile();
      handleClose();
      refresh();
    } catch (e) {
      setAlertConfig({
        status: "error",
        message: "Error while uploading the thesis.",
      });
      setAlertOpen(true);
      console.log(e);
    }
    setSubmitting(false);
  };

  const handleInputFile = (e) => {
    const { files } = e.target;
    const { name } = files[0];
    console.log(name);
    setFile(files[0]);
  };

  const removeInputFile = (e) => {
    setFile();
  };

  return (
    <>
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleAlertClose} severity={alertConfig.status}>
          {alertConfig.message}
        </Alert>
      </Snackbar>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <Typography
              component="h2"
              className={classes.title}
              variant="h6"
              color="primary"
              gutterBottom
            >
              Add a thesis
            </Typography>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form className={classes.form}>
                  <FormControl>
                    <Field
                      as={TextField}
                      required
                      name="title"
                      variant="outlined"
                      id="title"
                      label="Title"
                      placeholder="Title of the thesis"
                      style={{ minWidth: "55ch" }}
                      margin="normal"
                      helperText=""
                    />
                    <ErrorMessage
                      name="title"
                      className={classes.errorMessage}
                      component={FormHelperText}
                      error
                    />
                  </FormControl>
                  <FormControl>
                    <Field
                      as={TextField}
                      required
                      name="description"
                      variant="outlined"
                      id="description"
                      label="Description"
                      multiline
                      rows={3}
                      placeholder="Write a few lines about your thesis (50-60 words)"
                      style={{ minWidth: "55ch" }}
                      margin="normal"
                      helperText=""
                    />
                    <ErrorMessage
                      name="description"
                      component={FormHelperText}
                      className={classes.errorMessage}
                      error
                    />
                  </FormControl>
                  <div className={classes.inputFileContainer}>
                    <div>
                      <input
                        accept="application/pdf"
                        className={classes.input}
                        id="contained-button-file"
                        type="file"
                        name="file"
                        disabled={file ? true : false}
                        onChange={handleInputFile}
                      />
                      <label
                        style={{ width: "max-content" }}
                        htmlFor="contained-button-file"
                      >
                        <Button
                          className={classes.uploadButton}
                          variant="contained"
                          color="primary"
                          disabled={file ? true : false}
                          component="span"
                        >
                          Upload PDF
                        </Button>
                      </label>
                    </div>
                    {file && (
                      <div className={classes.fileInfo}>
                        <p className={classes.fileName}>{file.name}</p>
                        <IconButton onClick={removeInputFile}>
                          <CancelIcon />
                        </IconButton>
                      </div>
                    )}
                  </div>

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
        </Fade>
      </Modal>
    </>
  );
}

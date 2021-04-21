// Absolute imports
import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

// Relative imports
import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    author: "",
    title: "",
    body: "",
    tags: "",
    selectedFiles: "",
  });

  const handleSubmit = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autocomplete="off"
        noValidate
        clasSName={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Share Recipe</Typography>
        <TextField
          name="author"
          variant="outlined"
          label="Author"
          fullWidth
          value={postData.author}
          onChange={(e) => setPostData({ ...postData, author: e.target.value })}
        />
      </form>
    </Paper>
  );
};

export default Form;

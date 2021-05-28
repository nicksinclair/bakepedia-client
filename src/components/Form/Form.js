// Absolute imports
import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

// Relative imports
import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";

const initialPostData = {
  title: "",
  body: "",
  tags: "",
  selectedFiles: "",
};

const Form = ({ currentId, setCurrentId }) => {
  // Styles
  const classes = useStyles();

  // State
  const [postData, setPostData] = useState(initialPostData);
  const dispatch = useDispatch();

  // If a post _id is selected, find the post data for the matching _id
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  // Event handlers
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, authorName: user?.result?.name })
      );
    } else {
      dispatch(createPost({ ...postData, authorName: user?.result?.name }));
    }

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData(initialPostData);
  };

  // If user is not logged in, do not let them post
  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please sign in to share your own recipes!
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Edit" : "Share"} Recipe
        </Typography>

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <TextField
          name="body"
          variant="outlined"
          label="Body"
          fullWidth
          value={postData.body}
          onChange={(e) => setPostData({ ...postData, body: e.target.value })}
        />

        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({
              ...postData,
              tags: e.target.value.replace(" ", "").split(","),
            })
          }
        />

        {/* <div className={classes.fileInput}>
            TODO: upload image data using base64
        </div> */}

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          {currentId ? "SAVE" : "SHARE"}
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          CLEAR
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

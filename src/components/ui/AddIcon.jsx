import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const AddIconComment = ({ addComment }) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <IconButton aria-label="delete" className={classes.margin}>
          <AddIcon onClick={addComment} />
        </IconButton>
      </div>
    </div>
  );
};

export default AddIconComment;

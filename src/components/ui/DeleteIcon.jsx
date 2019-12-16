import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const DeleteIconTask = ({ deleteTodo }) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon onClick={deleteTodo} color="secondary"/>
        </IconButton>
      </div>
    </div>
  );
};

export default DeleteIconTask;

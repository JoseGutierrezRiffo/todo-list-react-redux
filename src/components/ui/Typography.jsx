import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Text = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.title}
      variant="h5"
      align="center"
      color="textPrimary"
      gutterBottom
    >
      {text}
    </Typography>
  );
};

export default Text;

import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions/todoActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import "../components/ui/style/input.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  input: {}
}));

const AddTodo = ({ dispatch }) => {
  const classes = useStyles();
  let input;

  return (
    <div className={classes.root}>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <Grid container>
          <Grid item xs={6} sm={6} md={6}>
            <label htmlFor="inp" className="inp">
              <input
                type="text"
                id="inp"
                placeholder="&nbsp;"
                ref={node => (input = node)}
              />
              <span className="label">Nueva tarea</span>
              <span className="border"></span>
            </label>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <Button variant="primary" type="submit">
              Agregar nueva tarea
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default connect()(AddTodo);

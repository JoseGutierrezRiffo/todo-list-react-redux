import React from "react";
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Container from "@material-ui/core/Container";
import ButtonAppBar from "./components/ui/Appbar";
import Grid from "@material-ui/core/Grid";

const App = () => (
  <div>
    <ButtonAppBar text="Todo-list react-redux" />
    <div style={{ marginTop: "70px" }}>
      <Container maxWidth="sm">
        <Grid>
          <Grid item xs={12} md={12}>
            <AddTodo />
          </Grid>
          <Grid item xs={12} md={12}>
            <VisibleTodoList />
          </Grid>
          <Grid item xs={12} md={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  </div>
);

export default App;

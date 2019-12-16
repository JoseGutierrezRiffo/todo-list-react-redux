import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../store/actions/todoActions";
import Grid from "@material-ui/core/Grid";
import Typography from "../components/ui/Typography";

const Footer = () => (
  <div>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={12}>
        <p>Show:</p>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </Grid>
    </Grid>
  </div>
);

export default Footer;

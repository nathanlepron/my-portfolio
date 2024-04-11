
import { Grid } from "@mui/material";
import Gridcard from "./components/projects/gridcard/Gridcard";
import React, { lazy } from 'react';


export default function Home() {
  return (
    <div className="test">
      <Grid container spacing={2} columns={12}>
        <Gridcard/>
        <Gridcard/>
        <Gridcard/>
        <Gridcard/>
      </Grid>
    </div>
  );
}

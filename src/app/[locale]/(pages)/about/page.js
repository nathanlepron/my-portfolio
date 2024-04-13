import { Grid } from "@mui/material";
import Gridcard from "../../../components/projects/gridcard/Gridcard";
import React from 'react';



export default function About(){
  return(
    <div>
      <main className="test">
        <Grid container spacing={2} columns={12}>
          <Gridcard/>
          <Gridcard/>
          <Gridcard/>
          <Gridcard/>
        </Grid>
      </main>
    </div>
  )
}
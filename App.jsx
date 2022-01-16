import React from 'react';
import {
  Grid
} from '@material-ui/core';
import Quiz from './quiz.jsx';
let App = () => {
  return (
    <Grid style={{ height: "75em"}} container spacing={2}>
      <Grid style={{ background: "#0469ff" }} item xs={6} md={6}>
        <div>
          <Quiz></Quiz>
        </div>
      </Grid>
      <Grid style={{background: "#06d78a" }}  item xs={6} md={6}>
        <div></div>
        <Quiz></Quiz>
      </Grid>
    </Grid>
  );
}

export default App;

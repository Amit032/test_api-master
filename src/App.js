import React, { Component } from 'react';
import './App.css';
import { Grid } from '@material-ui/core'
import Signin from './Signin';




class App extends Component {
  render() {
    return (
      <Grid 
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh', backgroundColor: '#EDF6FF' }}>
        <Signin />
      </Grid>
      
    );
  }
}

export default App;

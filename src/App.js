import React, { Component } from 'react';
import './App.css';
import { Grid } from '@material-ui/core'
import Signup from './Signup';




class App extends Component {
  render() {
    return (
      <Grid 
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh', backgroundColor: '#EDF6FF' }}>
        <Signup />
      </Grid>
      
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import RestoApp from './components/RestoApp';
import { createMuiTheme } from '@material-ui/core';

class App extends Component {
  render() {
    
  const theme=createMuiTheme({
    typography:{
      fontFamily: "Roboto"
    },
  	palette: {
		primary:{
	  	main:'#303f9f'
		},
		secondary:{
			main:'#3f51b5'
		}
	}
})


    return ( 
      <div className="App">
        <RestoApp/>
      </div>
      
    );
  }
}
export default App;

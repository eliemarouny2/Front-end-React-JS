import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useDispatch } from 'react-redux';

export default function Header1() {
  const dispatch=useDispatch();
  return (
  <AppBar position="static" >
  <Tabs  aria-label="simple tabs example">
    <Tab label="Page One" onClick={() => dispatch({type: "RESTO_PAGE"})}/>
    <Tab label="Page Two" onClick={() => dispatch({type: "VISIT_PAGE"})} />
  </Tabs>
</AppBar>
  )
    
}

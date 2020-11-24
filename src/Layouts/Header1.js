import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";



export default function Header1() {
  return (
  <AppBar position="static" >
  <Tabs  aria-label="simple tabs example">
    <Tab label="Page One" href="/"/>
    <Tab label="Page Two" href="/page2" />
  </Tabs>
</AppBar>
  )
    
}

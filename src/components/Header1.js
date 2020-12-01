import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

export default function Header1() {
  const dispatch=useDispatch();

  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
      [theme.breakpoints.up('xs')]: {
        display: 'block',
      },
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    }}));
    const classes = useStyles();


  return (
  <AppBar position="static" className={classes.grow} >
  <Tabs className={classes.grow} value="pages"  aria-label="simple tabs example">
    <Tab label="Page One" value="pages"  onClick={() => dispatch({type: "RESTO_PAGE"})}/>
    <Tab label="Page Two" value="pages" onClick={() => dispatch({type: "VISIT_PAGE"})} />
  </Tabs>
</AppBar>
  )
    
}

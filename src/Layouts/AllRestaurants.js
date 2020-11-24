import React, {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from './PrimarySearcAppBar';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function NestedGrid() {
  const classes = useStyles();
  const [cards, setCards] = useState([])
  useEffect(()=>{
    Axios.get("http://localhost:8201/Restaurants")
    .then(res=>{
      setCards(res.data)
      
    })
  },[])


  function Todo({todo,index}){
return (       <Grid item xs={4}>
    <Paper className={classes.paper}> <Typography variant="h5" color="default">{todo.name}</Typography></Paper>
  </Grid>
)}

  return (
    <div className={classes.root}>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Typography variant="h2">Available Restaurants</Typography>

      <Grid container spacing={1}>



       {cards.map((todo,index)=>(
            <Todo key={index} index={index} todo={todo}/>
         ))}

 





        
        </Grid>






   
    </div>
  );
}
import React, {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const rows = [

];

export default function BasicTable() {
  const [cards, setCards] = useState([])
  const classes = useStyles();

useEffect(()=>{
  Axios.get("http://localhost:8201/Visits")
  .then(res=>{
    setCards(res.data)
    
  })
},[])

  function Todo({todo,index}){
return (
  <TableRow>
  <TableCell align="left">{todo.visitID}</TableCell>
<TableCell align="left">{todo.visitDate}</TableCell>
</TableRow>
)
  }





  return (
    <TableContainer component={Paper}>
      <Typography variant="h2">Visited Restaurants</Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="left"><Typography style={{ fontWeight: 600 }}>
                                    Restaurant Name
                                    </Typography></TableCell>
            <TableCell align="left"><Typography style={{ fontWeight: 600 }}>
                                    Visit Date
                                      </Typography></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
         {cards.map((todo,index)=>(
            <Todo key={index} index={index} todo={todo}/>
         ))}

            
            
            
          

        </TableBody>
      </Table>
    </TableContainer>
  );
}
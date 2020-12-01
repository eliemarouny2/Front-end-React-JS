import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PrimarySearchAppBar from './PrimarySearcAppBar';
import SnackBar from './SnackBar';
import _ from 'lodash';
import { GetRestoList } from '../redux/actions/RestoAction';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import Paginating from './Paginating';
import { GetSearchInput } from '../redux/actions/SearchAction.js';
import { GetTypeChosen } from '../redux/actions/TypeAction';
import  Checkbox  from '@material-ui/core/Checkbox';
import AddVisitAction from '../redux/actions/AddVisitAction';


const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  padding: theme.spacing(10),
	  textAlign: 'center',
	  color: theme.palette.text.secondary,
	},
	search: {
		marginLeft:'50%',
		
		display: 'flex',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.50),
	},
  }));

  


function ShowRestos({resto,index}){
	const dispatch=useDispatch();
	const classes = useStyles();
	const FetchData = () => {
		dispatch(GetRestoList())}
	
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
	  setOpen(true);
	};
	const handleClose = () => {
	  setOpen(false);
	};
	const RestoList = useSelector(state =>state.RestoList);
	useEffect(() =>{
		FetchData()},[])




	const AddVisit = (buttonInfo) =>{
	
            const today =+ new Date();
            let restodata={};
            for(resto of RestoList.data){
              if(String(resto.id)===String(buttonInfo.target.value)){
                  restodata=resto;
              }
            }
            let restaurant = { "visitdate": today ,"restaurant": restodata} ;
		dispatch(AddVisitAction(restaurant));
		
		
		
	}


  
  return ( 	<Grid item xs={4} >
				<Paper className={classes.paper} onClick={handleClickOpen}>
				 	<img width="160px" height="100px" src={"../restopics/"+resto.name+".jpg" } alt="couldn't load image" ></img>
					<Typography variant="h4" color="default">{resto.name} </Typography>
					
  
				</Paper>
				<Dialog value={resto.name} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} className={resto.name}>
					<DialogTitle>Restaurant Information</DialogTitle>
				 	<List>
				 		<ListItem>
						Name: {resto.name}
						 </ListItem>
				 		<ListItem>
						Type: {resto.type}
				 		</ListItem>
				 		<ListItem>
					 	Cost for two: {resto.cost} $
				 		</ListItem>
				 		<ListItem>
						Address: {resto.address}
						 </ListItem>

				 		<ListItem>
						 Number: {resto.number}
				 		</ListItem>
						 <ListItem>
								Check to save a visit today
								  <Checkbox   variant="outlined" className={resto.name} key={resto.id}  value={resto.id} onClick={AddVisit}    variant="contained" color="primary">Check Visit</Checkbox> 
								  
						 
						 </ListItem>
				 	</List>
				</Dialog>
				 
			</Grid>            
  )}



function RestaurantContainer(){
	const classes = useStyles();

	const dispatch = useDispatch();
	const RestoList = useSelector(state =>state.RestoList);
	useEffect(() =>{
		FetchData()
		},[])
	const FetchData = () => {
		dispatch(GetRestoList())}


	const SearchInput=useSelector(state=>state.search);
	useEffect(()=>{
		FetchInput()
	},[])

	const FetchType = () => {
		dispatch(GetTypeChosen())}
	const FetchInput=()=>{
		dispatch(GetSearchInput())
	}
	const TypeChosen=useSelector(state=>state.type);
	useEffect(()=>{
		FetchType()
	},[])

	

	const [currentPage,setCurrentPage]=useState(1); //kermel kel awal 6 ykuno bnafes l page
	const [postsPerPage,setPostsPerPage]=useState(6);

	const indexOfLastPost= currentPage*postsPerPage;
	const indexOfFirstPost=indexOfLastPost-postsPerPage;
	
	const paginate= (pageNumber) => setCurrentPage(pageNumber); //pagination numbers



	const showData =  () => {
		if(!_.isEmpty(RestoList.data)){ //hon am shuf l array l jebto mnl restoaction eza fade
			return RestoList.data.filter((resto)=>{
				if(TypeChosen.data===""){
					return resto
				}
				else if(resto.type.includes(TypeChosen.data)){
					return resto
				}
			}).filter((resto)=>{
				if(SearchInput.data===""){ return resto
				}
				else if (resto.name.toLocaleLowerCase().includes(SearchInput.data.toLocaleLowerCase())){ //filtering lal search
					return resto
				}
			}).slice(indexOfFirstPost,indexOfLastPost).map((resto,index)=>(		//slicing la assim l data la pages
				<ShowRestos key={index} index={index} resto={resto}/>	
			))
		}
		if(RestoList.loading){
			return <Typography variant="h2">Loading Data</Typography>
		}
		if(RestoList.errorMsg !=="") { //snackbar error la eza ma ejena data
			return <SnackBar/>
		}
		return <SnackBar/>
	};




	return(
		<div> 	
			<PrimarySearchAppBar></PrimarySearchAppBar>	
			<Typography variant="h2">Available Restaurants</Typography>
			<Grid container spacing={1}>
				{showData()}
			</Grid>
			<Paginating postsPerPage={postsPerPage} totalPosts={RestoList.data.length} paginate={paginate}/>
		</div>

		)	
}

export default RestaurantContainer;
import Axios from 'axios';


export const GetRestoList = () => async dispatch => {
    try{
        dispatch({
            type:"RESTAURANT_LIST_LOADING"
        })
        const res= await Axios.get('http://localhost:8080/Restaurants');

        dispatch({
            type: "RESTAURANT_LIST_SUCCESS",
            payload: res.data
        })
    }
    catch(e){
        dispatch({
        type:"RESTAURANT_LIST_FAILED",
    })
    }
};


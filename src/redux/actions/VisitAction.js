import Axios from 'axios';
import { useSelector } from 'react-redux';

export const GetVisitList = () => async dispatch => {
    try{
        dispatch({
            type:"VISIT_LIST_LOADING"
        })
        const res=await Axios.get("http://localhost:8080/Visits");






        dispatch({
            type:"VISIT_LIST_SUCCESS",
            payload: res.data
        })
    }
    catch(e){
        dispatch({
            type:"VISIT_LIST_FAILED",
        })
    }
};

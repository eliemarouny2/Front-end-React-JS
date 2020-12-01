import Axios from 'axios';

export const AddVisitAction=(data) => async dispatch => {
try{
    dispatch({
        type:"NO_NEW_VISITS"
    })
    await Axios.post('http://localhost:8080/addVisit',data);
    dispatch({
        type:"NEW_VISIT",
        payload:data.data
    })
  

    }
catch(error){
    dispatch({
        type:"NEW_VISIT_FAILED",
        errorMsg:"new visit failed to save"
    })
}
}
export default AddVisitAction
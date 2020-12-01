  
import { combineReducers } from 'redux';
import SwitchPageReducer from './SwitchPageReducer';
import RestoReducer from './RestoReducer';
import VisitReducer from './VisitReducer';
import SearchReducer from './SearchReducer';
import TypeReducer from './TypeReducer';


const rootReducer= combineReducers({

    switchpage:SwitchPageReducer,
    RestoList:RestoReducer,
    VisitList:VisitReducer,
    search:SearchReducer,
    type:TypeReducer


	});

export default rootReducer;
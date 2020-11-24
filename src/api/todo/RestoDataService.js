import Axios from 'axios';

class RestoDataService {
retrieveRestaurants(){
    return Axios.get("http://localhost:8201/Restaurants");
}
}
export default new RestoDataService()
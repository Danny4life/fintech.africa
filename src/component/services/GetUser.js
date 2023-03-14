import axios from "axios";

const GETUSER_API_URL = "http://localhost:8080/getUser"


class GetUser {

    getUsersById(id){
        return axios.get(GETUSER_API_URL + "/" + id);

    }

}

export default new GetUser();
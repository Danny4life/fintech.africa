import axios from "axios";

const GETUSER_API_URL = "http://localhost:8080/getUser"


class GetUser {

    getUsersById(id){
        return axios.get(GETUSER_API_URL + "/" + id);

    }

    updateUser(usersModel, id){

        return axios.put(GETUSER_API_URL + "/" + id, usersModel);

    }
}

export default new GetUser();
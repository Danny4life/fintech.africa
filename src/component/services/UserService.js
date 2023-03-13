import axios from axios;

const USER_API_BASE_URL = "http://localhost:8080/register";

class UserService {

    createUsersAccount(usersModel){
        return axios.post(USER_API_BASE_URL, usersModel);
    }

}

export default new UserService();
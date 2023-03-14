import axios from "axios";

const LOGIN_API_BASE_URL = "http://localhost:8080/login";


class LoginService {

    loginUser(loginModel){
        return axios.post(LOGIN_API_BASE_URL, loginModel);
    }

}

export default new LoginService();
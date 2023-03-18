import axios from "axios";
const CHANGE_PASSWORD_URL = "http://localhost:8080/changePassword"


class ChangePasswordService {

    changePassword(passwordModel){
        return axios.post(CHANGE_PASSWORD_URL, passwordModel);
    }

}

export default new ChangePasswordService();
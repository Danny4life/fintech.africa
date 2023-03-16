import axios from "axios";

const GET_EMAILVERIVICATIONTOKEN_API = "http://localhost:8080/verifyRegistration?token=";



class EmailVerificationService {

    verifyRegistration(token){
        return axios.get(GET_EMAILVERIVICATIONTOKEN_API + token);
    }

}

export default new EmailVerificationService();
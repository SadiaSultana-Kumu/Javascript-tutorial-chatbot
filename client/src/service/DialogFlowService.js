import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

class DialogFlowService {

    addTextQuery(payload) {
        return axios.post(API_URL + `text-query`, payload,
            {
                headers: {
                    who: "user",
                }
            });
    }

}


export default new DialogFlowService();
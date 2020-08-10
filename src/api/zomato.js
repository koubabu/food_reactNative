//npm install axios
import axios from "axios";

export default axios.create({
    baseURL: "https://developers.zomato.com/api/v2.1",
    headers: {
        "user-key": "f6cf2771484b2a00f4ff84eb9337cf8b",
    },
});

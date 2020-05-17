import  axios from "axios";
const instance = axios.create();
instance.defaults.baseURL = "https://beauty-box-4c631.firebaseio.com";

export default instance;
import axios from "axios";

const Api = axios.create({
  baseURL: "https://webservicero.revisaenem.com.br/api/",
 });

export default Api
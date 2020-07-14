import axios from "axios";

export default axios.create({
  baseURL: "https://mama-fastify.herokuapp.com/api/v1",
});

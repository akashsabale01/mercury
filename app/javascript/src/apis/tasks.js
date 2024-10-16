import axios from "axios";

const fetch = () => axios.get("/tasks");

const create = payload => axios.post("/tasks", { task: payload });

const taskApi = { fetch, create };

export default taskApi;

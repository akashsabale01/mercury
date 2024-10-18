import axios from "axios";

const fetch = () => axios.get("/tasks");

const create = payload => axios.post("/tasks", { task: payload });

const show = slug => axios.get(`/tasks/${slug}`);

const taskApi = { fetch, create, show };

export default taskApi;

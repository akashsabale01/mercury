import axios from "axios";

const fetch = () => axios.get("/tasks");

const show = slug => axios.get(`/tasks/${slug}`);

const create = payload => axios.post("/tasks", { task: payload });

const update = ({ slug, payload }) =>
  axios.patch(`/tasks/${slug}`, {
    task: payload,
  });

const destroy = slug => axios.delete(`/tasks/${slug}`);

const taskApi = { fetch, create, show, update, destroy };

export default taskApi;

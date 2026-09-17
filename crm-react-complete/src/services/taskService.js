import api from "./api";
export const taskService = {
  getAll: () => api.get("/tasks").then(r => r.data),
  getById: id => api.get(`/tasks/${id}`).then(r => r.data),
  create: data => api.post("/tasks", data).then(r => r.data),
  update: (id, data) => api.put(`/tasks/${id}`, data).then(r => r.data),
  remove: id => api.delete(`/tasks/${id}`)
};

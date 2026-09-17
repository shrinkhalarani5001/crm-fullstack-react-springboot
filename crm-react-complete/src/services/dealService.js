import api from "./api";
export const dealService = {
  getAll: () => api.get("/deals").then(r => r.data),
  getById: id => api.get(`/deals/${id}`).then(r => r.data),
  create: data => api.post("/deals", data).then(r => r.data),
  update: (id, data) => api.put(`/deals/${id}`, data).then(r => r.data),
  remove: id => api.delete(`/deals/${id}`)
};

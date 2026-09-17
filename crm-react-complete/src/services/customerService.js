import api from "./api";
export const customerService = {
  getAll: () => api.get("/customers").then(r => r.data),
  getById: id => api.get(`/customers/${id}`).then(r => r.data),
  create: data => api.post("/customers", data).then(r => r.data),
  update: (id, data) => api.put(`/customers/${id}`, data).then(r => r.data),
  remove: id => api.delete(`/customers/${id}`)
};

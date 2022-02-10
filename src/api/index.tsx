import axios from 'axios';

const url = 'http://localhost:3006/clients';

export const fetchClients = () => axios.get(url);
export const createBuilding = (id?: any, newbuilding?: any) =>
  axios.post(`${url}/${id}/buildings`, newbuilding);
export const deleteClient = (id?: any) => axios.delete(`${url}/${id}`);
export const editClient = (id?: any) => axios.patch(`${url}/${id}/`);

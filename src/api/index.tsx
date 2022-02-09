import axios from 'axios';

const url = 'http://localhost:3006/clients';

export const fetchClients = () => axios.get(url);
export const createClient = (newClient?: any) => axios.post(url, newClient);
export const deleteClient = (id?: any) => axios.delete(`${url}/${id}`);
export const editClient = (id?: any) => axios.patch(`${url}/${id}/`);

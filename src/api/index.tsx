import axios from 'axios';

const url = 'https://tower-node.herokuapp.com/clients';

export const fetchClients = () => axios.get(url);

export const getBuildings = (id: any) => axios.get(`${url}/${id}/buildings`);

export const createBuilding = (id: any, newBuilding: any) =>
  axios.post(`${url}/${id}/buildings`, newBuilding);

export const deleteBuilding = (id: any, buillding_id: any) =>
  axios.delete(`${url}/${id}/buildings/${buillding_id}`);

export const editBuilding = (id: any, building_id: any, building:any) =>
  axios.patch(`${url}/${id}/buildings/${building_id}`, building);

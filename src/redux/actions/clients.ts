import * as api from '../../api/index';
import { GET_CLIENTS, POST_CLIENTS, DELETE_CLIENT, EDIT_CLIENT } from '../types';

export const getClients = () => async (dispatch : any) => {
  try {
    const { data } = await api.fetchClients();
    const action = { type: GET_CLIENTS, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
  
export const createBuilding = (id : any, newbuilding : any) => async (dispatch : any) => {
  console.log(id);
  const { data } = await api.createBuilding(id , newbuilding);
  try {
    const action = { type: POST_CLIENTS, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const deleteBuilding = (id : string, buildingId: string) => async (dispatch : any) => {
  try {
    const { data } = await api.deleteBuilding(id, buildingId);
    const action = { type: DELETE_CLIENT, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const editingBuilding = (id : string, buildingId: string, building: any) => async (dispatch : any) => {
  try {
    const { data } = await api.editBuilding(id, buildingId, building);
    const action = { type: EDIT_CLIENT, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
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
  
  export const createClient = (mood : any) => async (dispatch : any) => {
    try {
      const { data } = await api.createClient(mood);
      const action = { type: POST_CLIENTS, payload: data };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteClient = (id : number) => async (dispatch : any) => {
    try {
      await api.deleteClient(id);
      const action = { type: DELETE_CLIENT, payload: id };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const editClient = (id : number) => async (dispatch : any) => {
    try {
      const { data } = await api.editClient(id);
      const action = { type: EDIT_CLIENT, payload: data };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
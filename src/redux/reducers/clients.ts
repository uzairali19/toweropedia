import { GET_CLIENTS, POST_CLIENTS, DELETE_CLIENT, EDIT_CLIENT } from '../types';

const initialState : any = [];

const clientsReducer = (state = initialState, action : any) => {
  switch (action.type) {
    case GET_CLIENTS:
      return action.payload;
    case POST_CLIENTS:
      return [...state, action.payload];
    case DELETE_CLIENT:
      return state.filter((client:any) => client._id !== action.payload);
    default:
      return state;
  }
};

export default clientsReducer;
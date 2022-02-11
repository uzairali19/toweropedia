import { GET_CLIENTS, POST_CLIENTS, DELETE_CLIENT, EDIT_CLIENT } from '../types';

const initialState : any = [];

const clientsReducer = (state = initialState, action : any) => {
  switch (action.type) {
    case GET_CLIENTS:
      return action.payload;
    case POST_CLIENTS:
      return [...state, state.map((client:any)=>{
        if(client._id === action.payload._id){
          client.buildings = action.payload.buildings
        }
      })];
    case DELETE_CLIENT:
      const prevState = [...state]
      return state.filter((client:any) => {client.buildings.map((building:any)=>{
        if(building._id === action.payload.building_id){
          return building._id
        }
      }) !== action.payload.building_id});
    default:
      return state;
  }
};

export default clientsReducer;
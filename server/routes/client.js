import express from 'express';
import {
  createBuildings,
  createClients,
  getBuildings,
  getClient,
  getClients,
  deleteBuilding,
  getBuilding,
  editBuilding,
} from '../controller/clients.js';

const clientsRouter = express.Router();

clientsRouter.get('/', getClients);
clientsRouter.post('/', createClients);

clientsRouter.get('/:id', getClient);

clientsRouter.get('/:id/buildings', getBuildings);
clientsRouter.post('/:id/buildings', createBuildings);

clientsRouter.get('/:id/buildings/:id', getBuilding);
clientsRouter.delete('/:id/buildings/:building_id', deleteBuilding);
clientsRouter.patch('/:id/buildings/:id', editBuilding);

export default clientsRouter;

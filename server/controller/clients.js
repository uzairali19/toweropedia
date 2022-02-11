import mongoose from 'mongoose';
import Client from '../model/client.js';

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    console.log(clients);
    res.status(200).json(clients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createClients = async (req, res) => {
  const { client_name } = req.body;
  const newClient = new Client({ client_name });
  try {
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getClient = async (req, res) => {
  const { id } = req.body;
  const client = await Client.findById(id);
  try {
    res.status(200).json(client);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBuildings = async (req, res) => {
  const { id } = req.body;
  const client = await Client.findById(id);
  try {
    res.status(200).json(client.buildings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBuildings = async (req, res) => {
  const { name, position } = req.body;
  const id = req.params.id;
  const client = await Client.findById(id);
  client.buildings.push({ name, position });
  try {
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getBuilding = async (req, res) => {
  const { id, building_id } = req.body;
  const client = await Client.findById(id);
  const building = client.buildings.id(building_id);
  try {
    res.status(200).json(building);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteBuilding = async (req, res) => {
  const id = req.params.id;
  const building_id = req.params.building_id;
  if (!mongoose.Types.ObjectId.isValid(building_id))
    return res.status(404).send(`No Building With the Id: ${building_id}`);

  const client = await Client.findById(id);
  const building = client.buildings.id(building_id);

  try {
    building.remove();
    client.save();
    res.json({ message: `Building ${building} Deleted Successfully` , building_id: building_id});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editBuilding = async (req, res) => {
  const { id, building_id, name, position } = req.body;
  if (!mongoose.Types.ObjectId.isValid(building_id))
    return res.status(404).send(`No Building With the Id: ${building_id}`);

  const client = await Client.findById(id);
  const building = client.buildings.id(building_id);

  if (name) {
    building.name = name;
  }
  if (position) {
    building.position = position;
  }
  try {
    client.save();
    res.json({ message: `Building ${building} Edited Successfully` });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

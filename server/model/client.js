import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const buildingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const clientSchema = new Schema(
  {
    client_name: {
      type: String,
      required: true,
    },
    buildings: [buildingSchema],
  },
  {
    timestamps: true,
    usePushEach: true,
  }
);

const Client = mongoose.model('Client', clientSchema);

export default Client;

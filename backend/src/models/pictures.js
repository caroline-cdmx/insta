import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  url: {
    type: String,
    required: true
  }
});

export default mongoose.model('Picture', pictureSchema);
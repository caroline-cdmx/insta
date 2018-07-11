import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  img: { data: Buffer, contentType: String }
});

export default mongoose.model('Picture', pictureSchema);
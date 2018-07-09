import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  location: {
    type: String,
    required: true
  },
  picture: {
    type: "Picture",
    required: true
  },
  likes: {
    type: [Users],
    default: [],
  },
  posted_at: {
    type: Date,
    default: new Date()
  }
});

export default mongoose.model('Post', postSchema);
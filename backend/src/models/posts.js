import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  location: {
    type: [Number,Number],
    index: "2d"
  },
  likers: [{
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }]
},{ timestamps: true });

export default mongoose.model('Post', postSchema);
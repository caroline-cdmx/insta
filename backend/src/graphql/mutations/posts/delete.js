import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'
import Post from '../../../models/posts';
import { PostInputType, PostType } from '../../types/posts';

export default {
  type: PostType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params) {
    const deletedPost = await Post.findByIdAndRemove(params.id)
    return deletedPost
  }
}
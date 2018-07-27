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
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(PostInputType)
    }
  },
  async resolve (root, params) {
    try {
      const post = await Post.findByIdAndUpdate(params.id,
        { $set: { ...params.data } }
      )
      return post
    } catch (err) {
      throw new Error('Error al hacer update')
    }
  }
}
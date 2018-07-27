import {
  GraphQLList
} from 'graphql';

import Post from '../../../models/posts';
import { PostType } from '../../types/posts';


const queryAllPosts = {
  type: new GraphQLList(PostType), 
  async resolve () {
    const posts = await Posts.find()
    return posts
  }
}

export default queryAllPosts;
import { GraphQLNonNull, GraphQLID } from 'graphql';

import Post from '../../../models/posts';
import { PostType } from '../../types/posts';

const querySinglePost = {
    type: PostType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    async resolve (root, params) {
        const posts = await Post.findById(params.id)
        return posts
    }
}

export default querySinglePost;
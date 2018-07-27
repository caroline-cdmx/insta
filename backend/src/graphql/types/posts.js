import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLNumber
} from 'graphql'

import { UserType } from './users';

export const PostType = new GraphQLObjectType({
  name: "ListPosts",
  description: "Posts de la BD",
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    imageUrl: {
      type: GraphQLString
    },
    location: {
      type: [ GraphQLNumber, GraphQLNumber ]
    },
    likers: {
      type: new GraphQLList(UserType),
      resolve: (post) => post.likers
    }
  })
});

export const PostInputType = new GraphQLInputObjectType({
  name: "addPost",
  description: "Agrega, modifica post a la bd",
  fields: () => ({
    imageUrl: {
      type: GraphQLString
    },
    location: {
      type: [GraphQLNumber, GraphQLNumber]
    }
  })
})
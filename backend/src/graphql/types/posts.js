import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLNumber
} from 'graphql'


export const PostType = new GraphQLObjectType({
  name: "ListPosts",
  description: "Posts de la BD",
  fields: () => ({
    _id:{
      type:GraphQLNonNull(GraphQLID)
    },
    url:{
      type:GraphQLString
    },
    image_url: {
      type: GraphQLString
    },
    location: {
      type: GraphQLNumber
    },
    likers: {
      type: Schema.Types.ObjectId
    }
  })
});

export const PostInputType = new GraphQLInputObjectType({
  name: "addPost",
  description: "Agrega, modifica post a la bd",
  fields: () => ({
    url:{
      type:GraphQLString
    },
    image_url: {
      type: GraphQLString
    },
    location: {
      type: GraphQLNumber
    }
  })
})
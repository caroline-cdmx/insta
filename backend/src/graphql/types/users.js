import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList
} from 'graphql'

import User from '../../models/users';

export const UserType = new GraphQLObjectType({
  name: "Users",
  description: "Usuarios de la BD",
  fields: () => ({
    _id:{
      type:GraphQLNonNull(GraphQLID)
    },
    firstName:{
      type:GraphQLString
    },
    lastName:{
      type:GraphQLString
    },
    email:{
      type:GraphQLString
    },
    photo: {
      type: Schema.Types.ObjectId,
      ref: "Picture"
    },
    followers: {
      type: new GraphQLList(UserType),
      resolve: (user) => user.followers
    },
    following: {
      type: new GraphQLList(UserType),
      resolve: (user) => user.following
      
    },
    posts:{
      type: new GraphQLList(PostType),
      resolve: (user) => user.posts
    }

  })
});

export const UserInputType = new GraphQLInputObjectType({
  name: "AddUsers",
  description: "Agrega, modifica nuevos usuarios a la bd",
  fields: () => ({
    firstName:{
      type:GraphQLString
    },
    lastName:{
      type:GraphQLString
    },
    password:{
      typeGraphQLString
    },
    email:{
      type:GraphQLString
    },
    photo:{
      type:GraphQLID
    }
  })
})



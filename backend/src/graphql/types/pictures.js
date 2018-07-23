import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat
} from 'graphql'


export const PictureType = new GraphQLObjectType({
  name: "ListPictures",
  description: "Pictures de la BD",
  fields: () => ({
    _id:{
      type:GraphQLNonNull(GraphQLID)
    },
    url:{
      type:GraphQLString
    }
  })
});

export const PictureInputType = new GraphQLInputObjectType({
  name: "addPicture",
  description: "Agrega, modifica foto a la bd",
  fields: () => ({
    url:{
      type:GraphQLString
    }
  })
})



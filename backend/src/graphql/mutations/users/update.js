import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'
import User from '../../../models/users';
import { UserInputType, UserType } from '../../types/users';

export default {
  type: UserType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(UserInputType)
    }
  },
  async resolve (root, params) {
    try {
      const user = await User.findByIdAndUpdate(params.id,
        { $set: { ...params.data } }
      )
      return user
    } catch (err) {
      throw new Error('Error al hacer update')
    }
  }
}
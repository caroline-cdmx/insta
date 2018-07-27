import {
  GraphQLList
} from 'graphql';

import User from '../../../models/users';
import { UserType } from '../../types/users';


const queryAllUsers = {
  type: new GraphQLList(UserType), 
  async resolve () {
    const users = await User.find()
    return users
  }
}

export default queryAllUsers;
import {
  GraphQLList
} from 'graphql';

import User from '../../../models/users';
import { UserType } from '../../types/users';


const queryAllUsers = {
  type: new GraphQLList(UserType), 
  async resolve () {
    const User = await User.find()
    return User
  }
}

export default queryAllPosts;
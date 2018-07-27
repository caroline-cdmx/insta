import { GraphQLNonNull, GraphQLID } from 'graphql';

import User from '../../../models/users';
import { UserType } from '../../types/users';

const querySingleUser = {
    type: UserType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    async resolve (root, params) {
        const users = await User.findById(params.id)
        return users
    }
}

export default querySingleUser;
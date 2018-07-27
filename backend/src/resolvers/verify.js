import User from '../models/users';
import jwt from 'jsonwebtoken';

const expiresIn = "3d";
const secret = "samplejwtnetflix";
const tokenPrefix = "JWT";


export const verifyToken = async (token) => {
  try {
    const [prefix, tokenReceived] = token.split(' ');
    if (!tokenReceived) {
      throw new Error('No token provided');
    }
    if (prefix != tokenPrefix) {
      throw new Error('Invalid header format');
    }
    const payload = await jwt.verify(tokenReceived, secret)
    const user = await User.findById(payload.id)
    if (!user) throw new Error("User doesn't exist")
    return user
  } catch (err) {
    throw Error("Error not exepted")
  }
}
import jwt from 'jsonwebtoken';
import User from '../models/users';

const expiresIn = "1d";
const secret = "samplejwtnetflix";
const tokenPrefix = "JWT";


export const createToken = async (email, password) => {

  if (!email || !password) {
    return false
  }
  let user
  try {
    user = await User.findOne({
      'email': email
    })
  }
  catch (err) {
    return err
  }
  try {
    const isMatch = await user.comparePassword(password)
    if (isMatch) {
      let payload = {
        email: user.email,
        id: user._id
      }
      const token = jwt.sign(payload, secret, {
        expiresIn
      });
      console.log('there there::::::::',token )
      return token
    }
  } catch (err) {
    return err
  };
}
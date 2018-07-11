import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    type: Schema.Types.ObjectId,
    ref: "Picture"
  },
  followers: [this],
  following: [this],
  posts:[{
    type: Schema.Types.ObjectId,
    ref: "Post"
  }]
});

UserSchema.pre('save', function (next) {
  console.log(this)
  let user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    })

  })
})

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    cb(null, isMatch)
  })
}

//TODO: Aqui voy a agregar el 'trigger' o hasheo de password

export default mongoose.model('Users', UserSchema);
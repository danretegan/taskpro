import User from './schemas/usersSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import utils from '../utils/utils.js';

async function addUsertoDB(data) {
  await User.validate(data);

  const alreadyExistingDoc = await User.findOne({ email: data.email });
  if (alreadyExistingDoc) {
    return 'user already exists';
  }

  const newUser = {
    name: data.name,
    email: data.email,
    password: utils.encrypt(data.password),
  };

  return User.create(newUser);
}

function findUser(data) {
  return User.findOne(data);
}

function updateUser(userId, updates) {
  return User.findByIdAndUpdate(userId, updates, {
    new: true,
    runValidators: true,
  });
}

async function checkUserLoginData(data) {
  const user = await User.findOne({ email: data.email });
  if (!user) {
    return 'email is wrong';
  }

  const decryptedPassword = bcrypt.compareSync(data.password, user.password);
  if (!decryptedPassword) {
    return 'password is wrong';
  }

  return user;
}

async function addUserToken(data) {
  const { email, id } = data;

  const paylaod = { email, id };
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(paylaod, secret, { expiresIn: '1h' });

  await User.findByIdAndUpdate(data.id, { token });

  return token;
}

async function validateData(data) {
  await User.validate(data);
}

const usersService = {
  addUsertoDB,
  findUser,
  updateUser,
  checkUserLoginData,
  addUserToken,
  validateData,
};

export default usersService;

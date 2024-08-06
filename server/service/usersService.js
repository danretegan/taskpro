import User from './schemas/usersSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function addUsertoDB(data) {
  await User.validate(data);

  const alreadyExistingDoc = await User.findOne({ email: data.email });
  if (alreadyExistingDoc) {
    return 'user already exists';
  }

  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(data.password, salt);

  const newUser = {
    name: data.name,
    email: data.email,
    password: encryptedPassword,
  };

  return User.create(newUser);
}

function findUser(data) {
  return User.findOne(data);
}

async function updateUser(userId, updates) {
  if (updates.password) {
    const salt = bcrypt.genSaltSync(10);
    updates.password = bcrypt.hashSync(updates.password, salt);
  }

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

const usersService = {
  addUsertoDB,
  findUser,
  updateUser,
  checkUserLoginData,
  addUserToken,
};

export default usersService;

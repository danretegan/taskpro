import usersService from '../service/usersService.js';
import utils from '../utils/utils.js';

async function register(req, res, next) {
  try {
    const result = await usersService.addUsertoDB({ ...req.body });

    if (result === 'user already exists') {
      res.status(409).json({
        status: 'failed',
        code: 409,
        message: 'This email is already used',
      });
      return;
    }

    const token = await usersService.addUserToken(result);

    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'User created successfully.',
      data: {
        token,
        user: {
          email: result.email,
          name: result.name,
          avatarUrl: result.avatarUrl,
        },
      },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      utils.handleValidationError(res, error.message);
      return;
    }

    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        status: 'failed',
        code: 400,
        message: 'Missing fields. You must enter: email and password !',
      });
      return;
    }

    const result = await usersService.checkUserLoginData({ email, password });

    if (result === 'email is wrong' || result === 'password is wrong') {
      res.status(400).json({
        status: 'failed',
        code: 400,
        message: result,
      });
      return;
    }

    const token = await usersService.addUserToken(result);

    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Logged in successfully',
      data: {
        token,
        user: {
          email: result.email,
          name: result.name,
          avatarUrl: result.avatarUrl,
        },
      },
    });
  } catch (error) {
    next(error);
  }
}

async function logout(req, res, next) {
  try {
    await usersService.updateUser(req.user.id, { token: null });

    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Logged out successfully',
    });
  } catch (error) {
    next(error);
  }
}

async function getCurrentUserData(req, res, next) {
  try {
    const { email, name, avatarUrl } = req.user;

    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        user: {
          name,
          email,
          avatarUrl,
        },
      },
    });
  } catch (error) {
    next(error);
  }
}

async function updateProfile(req, res, next) {
  console.log('Received update request:', req.body);
  try {
    const { id } = req.user;
    const { name, email, password } = req.body;

    const updatedUser = await usersService.updateUser(id, { name, email, password });
    console.log('Updated user:', updatedUser);

    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Profile updated successfully',
      data: {
        user: {
          name: updatedUser.name,
          email: updatedUser.email,
          avatarUrl: updatedUser.avatarUrl,
        },
      },
    });
  } catch (error) {
    console.error('Server error in updateProfile:', error);
    res.status(500).json({
      status: 'error',
      code: 500,
      message: error.message || 'A apărut o eroare la actualizarea profilului',
    });
  }
}

const usersController = {
  register,
  login,
  logout,
  getCurrentUserData,
  updateProfile,
};

export default usersController;

import usersService from '../service/usersService.js';
import utils from '../utils/utils.js';
import uploadOnCloudinary from '../config/config-cloudinary.js';
import fs from 'fs/promises';

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
          password: req.body.password,
          name: result.name,
          theme: result.theme,
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
          password,
          name: result.name,
          theme: result.theme,
          profilePhotoUrl: result.profilePhotoUrl,
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
    const { email, name, profilePhotoUrl, theme } = req.user;

    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        user: {
          name,
          email,
          profilePhotoUrl,
          theme,
        },
      },
    });
  } catch (error) {
    next(error);
  }
}

async function updateUserProfile(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const hasAllRequiredFields = name && email && password;

    if (!hasAllRequiredFields) {
      res.status(400).json({
        status: 'failed',
        code: 400,
        message:
          'In order to update the profile, you must enter values for all of these fields: name, email and password',
      });
      return;
    }
    await usersService.validateData({ name, email, password });

    const userId = req.user.id;
    const updates = { name, email, password: utils.encrypt(password) };
    let result = await usersService.updateUser(userId, updates);

    if (req.file) {
      const filePath = req.file.path;
      const fileName = req.file.filename.split('.')[0];

      updates.profilePhotoUrl = await uploadOnCloudinary(filePath, fileName);
      result = await usersService.updateUser(userId, updates);

      // await fs.unlink(filePath);
    }

    res.status(200).json({
      status: 'succes',
      code: 200,
      message: 'The profile has been successfully updated',
      data: {
        user: {
          name: result.name,
          email: result.email,
          password,
          profilePhotoUrl: result.profilePhotoUrl,
        },
      },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      utils.handleValidationError(res, error.message);
      return;
    }

    if (error.codeName === 'DuplicateKey') {
      utils.handleDuplicateEmail(res);
      return;
    }

    next(error);
  }
}

async function updateUserTheme(req, res, next) {
  try {
    const { theme } = req.body;

    if (!theme) {
      res.status(400).json({
        status: 'failed',
        code: 400,
        message: 'theme: => this field is required',
      });
      return;
    }

    const userId = req.user.id;
    const result = await usersService.updateUser(userId, { theme });

    res.status(200).json({
      status: 'succes',
      code: 200,
      message: "Your profile's theme has been successfully updated",
      data: {
        user: {
          theme: result.theme,
          name: result.name,
          email: result.email,
          profilePhotoUrl: result.profilePhotoUrl,
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

const usersController = {
  register,
  login,
  logout,
  getCurrentUserData,
  updateUserProfile,
  updateUserTheme,
};

export default usersController;

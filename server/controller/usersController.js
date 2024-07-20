import usersService from '../service/usersService.js';
import utils from '../utils/utils.js';

// TODO: => Corectat rutele in functie de noul proiect

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

    // todo: modificat codul in asa fel incat sa ma logheze direct, adica trebuie sa creez tokenul si aici

    res.status(201).json({
      status: 'success',
      code: 201,
      user: {
        name: result.name,
        email: result.email,
      },
      message:
        'User created successfully. Now, check your email and confirm the registration.',
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

    if (result.verify === false) {
      res.status(400).json({
        status: 'failed',
        code: 400,
        message: 'Confirm your registration first, then you can log in.',
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
          dailyCalorieIntake: result.dailyCalorieIntake,
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
    const { email, name, dailyCalorieIntake } = req.user;

    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        user: {
          name,
          email,
          dailyCalorieIntake,
        },
      },
    });
  } catch (error) {
    next(error);
  }
}

const usersController = {
  register,
  login,
  logout,
  getCurrentUserData,
};

export default usersController;

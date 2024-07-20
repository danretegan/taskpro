import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import usersService from "../service/usersService.js";
import { configDotenv } from "dotenv";

configDotenv({ path: "./environment/.env" });

const opts = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
  new Strategy(opts, async (payload, done) => {
    try {
      const user = await usersService.findUser({ _id: payload.id });

      if (!user) {
        return done(new Error("User not found"));
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

function validateAuth(req, res, next) {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (!user || err) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "Unauthorized",
      });
    }
    req.user = user;
    next();
  })(req, res, next);
}

export default validateAuth;

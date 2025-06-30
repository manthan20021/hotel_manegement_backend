const passport = require("passport");
const LocalStrategy = require("passport-local");
const person = require("./models/employ");


passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      // Find the user by username
      let user = await person.findOne({ username });
      
      // If user not found, return false
      if (!user) {
        return done(null, false);
      }
      // Import and comper comparePassword from the employ model

      require("./models/employ").comparePassword;

      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return done(null, false, { message: "Incorrect password" });
      }

      // If password is correct, return the user
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport;

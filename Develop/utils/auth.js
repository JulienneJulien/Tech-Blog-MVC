const withAuth = (req, res, next) => {
    // TO send request back to the login route if user is not logged in.
    if (!req.session.userId) {
      res.redirect("/login");
    } else {
      next();
    }
  };

  module.exports = withAuth;
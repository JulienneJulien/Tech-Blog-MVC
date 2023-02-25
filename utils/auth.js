const withAuth = (req, res, next) => {
    // TO send request back to the login route if user is not logged in.
    if (!req.session.user_id) {
      res.redirect("/login");
    } else {
      next();
    }
  };

  module.exports = withAuth;
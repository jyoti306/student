function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.render("home.ejs"); // before login page
}

module.exports = isLoggedIn
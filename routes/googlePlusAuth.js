const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        console.log('callback!');
        res.redirect('/');
    });

    app.get('/api/logout', (req, res) => {
        req.logout(); // logout function is attached to the req object by passport
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}
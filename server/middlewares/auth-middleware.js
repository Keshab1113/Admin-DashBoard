const isAuthenticated = (req, res, next) => {
    console.log(`Request method: ${req.method}, URL: ${req.url} status:${req.isAuthenticated()}`);
    if (req.isAuthenticated()) {
        return next();
    }

    res.status(401).json({ message: 'Unauthorized' });
};

module.exports = {isAuthenticated};

const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log('No token or incorrect format');
        return res.status(401).json({ message: 'No token provided or token format is incorrect' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const jwtResponse = jwt.verify(token, process.env.secret000);
        req.payload = jwtResponse.userId;
        req.role = jwtResponse.role;
        console.log('Token valid:', jwtResponse);
        next();
    } catch (error) {
        console.error('JWT verification error:', error);
        res.status(401).json({ message: 'Authorization failed: Invalid or expired token' });
    }
};


module.exports = jwtMiddleware;

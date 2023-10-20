const jwt = require('jsonwebtoken');

class AuthMiddleware {
  constructor(secret) {
    this.secret = secret;
  }

  verifyToken = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const cookie = req.headers.cookie.split('=')[1];
      const decoded = jwt.verify(token, this.secret);
      const authorized = jwt.verify(cookie, this.secret);
      if(authorized.id == decoded.id) {
        return next();
      }
      return res.status(401).json({ error: 'Unauthorized ya' });
    } catch (error) {
      return res.status(401).json({ error: 'Unauthorized bang' });
    }
  }
}

module.exports = AuthMiddleware
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  register = async (user) => {
    try {
      const {username, password, email} = user;
      const hashPassword = await bcrypt.hash(password, 10);
      return await this.userRepository.create({
        name : username,
        password: hashPassword,
        email
      })
    } catch (error) {
      throw error;
    }
  }

  login = async (user) => {
    try {
      const {username, password} = user;
      const userFound = await this.userRepository.findByUsername(username);
      if (!userFound) {
        throw new Error('User not found');
      }
      const isPasswordCorrect = await bcrypt.compare(password, userFound.password);
      if (!isPasswordCorrect) {
        throw new Error('Incorrect password');
      }
      return jwt.sign({id: userFound.id}, process.env.ACCESS_TOKEN, {expiresIn: '1h'});
    }
    catch (error) {
      throw error;
    }
  }
}

module.exports = AuthService;
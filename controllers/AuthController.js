class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  register = async (req, res) => {
    try {
      const {username, password, email} = req.body;
      const user = await this.authService.register({
        username,
        password,
        email
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }

  login = async (req, res) => {
    try {
      const {username, password} = req.body;
      const user = await this.authService.login({
        username,
        password
      });
      res.cookie('access_token', user, {
        httpOnly: true,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }

  logout = async (req, res) => {
    try {
      res.clearCookie('access_token');
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }
}

module.exports = AuthController;
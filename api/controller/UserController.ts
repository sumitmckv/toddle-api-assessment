import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

export default class UserController {
  async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required to login' });
      }
      const token = sign({ username }, process.env.JWT_SECRET as string, { expiresIn: '2h' });
      res.json({ username, token });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}

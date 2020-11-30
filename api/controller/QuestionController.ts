import { Request, Response } from 'express';
import { getRepository, InsertResult, Repository } from 'typeorm';
import Question from '../../entity/question';

export default class QuestionController {
  async addQuestion(req: Request, res: Response) {
    try {
      const { name, description } = req.body;
      if (!name) {
        return res.status(400).json({ message: 'Question name is required' });
      }
      const repository: Repository<Question> = getRepository(Question);
      const result: InsertResult = await repository.insert({ name, description });
      if (!result || !result.raw) {
        return res.status(400).json({ message: 'Failed to add question' });
      }
      res.status(201).json(result.raw);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async getQuestions(req: Request, res: Response) {
    try {
      const repository: Repository<Question> = getRepository(Question);
      const data = await repository.find();
      res.json(data);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}

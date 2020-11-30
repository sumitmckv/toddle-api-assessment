import { Request, Response } from 'express';
import { getRepository, InsertResult, Repository } from 'typeorm';
import Survey from '../../entity/survey';
import SurveyResponse from '../../entity/surveyResponse';

interface SurveyRequest {
  questionId: string;
  answer: boolean;
}

interface TakeSurveyRequest {
  surveyId: string;
  response: SurveyRequest[];
}

export default class SurveyController {
  async addSurvey(req: Request, res: Response) {
    try {
      const { name, description, questions } = req.body;
      if (!name) {
        return res.status(400).json({ message: 'Question name is required' });
      }
      const repository: Repository<Survey> = getRepository(Survey);
      const result: InsertResult = await repository.insert({ name, description, questions });
      if (!result || !result.raw) {
        return res.status(400).json({ message: 'Failed to add question' });
      }
      res.status(201).json(result.raw);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async getAllSurvey(req: Request, res: Response) {
    try {
      const repository: Repository<Survey> = getRepository(Survey);
      const data = await repository.find();
      res.json(data);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async takeSurvey(req: Request, res: Response) {
    try {
      const { username } = req;
      const survey = req.body as TakeSurveyRequest;
      if (!survey.surveyId) {
        return res.status(400).json({ message: 'surveyId is required' });
      }

      if (!Array.isArray(survey.response)) {
        return res.status(400).json({ message: 'survey user response is required' });
      }

      const repository: Repository<SurveyResponse> = getRepository(SurveyResponse);
      const promises = survey.response.map((s) => {
        const surveyData = {
          username,
          surveyId: survey.surveyId,
          questionId: s.questionId,
          answer: s.answer,
        };
        return repository.insert(surveyData);
      });
      await Promise.all(promises);
      res.json({ message: 'Survey completed' });
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async getSurveyResult(req: Request, res: Response) {
    try {
      const { surveyId } = req.params;
      if (!surveyId) {
        return res.status(400).json({ message: 'surveyId is required' });
      }
      const repository: Repository<SurveyResponse> = getRepository(SurveyResponse);
      const data = await repository.find({ surveyId });
      res.json(data);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}

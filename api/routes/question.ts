import { Router } from 'express';
import QuestionController from '../controller/QuestionController';
import validate from '../../auth';

const questionRouter = Router();
const controller = new QuestionController();

questionRouter.post('/', validate, controller.addQuestion);
questionRouter.get('/', validate, controller.getQuestions);

export default questionRouter;

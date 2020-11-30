import { Router } from 'express';
import SurveyController from '../controller/SurveyController';
import validate from '../../auth';

const surveyRouter = Router();
const controller = new SurveyController();

surveyRouter.post('/', validate, controller.addSurvey);
surveyRouter.get('/', validate, controller.getAllSurvey);
surveyRouter.post('/take', validate, controller.takeSurvey);
surveyRouter.get('/result/:surveyId', validate, controller.getSurveyResult);

export default surveyRouter;

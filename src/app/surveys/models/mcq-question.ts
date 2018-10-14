import { QuestionBase } from './question-base';
export class McqQuestion implements QuestionBase {
  title: string='';
  choices: Array<string> = [];

}

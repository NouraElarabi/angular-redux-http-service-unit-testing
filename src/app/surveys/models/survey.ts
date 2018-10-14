import { Question } from './question';
export class Survey {
  createdBy: string = '6529da23-f5a5-402d-808b-59d2ce6164c8';
  name: string='';
  timeFrame: Date;
  invitations: string[] = [];
  questions: Array<Question> = [];

  hasInvitations() {
    return this.invitations.length !== 0;
  }
}

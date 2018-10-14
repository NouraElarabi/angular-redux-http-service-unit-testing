import { ADD_NAME, UPDATE_OQ_TITLE, UPDATE_MCQ_TITLE } from './../state/types';
import { Survey } from '../models/survey';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../models/question';
import { Store, select } from '@ngrx/store';
import * as features from '../../state/featureStates';
import * as types from '../state/types';
import * as reducer from '../state/survey-creator.reducer';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SurveyCreatorService {

  public url = 'https://localhost:44304/api/surveys';
  public Survey : Survey = new Survey();
  public headers = new HttpHeaders({'Content-Type': 'application/json' });
    

  constructor(private Store:Store<Survey>,private http: HttpClient) {
    Store.pipe(select(reducer.getSurvey)).subscribe(
      s => this.Survey = JSON.parse(JSON.stringify(s))
    );
   }

   createSurvey()
  {
    var body =JSON.stringify(this.Survey);
    return this.http.post(this.url, body, {headers: this.headers})
  }
  
  toggleInvitation(id) {
    const index = this.Survey.invitations.indexOf(id);
    if (index === -1) {
      this.Store.dispatch({
        type:types.INVITE,
        payload:id
      });
    } else {
      this.Store.dispatch({
        type:types.UNINVITE,
        payload:index
      });
    }
  }

  invite(id) {
    if (!this.isInvited(id)) { 
      this.Store.dispatch({
        type:types.INVITE,
        payload:id
      });
     }
  }

  getNoOfInvitations() {
    return this.Survey.invitations.length;
  }

  uninviteAll() {
    this.Store.dispatch({
      type:types.UNINVITE_ALL,
    });
  }

  isInvited(id) {
    return this.Survey.invitations.includes(id);
  }

  addQuestion(question: Question) {
    this.Store.dispatch({
      type:types.ADD_QUESTION,
      payload:question
    });
  }

  removeQuestion(index) {
    this.Store.dispatch({
      type:types.REMOVE_QUESTION,
      payload: index
    });
  }

  Rename(name:string) {
    this.Store.dispatch({
      type:types.ADD_NAME,
      payload:name
    });
  }

  ChangeDeadline(deadline:Date) {
    this.Store.dispatch({
      type:types.ADD_DATE,
      payload:deadline
    });
  }

  Empty(){
    this.Store.dispatch({
      type:types.Empty
    });
  }

  updateOpenQTitle(index,value){
    this.Store.dispatch({
      type:types.UPDATE_OQ_TITLE,
      payload:{
        value:value,
        index:index
      }
    });
  }
  updateTFQTitle(index,value){
    this.Store.dispatch({
      type:types.UPDATE_TFQ_TITLE,
      payload:{
        value:value,
        index:index
      }
    });
  }
  updateTFQTrueText(index,value){
    this.Store.dispatch({
      type:types.UPDATE_TFQ_TRUETEXT,
      payload:{
        value:value,
        index:index
      }
    });
  }
  updateTFQFalseText(index,value){
    this.Store.dispatch({
      type:types.UPDATE_TFQ_FALSETEXT,
      payload:{
        value:value,
        index:index
      }
    });
  }
  updateMCQTitle(index,value){
    this.Store.dispatch({
      type:types.UPDATE_MCQ_TITLE,
      payload:{
        value:value,
        index:index
      }
    });
  }
  InsertMCQChoice(index,value){
    this.Store.dispatch({
      type:types.ADD_MCQ_CHOICE,
      payload:{
        value:value,
        index:index
      }
    });
  }
}

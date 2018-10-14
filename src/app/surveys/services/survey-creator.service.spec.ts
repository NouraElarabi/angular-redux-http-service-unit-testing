import { TestBed } from '@angular/core/testing';
import * as types from '../state/types';
import { SurveyCreatorService } from './survey-creator.service';
import { Store,select } from '../../../../node_modules/@ngrx/store';
import { Survey } from '../models/survey';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from '../../../../node_modules/rxjs';
import { Question } from '../models/question';

describe('SurveyCreatorService', () => {
  let surveyCreatorService: SurveyCreatorService;
  let storeSpy:jasmine.SpyObj<Store<Survey>>;
  let httpSpy:jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    const _StoreSpy = jasmine.createSpyObj('Store', ['dispatch','pipe']);
    const _HttpSpy = jasmine.createSpyObj('HttpClient', ['post']);
    TestBed.configureTestingModule({
      providers: [
        SurveyCreatorService,
        {
          provide: Store,
          useValue: _StoreSpy
        },
        {
          provide: HttpClient,
          useValue: _HttpSpy
        }
      ]
    });
    

    
    storeSpy = TestBed.get(Store);
    httpSpy = TestBed.get(HttpClient);

    storeSpy.pipe.and.callFake((i)=>{return of({})});
    surveyCreatorService = TestBed.get(SurveyCreatorService);
    
  });




  it('constructor should call getState', () => {
    expect(storeSpy.pipe).toHaveBeenCalled();
  });

  it('uninviteAll should dispatch UNINVITE_ALL action', () => {
    const expectedAction = {
      type: types.UNINVITE_ALL
    };

    surveyCreatorService.uninviteAll();

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('addQuestion should dispatch UNINVITE_ALL action', () => {
    let payloadQuestion:Question = new Question();
    const expectedAction = {
      type: types.ADD_QUESTION,
      payload: payloadQuestion
    };

    surveyCreatorService.addQuestion(payloadQuestion);

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('removeQuestion should dispatch REMOVE_QUESTION action with sent payload', () => {
    let payloadindex:number = 13;
    const expectedAction = {
      type: types.REMOVE_QUESTION,
      payload: payloadindex
    };

    surveyCreatorService.removeQuestion(payloadindex);

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('Rename should dispatch ADD_NAME action with sent payload', () => {
    let payloadname:string = "name";
    const expectedAction = {
      type: types.ADD_NAME,
      payload: payloadname
    };

    surveyCreatorService.Rename(payloadname);

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('ChangeDeadline should dispatch ADD_DATE action with sent payload', () => {
    let payloadDate:Date = new Date();
    const expectedAction = {
      type: types.ADD_DATE,
      payload: payloadDate
    };

    surveyCreatorService.ChangeDeadline(payloadDate);

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('Empty should dispatch Empty action', () => {
    const expectedAction = {
      type: types.Empty
    };

    surveyCreatorService.Empty();

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });
  
  it('updateOpenQTitle should dispatch UPDATE_OQ_TITLE action with sent payload', () => {
    let payloadValue:String = "Test";
    let payloadIndex:number = 1;
    const expectedAction = {
      type: types.UPDATE_OQ_TITLE,
      payload:{
        value:payloadValue,
        index:payloadIndex
      }
    };

    surveyCreatorService.updateOpenQTitle(payloadIndex,payloadValue);

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('updateMCQTitle should dispatch UPDATE_MCQ_TITLE action with sent payload', () => {
    let payloadValue:String = "Test";
    let payloadIndex:number = 1;
    const expectedAction = {
      type: types.UPDATE_MCQ_TITLE,
      payload:{
        value:payloadValue,
        index:payloadIndex
      }
    };

    surveyCreatorService.updateMCQTitle(payloadIndex,payloadValue);

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('updateTFQTitle should dispatch UPDATE_TFQ_TITLE action with sent payload', () => {
    let payloadValue:String = "Test";
    let payloadIndex:number = 1;
    const expectedAction = {
      type: types.UPDATE_TFQ_TITLE,
      payload:{
        value:payloadValue,
        index:payloadIndex
      }
    };

    surveyCreatorService.updateTFQTitle(payloadIndex,payloadValue);

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('updateTFQFalseText should dispatch UPDATE_TFQ_FALSETEXT action with sent payload', () => {
    let payloadValue:String = "Test";
    let payloadIndex:number = 1;
    const expectedAction = {
      type: types.UPDATE_TFQ_FALSETEXT,
      payload:{
        value:payloadValue,
        index:payloadIndex
      }
    };

    surveyCreatorService.updateTFQFalseText(payloadIndex,payloadValue);

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('updateTFQTrueText should dispatch UPDATE_TFQ_TRUETEXT action with sent payload', () => {
    let payloadValue:String = "Test";
    let payloadIndex:number = 1;
    const expectedAction = {
      type: types.UPDATE_TFQ_TRUETEXT,
      payload:{
        value:payloadValue,
        index:payloadIndex
      }
    };

    surveyCreatorService.updateTFQTrueText(payloadIndex,payloadValue);

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });
  
  it('InsertMCQChoice should dispatch ADD_MCQ_CHOICE action with sent payload', () => {
    let payloadValue:String = "Test";
    let payloadIndex:number = 1;
    const expectedAction = {
      type: types.ADD_MCQ_CHOICE,
      payload:{
        value:payloadValue,
        index:payloadIndex
      }
    };

    surveyCreatorService.InsertMCQChoice(payloadIndex,payloadValue);

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('getNoOfInvitations should return length of Survey invitation list', () => {
    let invitationList = ["1","2","3"];
    let expectedNoOfInvitations = invitationList.length;

    surveyCreatorService.Survey.invitations=invitationList;


    let ReturnedNoOfInvitations = surveyCreatorService.getNoOfInvitations();

    expect(ReturnedNoOfInvitations).toEqual(expectedNoOfInvitations);
  });

  it('isInvited should return true if Survey invitation list includes id', () => {

    let invitationList = ["1","2"];
    let testId = "123";
    invitationList.push(testId);
    

    surveyCreatorService.Survey.invitations=invitationList;


    let ReturnedIsInvited = surveyCreatorService.isInvited(testId);

    expect(ReturnedIsInvited).toBeTruthy();
  });

  it('isInvited should return false if Survey invitation list doesnt includes id', () => {

    let invitationList = ["1","2"];
    let testId = "123";

    surveyCreatorService.Survey.invitations=invitationList;


    let ReturnedIsInvited = surveyCreatorService.isInvited(testId);

    expect(ReturnedIsInvited).toBeFalsy();
  });

  it('invite should dispatch INVITE action with sent payload if isInvited is falsy', () => {
    let payloadId:string = "123";
    const expectedAction = {
      type: types.INVITE,
      payload:payloadId
    };

    spyOn(surveyCreatorService,"isInvited").and.returnValue(false);

    surveyCreatorService.invite(payloadId);

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('invite should not dispatch INVITE action if isInvited is truthy', () => {
    let payloadId:string = "123";

    spyOn(surveyCreatorService,"isInvited").and.returnValue(true);

    surveyCreatorService.invite(payloadId);

    expect(storeSpy.dispatch).not.toHaveBeenCalled();
  });

  it('toggleInvitation should not dispatch INVITE action if invitation list doesnt contain id', () => {
    let invitationList = ["1","2"];
    let payloadId:string = "123";
    surveyCreatorService.Survey.invitations=invitationList;

    const expectedAction = {
      type: types.INVITE,
      payload:payloadId
    };

    surveyCreatorService.toggleInvitation(payloadId);

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('toggleInvitation should not dispatch UNINVITE action with index if invitation list contains id', () => {
    let invitationList = ["1","2"];
    let payloadId:string = "123";
    invitationList.push(payloadId);
    surveyCreatorService.Survey.invitations=invitationList;

    const expectedAction = {
      type: types.UNINVITE,
      payload: surveyCreatorService.Survey.invitations.indexOf(payloadId)
    };

    surveyCreatorService.toggleInvitation(payloadId);

    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('createSurvey should call http post with url , body and header', () => {
    let expectedURL = "test";
    let body = new Survey();
    body.name ="name";
    body.timeFrame =new Date();
    body.createdBy ="ABCD";
    let header = new HttpHeaders({'Content-Type': 'application/json' });
    let expectedHeaders = {headers : header};
    let expectedBody = JSON.stringify(body)
    
    surveyCreatorService.Survey = body;
    surveyCreatorService.url = expectedURL;
    surveyCreatorService.headers =header;

    surveyCreatorService.createSurvey();

    expect(httpSpy.post).toHaveBeenCalled();
    expect(httpSpy.post).toHaveBeenCalledWith(expectedURL,expectedBody,expectedHeaders);
  });

});

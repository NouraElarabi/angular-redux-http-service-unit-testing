import { Question } from './../models/question';
import { Survey } from '../models/survey';
import * as fromRoot from '../../state/app.state'
import * as types from './types';
import * as features from '../../state/featureStates';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface SurveyCreatorState extends fromRoot.State{
    Survey:Survey
}

const initialState : SurveyCreatorState = {
    user : null,
    Survey : new Survey(),
}

const getSurveyCreatorFeatureState = createFeatureSelector<SurveyCreatorState>(features.SurveyCreator);

export const getSurvey = createSelector(
    getSurveyCreatorFeatureState,
    state => state.Survey
);

export const getQuestionsList = createSelector(
    getSurveyCreatorFeatureState,
    state => state.Survey.questions
);

export const getInvetationList = createSelector(
    getSurveyCreatorFeatureState,
    state => state.Survey.invitations
);

export function SurveyCreatorReducer(state = initialState,action):SurveyCreatorState{
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){

        case types.INVITE:
        newState.Survey.invitations.push(action.payload);
        return newState;

        case types.UNINVITE:
        newState.Survey.invitations.splice(action.payload, 1);
        return newState;
        
        case types.UNINVITE_ALL:
        newState.Survey.invitations = [];
        return newState;

        case types.ADD_QUESTION:
        newState.Survey.questions.push(action.payload);
        return newState;

        case types.REMOVE_QUESTION:
        newState.Survey.questions.splice(action.payload, 1);
        return newState;

        case types.ADD_NAME:
        newState.Survey.name = action.payload;
        return newState;

        case types.ADD_DATE:
        newState.Survey.timeFrame = action.payload;
        return newState;

        case types.UPDATE_OQ_TITLE:
        newState.Survey.questions[action.payload.index].question.title = action.payload.value;
        return newState;

        case types.UPDATE_TFQ_TITLE:
        newState.Survey.questions[action.payload.index].question.title = action.payload.value;
        return newState;

        case types.UPDATE_TFQ_TRUETEXT:
        newState.Survey.questions[action.payload.index].question.trueText = action.payload.value;
        return newState;

        case types.UPDATE_TFQ_FALSETEXT:
        newState.Survey.questions[action.payload.index].question.falseText = action.payload.value;
        return newState;

        case types.UPDATE_MCQ_TITLE:
        newState.Survey.questions[action.payload.index].question.title = action.payload.value;
        return newState;

        case types.ADD_MCQ_CHOICE:
        newState.Survey.questions[action.payload.index].question.choices.push(action.payload.value);
        return newState;

        case types.Empty:
        newState.Survey = new Survey();
        return newState;

        default:
        return state;
    }
}
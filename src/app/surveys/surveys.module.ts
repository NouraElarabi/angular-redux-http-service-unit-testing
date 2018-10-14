import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { SurveyCreatorService } from './services/survey-creator.service';
import {SurveyCreatorReducer} from './state/survey-creator.reducer'
import * as features from '../state/featureStates';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(features.SurveyCreator,SurveyCreatorReducer)
  ],
  declarations: [
  ],
  exports: [],
  providers: [SurveyCreatorService]
})
export class SurveysModule {}

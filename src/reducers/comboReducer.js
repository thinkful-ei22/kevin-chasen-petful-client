import {combineReducers} from 'redux';
import {catReducer} from './cat-reducer';
import {dogReducer} from './dog-reducer';

export const rootReducer = combineReducers({

  catR: catReducer,
  dogR: dogReducer
  
});

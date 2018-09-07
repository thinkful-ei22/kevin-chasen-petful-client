import {combineReducers} from 'redux';
import {catReducer} from './foodsReducer';
import {dogReducer} from './mapReducer';

export const rootReducer = combineReducers({

  catR: catReducer,
  dogR: dogReducer,
  
});

import {
  FETCH_DOG_SUCCESS, 
} from '../actions';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export const catReducer = (state = initialState, action) => {
  if(action.type === FETCH_DOG_SUCCESS){
    Object.assign({}, state, {
      data: action.dog,
      loading: false,
      error: null
    });
  }
  return state;
}
import {
  FETCH_DOG_SUCCESS, 
} from '../actions';

const initialState = {
  data: [],
  error: null,
  loading: false
};

export const dogReducer = (state = initialState, action) => {
  if(action.type === FETCH_DOG_SUCCESS){
    return Object.assign({}, state, {
      data: action.dog,
      loading: false,
      error: null
    });
  }
  return state;
}
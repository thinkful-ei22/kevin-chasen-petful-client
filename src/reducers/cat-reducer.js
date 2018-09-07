import {
  FETCH_CAT_SUCCESS, 
} from '../actions';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export const catReducer = (state = initialState, action) => {
  if(action.type === FETCH_CAT_SUCCESS){
    Object.assign({}, state, {
      data: action.cat,
      loading: false,
      error: null
    });
  }
  return state;
}

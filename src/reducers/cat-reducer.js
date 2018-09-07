import {
  FETCH_CAT_SUCCESS, 
} from '../actions';

const initialState = {
  data: [],
  error: null,
  loading: false
};

export const catReducer = (state = initialState, action) => {
  if(action.type === FETCH_CAT_SUCCESS){
    console.log(action.cat);
    return Object.assign({}, state, {
      data: action.cat,
      loading: false,
      error: null
    });
  }
  return state;
}

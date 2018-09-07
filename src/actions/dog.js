import {API_BASE_URL} from '../config';

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
  type: FETCH_DOG_SUCCESS,
  dog
});

export const fetchDog = () => dispatch =>  {
  return fetch(`${API_BASE_URL}/api/dog`)
  .then(res => {
    if(res){
      return res.json();
    }
  })
  .then(res => {
    dispatch(fetchDogSuccess(res));
  })
  .catch(e => {
    console.log(e);
  })
};

export const adoptDog = () => dispatch =>  {
  return fetch(`${API_BASE_URL}/api/dog`,
    {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if(res.status(200)){
      return 'Deleted';
    }
  })
  .then(res => {
    if(res === 'Deleted'){
    dispatch(fetchDog());
    }
  })
  .catch(e => {
    console.log(e);
  })
};
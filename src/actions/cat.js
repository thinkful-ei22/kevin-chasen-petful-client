import {API_BASE_URL} from '../config';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
});
export const fetchCat = () => dispatch =>  {
  console.log('im making a get cat request to the backend');
  return fetch(`${API_BASE_URL}/api/cat`)
  .then(res => {
    console.log(res);
    if(res){
      
      return res.json();
    }
  })
  .then(res => {
    dispatch(fetchCatSuccess(res));
  })
  .catch(e => {
    console.log(e);
  });
};

export const adoptCat = () => dispatch =>  {
  return fetch(`${API_BASE_URL}/api/cat`,
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
    dispatch(fetchCat());
    }
  })
  .catch(e => {
    console.log(e);
  });
};

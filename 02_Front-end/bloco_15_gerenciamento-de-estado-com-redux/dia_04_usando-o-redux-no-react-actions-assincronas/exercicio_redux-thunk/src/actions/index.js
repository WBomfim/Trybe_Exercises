export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      dispatch(getPicture(data));
    } catch (error) {
      console.error(error);
    }
  }
};

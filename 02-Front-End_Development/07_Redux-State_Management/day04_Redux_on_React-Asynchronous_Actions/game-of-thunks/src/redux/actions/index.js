export const REQUEST_API = 'REQUEST_API';
export const GET_CHARACTER = 'GET_CHARACTER';
const API_URL = 'https://anapioficeandfire.com/api/characters?name=';
// + action que será chamada pelo botão de busca, que vai chamar as duas actions acima

const requestAPI = () => ({ type: REQUEST_API });

const getCharacter = (data) => ({
  type: GET_CHARACTER,
  payload: data,
});

export const fetchCharacterData = (input) => async (dispatch) => {
  dispatch(requestAPI());
  const response = await fetch(`${API_URL}${input}`);
  const data = await response.json();
  dispatch(getCharacter(data));
};

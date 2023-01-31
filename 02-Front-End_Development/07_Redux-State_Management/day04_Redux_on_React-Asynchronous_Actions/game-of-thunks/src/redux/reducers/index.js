import { combineReducers } from "redux";
import { GET_CHARACTER, REQUEST_API } from "../actions";

const INITIAL_STATE = {
  isLoading: false,
  fetchedCharacter: {},
}

const character = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CHARACTER:
      return {
        ...state,
        isLoading: false,
        fetchedCharacter: Object.assign({}, action.payload[0]), // verificar se está correto, pode desestruturar a action tb lá em cima
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ character });

export default rootReducer;

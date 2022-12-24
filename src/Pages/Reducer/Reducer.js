import {
  FETCHING_ERROR,
  FETCHING_START,
  FETCHING_SUCCESS,
} from "../../component/Action/ActionType";

export const intrastate = {
  Loading: false,
  data: [],
  error: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        Loading: true,
        error: false,
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        Loading: false,
        data: action.payload,
      };
    case FETCHING_ERROR:
      return {
        ...state,
        Loading: false,
        error: true,
      };

    default:
      return state;
  }
};

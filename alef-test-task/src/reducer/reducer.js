import { ADD_TO_REDUX } from "./actions";


const defaultState = {
  user: {
    name: "",
    surname: "",
    patronymic: "",
    age: null,
  },
  kids: [],
};

export const reducer = (state = defaultState, action) => {
  if (action.type === ADD_TO_REDUX) {
    return {
      ...state,
      user: action.usersInfo,
      kids: action.kidsInfo,
    };
  } else {
    return state;
  }
};
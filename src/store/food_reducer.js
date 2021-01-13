import { FOOD_CATEGORY, FOOD_FETCH } from "./food_action";

const initialState = {
  food: [],
  specific_food: [],
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOOD_FETCH:
      return {
        ...state,
        food: action.list,
      };
    case FOOD_CATEGORY:
      return {
        ...state,
        specific_food: action.specific_list,
      };

    default:
      return state;
  }
};

export default foodReducer;

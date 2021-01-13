export const FOOD_FETCH = "FOOD_FETCH";
export const FOOD_CATEGORY = "FOOD_CATEGORY";

export const fetchData = () => {
  return async (dispatch) => {
    const response = await fetch("https://api.growcify.com/dev/category/list");
    const result = await response.json();

    dispatch({ type: FOOD_FETCH, list: result });
  };
};

export const fetchCategory = (food_id) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://api.growcify.com/dev/product/list/${food_id}`
    );
    const result = await response.json();

    dispatch({ type: FOOD_CATEGORY, specific_list: result });
  };
};

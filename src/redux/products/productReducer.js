const initialState = {
  loading: false,
  products: [],
  error: "",
};

//Reducer:

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_REQUEST": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_PRODUCT_SUCCESS": {
      return {
        loading: false,
        products: action.payload,
        error: "",
      };
    }
    case "FETCH_PRODUCT_FAILURE": {
      return {
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default productReducer;

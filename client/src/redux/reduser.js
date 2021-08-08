const initialState = {
  loading: false,
  items: [],
  error: null,
};

export default function reduser(state = initialState, action) {
  switch (action.type) {
    case "add/images/pending":
      return {
        ...state,
        loading: true,
      };
    case "add/images/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "add/images/rejected":
      return {
        ...state,
        loading: false,
        items: [],
        error: action.payload,
      };
    case "create/images/pending":
      return {
        ...state,
        loading: true,
      };
    case "create/images/fulfilled":
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
      };
    case "create/images/rejected":
      return {
        ...state,
        loading: false,
        items: [],
        error: action.payload,
      };
    case "remove/images/pending":
      return {
        ...state,
        loading: true,
      };
    case "remove/images/fulfilled":
      return {
        ...state,
        items: state.items.filter((item) => item.img !== action.payload),
        loading: false,
      };
    case "remove/images/rejected":
      return {
        ...state,
        loading: false,
        items: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export const loadImages = () => {
  return async (dispatch) => {
    dispatch({ type: "add/images/pending" });
    try {
      const response = await fetch("/images");
      const json = await response.json();
      dispatch({ type: "add/images/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "add/images/rejected", error: e.toString() });
    }
  };
};

export const createImage = (value) => {
  const img = value;
  return async (dispatch) => {
    dispatch({ type: "create/images/pending" });
    try {
      const response = await fetch("/image", {
        method: "POST",
        body: JSON.stringify({ img }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      dispatch({ type: "create/images/fulfilled", payload: { img } });
    } catch (e) {
      dispatch({ type: "create/image/rejected", error: e.toString() });
    }
  };
};

export const removeImage = (value) => {
  const img = value;
  return async (dispatch) => {
    dispatch({ type: "remove/images/pending" });
    try {
      await fetch("/image", {
        method: "DELETE",
        body: JSON.stringify({ img }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      dispatch({ type: "remove/images/fulfilled", payload: img });
    } catch (e) {
      dispatch({ type: "remove/image/rejected", error: e.toString() });
    }
  };
};

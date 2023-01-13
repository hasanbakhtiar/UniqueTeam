// inital state
const blogState = [];

// reducer
export const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state,action.blog];
    case "UPDATE_BLOG":
      return "update blog";

    case "REMOVE_BLOG":
      return "remove blog";

    default:
      return state;
  }
};
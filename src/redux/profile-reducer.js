const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const initialState = {
  posts: [
    { id: 1, message: "Hey, how are you?", likesCount: 10 },
    { id: 2, message: "It's my first post", likesCount: 12 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newState = { ...state };
      const newPost = {
        id: 6,
        message: newState.newPostText,
        likesCount: 0,
      };
      newState.posts = [...state.posts];
      newState.posts.push(newPost);
      newState.newPostText = "";
      return newState;
    }
    case UPDATE_POST_TEXT: {
      const newState = { ...state };
      newState.newPostText = action.text;
      return newState;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text,
});

export default profileReducer;

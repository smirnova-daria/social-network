import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

const state = {
  posts: [
    { id: 1, message: "Hey, how are you?", likesCount: 10 },
    { id: 2, message: "It's my first post", likesCount: 12 },
  ],
};

it("length of posts should be increment", () => {
  let action = addPostActionCreator("new post text");
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

it("message of added post should be correct", () => {
  let action = addPostActionCreator("new post text");
  let newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe("new post text");
});

it("length of post after delete should be decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});

it("length of post shouldn't be changed if id is incorrect", () => {
  let action = deletePost(100);
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});

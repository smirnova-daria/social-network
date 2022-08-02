import { FriendType } from "../types/types";

const initialState = {
  friends: [
    { id: 1, name: "Elena" },
    { id: 2, name: "Masha" },
    { id: 3, name: "Maxim" },
  ] as Array<FriendType>,
};
type InitialStateType = typeof initialState
const navbarReducer = (state = initialState, action: any): InitialStateType => {
  return state;
};

export default navbarReducer;

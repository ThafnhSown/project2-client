import { userApi } from "../../container/app/feature/user/userService";
import { authApi } from "../../container/auth/feature/Auth/authService";
import authReducer from "../../container/auth/feature/Auth/authSlice";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  auth: authReducer,
  authApi: authApi.reducer,
  userApi: userApi.reducer,
});

export const rootReducer = (state, action) => {
  if (action.type === "user/logout") {
    state = undefined;
  }
  return allReducers(state, action);
};

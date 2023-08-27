import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import { LoadingBar } from "react-redux-loading-bar";

export default combineReducers({
    authedUser,
    users,
    questions,
});
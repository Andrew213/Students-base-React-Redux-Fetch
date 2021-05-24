import { combineReducers } from "redux";
import errReducer from "./errReducer";
import { students } from "./studentsReducer";

export const rootReducer = combineReducers({
    students,
    err: errReducer
})
import {userLoginReducer, userRegisterReducer} from './userReducer'
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
      userLoginReducer,
      userRegisterReducer
})
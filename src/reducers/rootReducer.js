import { combineReducers } from "redux";
import radar from "./radar";
import drag from "./drag";
import user from "./user";
import plan from "./plan";

const rootReducer = combineReducers({ radar, drag, user, plan });

export default rootReducer;

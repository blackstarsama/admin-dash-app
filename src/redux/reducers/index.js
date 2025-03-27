import { combineReducers } from "redux";
import userReducer from "./userReducer";
import ordersReducer from "./ordersReducer";
import salesReducer from "./salesReducer";
import expensesReducer from "./expensesReducer";
import incomeReducer from "./incomeReducer";
import updatesReducer from "./updatesReducer";
import analyticsReducer from "./analyticsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  orders: ordersReducer,
  sales: salesReducer,
  expenses: expensesReducer,
  income: incomeReducer,
  updates: updatesReducer,
  analytics: analyticsReducer,
  // Add other reducers here as needed
});

export default rootReducer;

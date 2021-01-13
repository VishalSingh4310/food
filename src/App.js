import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainScreen from "./pages/MainScreen";
import SecondScreen from "./pages/SecondScreen";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import foodReducer from "./store/food_reducer";
import Reduxthunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

function App() {
  const rootReducer = combineReducers({
    food: foodReducer,
  });

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(Reduxthunk))
  );

  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route path="/" component={MainScreen} exact />
          <Route path="/category" component={SecondScreen} />
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducer/hello";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import Todos from "./todos-component";
import todosReducer from "./reducer/todos-reducer";

const reducers = combineReducers({hello, todosReducer})

const store = createStore(reducers);

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;
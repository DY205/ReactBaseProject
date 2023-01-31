// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { rootSaga } from "./saga/rootSaga";
import { loginSaga } from "./saga/loginSaga";
import rootReducer from './reducers/index';
import createSagaMiddleWare from "redux-saga";


const sagaMiddleware = createSagaMiddleWare();
const store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [sagaMiddleware]
    }
);
sagaMiddleware.run(loginSaga);
export default store;
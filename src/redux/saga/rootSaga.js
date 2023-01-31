import { all, fork, takeLatest } from "redux-saga/effects";
import loginSaga from "./loginSaga";

export default function* rootSaga() {
  yield all([
    // takeLatest(loginSaga)
    fork(loginSaga)
  ]);
}

import { put, takeEvery, takeLatest } from "redux-saga/effects";
import fb from "../components/Firebase/";
import { setInitialScore } from "actions/radar";

const delay = ms => new Promise(res => setTimeout(res, ms));

function saveMatrixToFirestore({ id, score }) {
  if (!fb.app) return;
  const uid = fb.app.auth().currentUser.uid;
  if (!uid) return;
  return fb.app
    .firestore()
    .collection("radar")
    .doc(uid)
    .set({ [id]: { score } }, { merge: true })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch(err => console.log(err));
}

function loadMatrixFromFirestore() {
  if (!fb.app) return;
  const uid = fb.app.auth().currentUser.uid;
  if (!uid) return;
  return fb.app
    .firestore()
    .collection("radar")
    .doc(uid)
    .get()
    .then(doc => {
      return doc.data();
    })
    .catch(err => console.log(err));
}

function* loadScore() {
  const radar = yield loadMatrixFromFirestore();
  yield put(setInitialScore(radar));
}

function* saveScore(action) {
  yield delay(500);
  yield saveMatrixToFirestore(action);
}

function* mySaga() {
  yield takeLatest("SET_SCORE", saveScore);
  yield takeEvery("LOAD_SCORE", loadScore);
}

export default mySaga;

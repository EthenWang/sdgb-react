import { takeLatest } from 'redux-saga';
import { POST_SCORE_SUBMIT } from '../actions/PostScoreActions';

function* postScoreAsync() {
  yield '';
}

function* watchPostScore() {
  yield takeLatest(POST_SCORE_SUBMIT, postScoreAsync);
}

export { watchPostScore };
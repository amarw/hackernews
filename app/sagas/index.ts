import { all } from 'redux-saga/effects';
import StoryFeedSaga from 'app/sagas/StoryFeedSaga';
import ItemSaga from 'app/sagas/ItemSaga';

export default function* rootSaga() {
  yield all([StoryFeedSaga(), ItemSaga()]);
}

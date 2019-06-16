import { all, fork, takeEvery, take } from 'redux-saga/effects';
import {
  FetchStoryFeedAction,
  RefreshStoryFeedFailedAction
} from 'app/@types/actions';
import {
  FETCH_STORIES,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILED,
  REFRESH_STORIES,
  REFRESH_STORIES_SUCCESS,
  REFRESH_STORIES_FAILED
} from 'app/actions/StoryFeedActions';

function* fetchStoryFeed(action: FetchStoryFeedAction) {
  yield action.type;
  yield take(FETCH_STORIES_SUCCESS);
  yield take(FETCH_STORIES_FAILED);
}

function* refreshStoryFeed(action: RefreshStoryFeedFailedAction) {
  yield action.type;
  yield take(REFRESH_STORIES_SUCCESS);
  yield take(REFRESH_STORIES_FAILED);
}

function* watchFetchStoryFeed() {
  yield takeEvery(FETCH_STORIES, fetchStoryFeed);
}
function* watchRefreshStoryFeed() {
  yield takeEvery(REFRESH_STORIES, refreshStoryFeed);
}

export default function*() {
  yield all([fork(watchFetchStoryFeed), fork(watchRefreshStoryFeed)]);
}

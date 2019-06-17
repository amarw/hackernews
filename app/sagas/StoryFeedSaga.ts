import {
  all,
  fork,
  takeEvery,
  take,
  put,
  call,
  race
} from 'redux-saga/effects';
import {
  FetchStoryFeedAction,
  RefreshStoryFeedFailedAction
} from 'app/@types/actions';
import {
  FETCH_STORIES,
  REFRESH_STORIES,
  REFRESH_STORIES_SUCCESS,
  REFRESH_STORIES_FAILED,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILED
} from 'app/actions/constants';
import {
  fetchStoriesSuccess,
  fetchStoriesFailed
} from 'app/actions/StoryFeedActions';
import { fetchItems } from 'app/actions/ItemActions';
import { getNewStories, getBestStories, getTopStories } from 'app/api';

const PAGE_LIMIT = 20;

function* fetchStoryFeed(action: FetchStoryFeedAction) {
  try {
    const { storyFeedType, page = 0 } = action;
    let response = null;
    switch (storyFeedType) {
      case 'new': {
        response = yield call(getNewStories);
        break;
      }
      case 'best': {
        response = yield call(getBestStories);
        break;
      }
      case 'top': {
        response = yield call(getTopStories);
        break;
      }
      default: {
        response = yield call(getNewStories);
        break;
      }
    }

    if (response && page === 0) {
      // get items for first page
      yield put(fetchItems(response.slice(0, PAGE_LIMIT)));

      // race between success and failure effects
      const { success, failed } = yield race({
        success: take(FETCH_ITEM_SUCCESS),
        failed: take(FETCH_ITEM_FAILED)
      });

      // if success
      if (success) {
        yield put(fetchStoriesSuccess(response, storyFeedType, 0));
      }

      // if failure
      if (failed) {
        yield put(fetchStoriesFailed());
      }
    } else {
      // if no response, we dispatch failure
      yield put(fetchStoriesFailed());
    }
  } catch (e) {
    // console.log(e);
    yield put(fetchStoriesFailed());
  }
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

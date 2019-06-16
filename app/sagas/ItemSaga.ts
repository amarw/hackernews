import { all, fork, takeEvery, take } from 'redux-saga/effects';
import { FetchItemAction, RefreshItemAction } from 'app/@types/actions';
import {
  FETCH_ITEM,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILED,
  REFRESH_ITEM,
  REFRESH_ITEM_SUCCESS,
  REFRESH_ITEM_FAILED
} from 'app/actions/constants';

function* fetchItem(action: FetchItemAction) {
  yield action.type;
  yield take(FETCH_ITEM_SUCCESS);
  yield take(FETCH_ITEM_FAILED);
}

function* refreshItem(action: RefreshItemAction) {
  yield action.type;
  yield take(REFRESH_ITEM_SUCCESS);
  yield take(REFRESH_ITEM_FAILED);
}

function* watchFetchItem() {
  yield takeEvery(FETCH_ITEM, fetchItem);
}
function* watchRefreshItem() {
  yield takeEvery(REFRESH_ITEM, refreshItem);
}

export default function*() {
  yield all([fork(watchFetchItem), fork(watchRefreshItem)]);
}

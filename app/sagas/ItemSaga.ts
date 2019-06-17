import { all, fork, takeEvery, take, put, call } from 'redux-saga/effects';
import { FetchItemAction, RefreshItemAction } from 'app/@types/actions';
import {
  FETCH_ITEM,
  REFRESH_ITEM,
  REFRESH_ITEM_SUCCESS,
  REFRESH_ITEM_FAILED
} from 'app/actions/constants';
import { fetchItemsSuccess, fetchItemsFailed } from 'app/actions/ItemActions';
import { getItem } from 'app/api';
import arrayToObject from 'app/utilities/DataConversion';

function* fetchItem(action: FetchItemAction) {
  try {
    // Collect all items
    const response = yield all(
      action.itemIds.map((itemId: number) => call(getItem, itemId))
    );

    if (response && response.length > 0) {
      const itemStore = arrayToObject(response);
      console.log(itemStore);
      yield put(fetchItemsSuccess(itemStore));
    } else {
      // If no items were returned dispatch error
      yield put(fetchItemsFailed());
    }
  } catch (e) {
    yield put(fetchItemsFailed());
  }
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

import {
  FETCH_ITEM,
  REFRESH_ITEM,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILED,
  REFRESH_ITEM_FAILED,
  REFRESH_ITEM_SUCCESS
} from 'app/actions/constants';
import { ItemStore } from 'app/@types/redux';

export const fetchItems = (itemIds: number[]) => ({
  type: FETCH_ITEM,
  itemIds
});

export const fetchItemsSuccess = (items: ItemStore) => ({
  type: FETCH_ITEM_SUCCESS,
  items
});

export const fetchItemsFailed = () => ({
  type: FETCH_ITEM_FAILED
});

export const refreshItem = (itemIds: number[]) => ({
  type: REFRESH_ITEM,
  itemIds
});

export const refreshItemsSuccess = (items: ItemStore) => ({
  type: REFRESH_ITEM_SUCCESS,
  items
});

export const refreshItemsFailed = () => ({
  type: REFRESH_ITEM_FAILED
});

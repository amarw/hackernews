import { ItemStore } from 'app/@types/redux';
import { ItemActions } from 'app/@types/actions';

const defaultState: ItemStore = {};

export default (state: ItemStore = defaultState, action: ItemActions) => {
  switch (action.type) {
    case 'FETCH_ITEM_SUCCESS':
      return {
        ...state,
        ...action.items
      };
    case 'REFRESH_ITEM_SUCCESS':
      return {
        ...state
      };
    default:
      return state;
  }
};

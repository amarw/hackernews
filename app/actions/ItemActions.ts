import { dispatch } from 'app/store';
import { FETCH_ITEM } from 'app/actions/constants';

const fetchItem = (itemId: number) => {
  dispatch({
    type: FETCH_ITEM,
    itemId
  });
};
export default fetchItem;

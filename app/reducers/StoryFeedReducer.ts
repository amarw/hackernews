import { StoryFeed } from 'app/@types/redux';
import { StoryFeedActions } from 'app/@types/actions';

const defaultState: StoryFeed = {
  stories: [],
  page: 0,
  isLoading: false,
  isRefreshing: false
};

export default (state: StoryFeed = defaultState, action: StoryFeedActions) => {
  switch (action.type) {
    case 'FETCH_STORIES':
      return {
        ...state
      };
    case 'FETCH_STORIES_SUCCESS':
      return {
        ...state
      };
    case 'FETCH_STORIES_FAILED':
      return {
        ...state
      };
    case 'REFRESH_STORIES':
      return {
        ...state
      };
    case 'REFRESH_STORIES_SUCCESS':
      return {
        ...state
      };
    case 'REFRESH_STORIES_FAILED':
      return {
        ...state
      };
    default:
      return state;
  }
};

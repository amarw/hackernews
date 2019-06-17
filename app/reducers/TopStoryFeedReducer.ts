import { StoryFeed } from 'app/@types/redux';
import { StoryFeedActions } from 'app/@types/actions';

const defaultState: StoryFeed = {
  stories: [],
  page: 0,
  isLoading: false,
  isRefreshing: false,
  length: 0
};

export default (state: StoryFeed = defaultState, action: StoryFeedActions) => {
  if (action.storyFeedType !== 'top') {
    return { ...state };
  }

  switch (action.type) {
    case 'FETCH_STORIES':
      return {
        ...state,
        isLoading: true
      };
    case 'FETCH_STORIES_SUCCESS':
      return {
        ...state,
        stories: [...state.stories, ...action.stories],
        isLoading: false
      };
    case 'FETCH_STORIES_FAILED':
      return {
        ...state,
        isLoading: false
      };
    case 'REFRESH_STORIES':
      return {
        ...state,
        isRefreshing: true
      };
    case 'REFRESH_STORIES_SUCCESS':
      return {
        ...state,
        isRefreshing: false
      };
    case 'REFRESH_STORIES_FAILED':
      return {
        ...state
      };
    default:
      return state;
  }
};

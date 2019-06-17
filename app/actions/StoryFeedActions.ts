import { Stories } from 'app/@types/models';
import {
  FETCH_STORIES,
  FETCH_STORIES_FAILED,
  FETCH_STORIES_SUCCESS,
  REFRESH_STORIES
} from './constants';

export const fetchStories = (storyFeedType: string, page: number = 0) => ({
  type: FETCH_STORIES,
  storyFeedType,
  page
});

export const refreshStories = (storyFeedType: string) => ({
  type: REFRESH_STORIES,
  storyFeedType
});

export const fetchStoriesSuccess = (
  stories: Stories,
  storyFeedType: string,
  page: number = 0
) => ({
  type: FETCH_STORIES_SUCCESS,
  stories,
  storyFeedType,
  page
});

export const fetchStoriesFailed = () => ({
  type: FETCH_STORIES_FAILED
});

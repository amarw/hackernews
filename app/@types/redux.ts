import { Stories, Item } from 'app/@types/models';

export interface StoryFeed {
  stories: Stories;
  page: number;
  isLoading: boolean;
  isRefreshing: boolean;
}

export interface ItemStore {
  [id: number]: Item;
}

export interface ReduxStore {
  newStories: StoryFeed;
  topStories: StoryFeed;
  bestStories: StoryFeed;
  items: ItemStore;
}

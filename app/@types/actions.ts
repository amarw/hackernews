import { Stories } from './models';
import { ItemStore } from './redux';

export interface FetchStoryFeedAction {
  type: 'FETCH_STORIES';
  storyFeedType: string;
  page: number;
}

export interface FetchStoryFeedSuccessAction {
  type: 'FETCH_STORIES_SUCCESS';
  stories: Stories;
  storyFeedType: string;
  page: number;
}

export interface FetchStoryFeedFailedAction {
  type: 'FETCH_STORIES_FAILED';
  storyFeedType: string;
}

export interface RefreshStoryFeedAction {
  type: 'REFRESH_STORIES';
  storyFeedType: string;
}

export interface RefreshStoryFeedSuccessAction {
  type: 'REFRESH_STORIES_SUCCESS';
  storyFeedType: string;
}

export interface RefreshStoryFeedFailedAction {
  type: 'REFRESH_STORIES_FAILED';
  storyFeedType: string;
}

export interface FetchItemAction {
  type: 'FETCH_ITEM';
  itemIds: number[];
}
export interface FetchItemSuccessAction {
  type: 'FETCH_ITEM_SUCCESS';
  items: ItemStore;
}
export interface FetchItemFailedAction {
  type: 'FETCH_ITEM_FAILED';
}
export interface RefreshItemAction {
  type: 'REFRESH_ITEM';
  itemIds: number[];
}
export interface RefreshItemSuccessAction {
  type: 'REFRESH_ITEM_SUCCESS';
  items: ItemStore;
}
export interface RefreshItemFailedAction {
  type: 'REFRESH_ITEM_FAILED';
}

export type StoryFeedActions =
  | FetchStoryFeedAction
  | FetchStoryFeedSuccessAction
  | FetchStoryFeedFailedAction
  | RefreshStoryFeedAction
  | RefreshStoryFeedSuccessAction
  | RefreshStoryFeedFailedAction;

export type ItemActions =
  | FetchItemAction
  | FetchItemSuccessAction
  | FetchItemFailedAction
  | RefreshItemAction
  | RefreshItemSuccessAction
  | RefreshItemFailedAction;

export type Action = StoryFeedActions | ItemActions;
export type Dispatch = (action: Action) => any;

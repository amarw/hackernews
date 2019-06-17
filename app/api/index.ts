import { EndpointType, getEndpoint } from 'app/api/configuration';
import { Item, Stories } from 'app/@types/models';

/**
 * Helper to fetch stories
 * @param type
 */
const fetchStories = async (type: EndpointType): Promise<Stories> => {
  const endpoint = getEndpoint(type);
  const response = await fetch(endpoint);
  return response.json();
};

/**
 * Method to get new stories
 */
export const getNewStories = async (): Promise<Stories> =>
  fetchStories(EndpointType.NewStories);

/**
 * Method to get top stories
 */
export const getTopStories = async (): Promise<Stories> =>
  fetchStories(EndpointType.TopStories);

/**
 * Method to get best stories
 */
export const getBestStories = async (): Promise<Stories> =>
  fetchStories(EndpointType.BestStories);

/**
 * Method to get item details (story, comment, ..others)
 */
export const getItem = async (id: number): Promise<Item> => {
  const endpoint = getEndpoint(EndpointType.Item, id);
  const response = await fetch(endpoint);
  return response.json();
};

const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

export enum EndpointType {
  Item = 'item',
  TopStories = 'topstories',
  NewStories = 'newstories',
  BestStories = 'beststories'
}

export const getEndpoint = (resource: EndpointType, id?: string) => {
  if (id !== undefined) {
    return `${BASE_URL}/${resource}/${id}.json`;
  }
  return `${BASE_URL}/${resource}.json`;
};

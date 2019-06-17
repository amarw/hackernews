const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export enum EndpointType {
  Item = 'item',
  TopStories = 'topstories',
  NewStories = 'newstories',
  BestStories = 'beststories'
}

export const getEndpoint = (resource: EndpointType, id?: number) => {
  if (id !== undefined) {
    return `${BASE_URL}/${resource}/${id.toString(10)}.json`;
  }
  return `${BASE_URL}/${resource}.json`;
};

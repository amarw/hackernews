import { PAGE_LIMIT } from 'app/constants';

export const arrayToObject = (array: any[]) => {
  if (!array) {
    return null;
  }
  if (array.length === 0) {
    return {};
  }

  return array.reduce((accumulated, current) => {
    if (current) {
      return { ...accumulated, [current.id]: current };
    }
    return {};
  }, {});
};

export const getPageData = (
  data: any[],
  page: number,
  pageSize = PAGE_LIMIT
) => {
  if (!data) {
    return [];
  }
  const numberOfItems = page * pageSize - 1;
  if (page * pageSize >= data.length) {
    return data;
  }
  return data.slice(0, numberOfItems);
};

export const getHostname = (url?: string) => {
  if (!url) return null;

  const matches = url.match(/^https?\:\/\/(?:www\.)([^\/:?#]+)(?:[\/:?#]|$)/i);
  return matches && matches[1];
};

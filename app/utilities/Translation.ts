const currentDeviceLocale = 'en'; // This should be read from device

const translations = {
  en: {
    hacker_news_title: 'YCombinator',
    new_stories_tab_title: 'New',
    top_stories_tab_title: 'Top',
    best_stories_tab_title: 'Best'
  }
};

const translate = (key?: string): string | null => {
  if (key && `${key}` in translations[currentDeviceLocale]) {
    return translations[currentDeviceLocale][key];
  }
  return null;
};
export default translate;

export const getMomentTranlastion = () => {
  if (
    translations[currentDeviceLocale] &&
    translations[currentDeviceLocale]['relativeTime']
  ) {
    return translations[currentDeviceLocale]['relativeTime'];
  }
};

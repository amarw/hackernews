import React from 'react';
import { View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import NewsFeedListView from 'app/components/newsfeed/NewsFeedListView';
import NavigationBarView from 'app/components/common/NavigationBarView';
import TabbedView from 'app/components/newsfeed/TabbedView';
import translate from 'app/utilities/Translation';

interface NewsFeedScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

class NewsFeedScreen extends React.Component<NewsFeedScreenProps, {}> {
  getNavigationState = () => [
    { key: 'new', title: translate('new_stories_tab_title') || '' },
    { key: 'top', title: translate('top_stories_tab_title') || '' },
    { key: 'best', title: translate('best_stories_tab_title') || '' }
  ];

  getScene = (key: string, jumpTo: (key: string) => void): React.ReactNode => (
    <NewsFeedListView style={{ flex: 1 }} routeKey={key} jumpTo={jumpTo} />
  );

  render() {
    const routes = this.getNavigationState();
    return (
      <View style={{ flex: 1 }}>
        <NavigationBarView title={translate('hacker_news_title')} />
        <TabbedView routes={routes} sceneProvider={this.getScene} />
      </View>
    );
  }
}
export default NewsFeedScreen;

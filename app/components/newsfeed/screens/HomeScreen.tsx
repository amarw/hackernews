import React from 'react';
import { View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import NewStoriesFeedScreen from 'app/components/newsfeed/screens/NewStoriesFeedScreen';
import TopStoriesFeedScreen from 'app/components/newsfeed/screens/TopStoriesFeedScreen';
import BestStoriesFeedScreen from 'app/components/newsfeed/screens/BestStoriesFeedScreen';
import NavigationBarView from 'app/components/common/NavigationBarView';
import TabbedView from 'app/components/newsfeed/views/TabbedView';
import translate from 'app/utilities/Translation';

interface NewsFeedScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

class HomeScreen extends React.Component<NewsFeedScreenProps, {}> {
  getNavigationState = () => [
    { key: 'new', title: translate('new_stories_tab_title') || '' },
    { key: 'top', title: translate('top_stories_tab_title') || '' },
    { key: 'best', title: translate('best_stories_tab_title') || '' }
  ];

  getScene = (key: string, jumpTo: (key: string) => void): React.ReactNode => {
    if (key === 'new') {
      return (
        <NewStoriesFeedScreen
          style={{ flex: 1 }}
          routeKey={key}
          jumpTo={jumpTo}
        />
      );
    }
    if (key === 'top') {
      return (
        <TopStoriesFeedScreen
          style={{ flex: 1 }}
          routeKey={key}
          jumpTo={jumpTo}
        />
      );
    }
    if (key === 'best') {
      return (
        <BestStoriesFeedScreen
          style={{ flex: 1 }}
          routeKey={key}
          jumpTo={jumpTo}
        />
      );
    }
    return null;
  };

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
export default HomeScreen;

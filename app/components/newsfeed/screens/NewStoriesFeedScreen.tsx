import * as React from 'react';
import { ViewProps } from 'react-native';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { fetchStories, refreshStories } from 'app/actions/StoryFeedActions';
import { ReduxStore, StoryFeed } from 'app/@types/redux';
import FeedListView from 'app/components/newsfeed/views/FeedListView';
import { getPageData } from 'app/utilities/DataConversion';
import { PAGE_LIMIT } from 'app/constants';

interface StateProps {
  newStories: StoryFeed;
}
interface OwnProps extends ViewProps {
  routeKey: string;
  jumpTo: (key: string) => void;
}
interface DispatchProps {
  fetchStories: (storyType: string) => any;
  refreshStories: (storyType: string) => any;
}
interface NavigationProps {
  navigation: any;
}
type NewsFeedListViewProps = OwnProps &
  DispatchProps &
  StateProps &
  NavigationProps;

class NewStoriesFeedScreen extends React.Component<NewsFeedListViewProps, {}> {
  componentDidMount() {
    const { routeKey = '', fetchStories: fetchFeedStories } = this.props;
    fetchFeedStories(routeKey);
  }

  handleUrlClick = (url: string) => {
    const { navigation } = this.props;
    if (url && navigation) {
      navigation.navigate('webview', { url });
    }
  };

  render() {
    const { newStories } = this.props;
    const data = newStories.isLoading
      ? [...Array(PAGE_LIMIT).keys()]
      : getPageData(newStories.stories, 1);
    return (
      <FeedListView
        data={data}
        isLoading={newStories.isLoading}
        handleUrlClick={this.handleUrlClick}
      />
    );
  }
}

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  ReduxStore
> = state => ({
  newStories: state.newStories
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  refreshStories,
  fetchStories
};

const NewStoriesFeedScreenWithNavigation = withNavigation(NewStoriesFeedScreen);
export default connect<StateProps, DispatchProps, OwnProps, ReduxStore>(
  mapStateToProps,
  mapDispatchToProps
)(NewStoriesFeedScreenWithNavigation);

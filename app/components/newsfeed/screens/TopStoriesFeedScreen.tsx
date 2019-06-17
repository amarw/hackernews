import * as React from 'react';
import { ViewProps } from 'react-native';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { fetchStories, refreshStories } from 'app/actions/StoryFeedActions';
import { ReduxStore, StoryFeed } from 'app/@types/redux';
import { PAGE_LIMIT } from 'app/constants';
import { getPageData } from 'app/utilities/DataConversion';
import FeedListView from 'app/components/newsfeed/views/FeedListView';

interface StateProps {
  topStories: StoryFeed;
}
interface OwnProps extends ViewProps {
  routeKey: string;
  jumpTo: (key: string) => void;
}
interface DispatchProps {
  fetchStories: (storyType: string) => any;
  refreshStories: (storyType: string) => any;
}
type NewsFeedListViewProps = OwnProps & DispatchProps & StateProps;

class NewsFeedListView extends React.Component<NewsFeedListViewProps, {}> {
  componentDidMount() {
    const { routeKey = '', fetchStories: fetchFeedStories } = this.props;
    fetchFeedStories(routeKey);
  }

  render() {
    const { topStories } = this.props;
    const data = topStories.isLoading
      ? [...Array(PAGE_LIMIT).keys()]
      : getPageData(topStories.stories, 1);
    return <FeedListView data={data} isLoading={topStories.isLoading} />;
  }
}

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  ReduxStore
> = state => ({
  topStories: state.topStories
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  refreshStories,
  fetchStories
};

export default connect<StateProps, DispatchProps, OwnProps, ReduxStore>(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeedListView);

import * as React from 'react';
import { View, Text, ViewProps } from 'react-native';
import { connect, MapDispatchToProps } from 'react-redux';
import { refreshStories, fetchStories } from 'app/actions/StoryFeedActions';

interface OwnProps extends ViewProps {
  routeKey: string;
  jumpTo: (key: string) => void;
}
interface DispatchProps {
  fetchStories: (storyType: string) => any;
  refreshStories: (storyType: string) => any;
}
type NewsFeedListViewProps = OwnProps & DispatchProps;

class NewsFeedListView extends React.Component<NewsFeedListViewProps, {}> {
  componentDidMount() {
    const { routeKey = '', fetchStories: fetchFeedStories } = this.props;
    fetchFeedStories(routeKey);
  }

  render() {
    const { routeKey = '' } = this.props;
    return (
      <View {...this.props}>
        <Text>{routeKey}</Text>
      </View>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  refreshStories,
  fetchStories
};

export default connect<{}, DispatchProps, OwnProps>(
  null,
  mapDispatchToProps
)(NewsFeedListView);

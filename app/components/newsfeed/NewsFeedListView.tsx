import * as React from 'react';
import { View, Text, ViewProps } from 'react-native';

interface NewsFeedListViewProps extends ViewProps {
  routeKey: string;
  jumpTo: (key: string) => void;
}

class NewsFeedListView extends React.Component<NewsFeedListViewProps, {}> {
  render() {
    const { routeKey = '' } = this.props;
    return (
      <View {...this.props}>
        <Text>{routeKey}</Text>
      </View>
    );
  }
}
export default NewsFeedListView;

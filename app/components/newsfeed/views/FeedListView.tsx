import React from 'react';
import { FlatList, ListRenderItemInfo, View, ViewProps } from 'react-native';
import { connect, MapStateToProps } from 'react-redux';
import { Stories } from 'app/@types/models';
import { ItemStore, ReduxStore } from 'app/@types/redux';
import PlacholderView from 'app/components/newsfeed/views/PlacholderView';
import FeedListItemView from 'app/components/newsfeed/views/FeedListItemView';

interface StateProps {
  items: ItemStore;
}
interface OwnProps extends ViewProps {
  data: Stories;
  isLoading: boolean;
}
type FeedListViewProps = OwnProps & StateProps;

class FeedListView extends React.PureComponent<FeedListViewProps, {}> {
  renderItem = ({ item: itemId }: ListRenderItemInfo<number>) => {
    const { isLoading, items = {} } = this.props;
    if (isLoading || items[itemId] === undefined) {
      return <PlacholderView isReady={false} />;
    }
    return <FeedListItemView item={items[itemId]} />;
  };

  render() {
    const { data, ...otherProps } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          {...otherProps}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={item => item.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  ReduxStore
> = state => ({
  items: state.items
});
export default connect<StateProps, null, OwnProps, ReduxStore>(
  mapStateToProps,
  null
)(FeedListView);

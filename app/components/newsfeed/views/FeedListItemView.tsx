import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Item } from 'app/@types/models';
import Color, { getRandomColor } from '../../../utilities/Color';

interface FeedListItemViewProps extends ViewProps {
  item: Item;
}

class FeedListItemView extends React.PureComponent<FeedListItemViewProps, {}> {
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: 16,
          marginVertical: 12,
          borderColor: Color.border,
          borderWidth: StyleSheet.hairlineWidth,
          borderRadius: 5,
          backgroundColor: getRandomColor(),
          height: 100
        }}
      />
    );
  }
}
export default FeedListItemView;

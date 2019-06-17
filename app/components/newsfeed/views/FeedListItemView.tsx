import React from 'react';
import { View, ViewProps, Text, TouchableOpacity } from 'react-native';
import { Item } from 'app/@types/models';
import formattedElapsedTime from 'app/utilities/Date';
import { getHostname } from 'app/utilities/DataConversion';
import SeparatorLineView from 'app/components/common/SeparatorLineView';
import styles from 'app/components/newsfeed/views/FeedListItemView.style';
import Color from 'app/utilities/Color';

interface FeedListItemViewProps extends ViewProps {
  item: Item;
  handleUrlClick: (url: string) => void;
}

class FeedListItemView extends React.PureComponent<FeedListItemViewProps, {}> {
  handleFeedUrlClick = () => {
    const { item, handleUrlClick } = this.props;
    if (item.url && handleUrlClick) {
      handleUrlClick(item.url);
    }
  };

  render() {
    const { item } = this.props;
    const displayHostname = getHostname(item.url);
    return (
      <View style={styles.mainContainerView}>
        <TouchableOpacity activeOpacity={1} onPress={this.handleFeedUrlClick}>
          <Text style={styles.userName}>{`@${item.by}`}</Text>
          <Text style={styles.title}>
            {item.title}
            {displayHostname && (
              <Text style={[styles.timeStamp, { color: Color.blueText }]}>
                {` (${displayHostname})`}
              </Text>
            )}
          </Text>
          <Text style={styles.timeStamp}>
            {formattedElapsedTime(item.time)}
          </Text>
        </TouchableOpacity>
        <SeparatorLineView style={{ marginTop: 10 }} />
        <View style={styles.horizontalContainerView}>
          <TouchableOpacity style={styles.buttonView}>
            <Text>{`${item.score} Upvotes`}</Text>
          </TouchableOpacity>
          <SeparatorLineView style={styles.verticalSeparatorView} vertical />
          <TouchableOpacity style={styles.buttonView}>
            <Text>{`${item.descendants} Comments`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default FeedListItemView;

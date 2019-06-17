import React from 'react';
import { View, ViewProps } from 'react-native';
import Placeholder, { Line, Paragraph } from 'rn-placeholder';
import styles from 'app/components/newsfeed/views/PlaceholderView.style';
import SeparatorLineView from 'app/components/common/SeparatorLineView';

export interface PlacholderViewProps extends ViewProps {
  isReady: boolean;
  animate?: boolean;
}

const PlacholderView: React.FC<PlacholderViewProps> = ({
  style,
  isReady,
  animate,
  ...otherProps
}: PlacholderViewProps) => (
  <View style={[style, styles.mainContainer]} {...otherProps}>
    <Placeholder
      isReady={isReady}
      // @ts-ignore
      animation={animate ? 'fade' : undefined}
    >
      <View style={{ marginTop: 12 }}>
        <View style={{ marginHorizontal: 8 }}>
          <Line width="30%" />
          <Paragraph lineNumber={3} lineSpacing={1} isReady={false}>
            <View />
          </Paragraph>
          <Line style={{ marginTop: 12 }} width="20%" />
        </View>
        <SeparatorLineView style={{ marginTop: 10 }} />
        <View style={styles.horizontalContainer}>
          <View style={styles.buttonView}>
            <Line style={styles.buttonTitle} width="50%" />
          </View>
          <SeparatorLineView style={{ height: 50 }} vertical />
          <View style={styles.buttonView}>
            <Line style={styles.buttonTitle} width="50%" />
          </View>
        </View>
      </View>
    </Placeholder>
  </View>
);
export default PlacholderView;

import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import NavigationBarButtonView from 'app/components/common/NavigationBarButtonView';
import SeparatorLineView from 'app/components/common/SeparatorLineView';
import styles from 'app/components/common/NavigationBarView.style';

export interface NavigationBarViewProps {
  title?: string | null;
  showBackButton?: boolean;
  onBackButtonPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const NavigationBarView: React.FC<NavigationBarViewProps> = ({
  title = '',
  showBackButton = false,
  onBackButtonPress,
  ...otherProps
}: NavigationBarViewProps) => (
  <View {...otherProps}>
    <View style={styles.horizontalContainerView}>
      <View style={styles.accessoryButton}>
        {showBackButton && (
          <NavigationBarButtonView
            style={[styles.accessoryButton, { justifyContent: 'center' }]}
            textStyle={{ fontSize: 16, fontWeight: '600' }}
            onPress={onBackButtonPress}
          />
        )}
      </View>
      <Text style={styles.navigationTitle}>{title}</Text>
      <View style={styles.accessoryButton} />
    </View>
    <SeparatorLineView />
  </View>
);
export default NavigationBarView;

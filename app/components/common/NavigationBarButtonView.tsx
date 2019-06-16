import React from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface NavigationBarButtonViewProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
const NavigationBarButtonView: React.FC<NavigationBarButtonViewProps> = ({
  onPress,
  style,
  ...otherProps
}: NavigationBarButtonViewProps) => (
  <TouchableOpacity
    {...otherProps}
    activeOpacity={0.9}
    style={style}
    onPress={onPress}
  >
    <Text>Back</Text>
  </TouchableOpacity>
);
export default NavigationBarButtonView;

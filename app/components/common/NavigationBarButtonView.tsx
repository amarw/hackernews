import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from 'react-native';

interface NavigationBarButtonViewProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
}
const NavigationBarButtonView: React.FC<NavigationBarButtonViewProps> = ({
  onPress,
  style,
  textStyle,
  ...otherProps
}: NavigationBarButtonViewProps) => (
  <TouchableOpacity
    {...otherProps}
    activeOpacity={0.9}
    style={style}
    onPress={onPress}
  >
    <Text style={textStyle}>Back</Text>
  </TouchableOpacity>
);
export default NavigationBarButtonView;

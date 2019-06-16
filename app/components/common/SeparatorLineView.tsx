import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Color from 'app/utilities/Color';

export interface SeparatorLineViewProps {
  thickness?: number;
  color?: string;
  vertical?: boolean;
  style?: StyleProp<ViewStyle>;
}

const SeparatorLineView: React.FC<SeparatorLineViewProps> = ({
  thickness = StyleSheet.hairlineWidth,
  color = Color.border,
  vertical = false,
  style,
  ...otherProps
}: SeparatorLineViewProps) => {
  const modifiedStyle = [
    style,
    {
      width: vertical ? thickness : undefined, // for vertical line thickness is width
      height: vertical ? undefined : thickness, // for horizontal line thickness is height
      backgroundColor: color
    }
  ];
  return <View style={modifiedStyle} {...otherProps} />;
};
export default SeparatorLineView;

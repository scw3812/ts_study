import React from 'react';
import type { FC, ComponentProps } from 'react';
import { TouchableOpacity, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

export type TouchableViewProps = ComponentProps<typeof TouchableOpacity> & {
  viewStyle?: StyleProp<ViewStyle>;
};

export const TouchableView: FC<TouchableViewProps> = ({
  children,
  viewStyle,
  ...touchableProps
}) => {
  return (
    <TouchableOpacity {...touchableProps}>
      <View style={viewStyle}>{children}</View>
    </TouchableOpacity>
  );
};

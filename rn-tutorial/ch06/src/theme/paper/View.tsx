import React from 'react';
import type { FC, ComponentProps } from 'react';
import { View as RNView } from 'react-native';
import { useTheme } from 'react-native-paper';

export type ViewProps = ComponentProps<typeof RNView> & {
  accent?: boolean;
  notification?: boolean;
  primary?: boolean;
  surface?: boolean;
  backgroud?: boolean;
};

export const View: FC<ViewProps> = ({
  style,
  accent,
  notification,
  primary,
  surface,
  backgroud,
  ...props
}) => {
  const { colors } = useTheme();
  const backgroundColor = accent
    ? colors.accent
    : notification
    ? colors.notification
    : primary
    ? colors.primary
    : surface
    ? colors.surface
    : backgroud
    ? colors.background
    : 'transparent';

  return <RNView style={[style, { backgroundColor }]} {...props} />;
};

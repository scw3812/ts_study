import React from 'react';
import type { FC, ComponentProps } from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

export type TextProps = ComponentProps<typeof RNText>;

export const Text: FC<TextProps> = ({ style, ...props }) => {
  const { colors } = useTheme();
  return <RNText style={[style, { color: colors.text }]} {...props} />;
};

export const UnderlineText: FC<TextProps> = ({ style, ...props }) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={[
        style,
        styles.underline,
        { color: colors.text, textDecorationColor: colors.text },
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  underline: { textDecorationLine: 'underline' },
});

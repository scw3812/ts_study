import React, { forwardRef } from 'react';
import type { ForwardRefRenderFunction, ComponentProps } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useTheme } from 'react-native-paper';

export type TextInputProps = ComponentProps<typeof RNTextInput>;

const _Text: ForwardRefRenderFunction<RNTextInput, TextInputProps> = (
  { style, ...props },
  ref,
) => {
  const { colors } = useTheme();

  return (
    <RNTextInput
      ref={ref}
      style={[style, { color: colors.text, borderColor: colors.placeholder }]}
      {...props}
    />
  );
};

export const Text = forwardRef(_Text);

import React, { createContext, useContext, useState } from 'react';
import type { FC } from 'react';

export interface ScrollEnabledContextType {
  scrollEnabled: boolean;
  setScrollEnabled: (enable: boolean) => void;
}
const defaultScrollEnabledContext = {
  scrollEnabled: true,
  setScrollEnabled: (_: boolean) => {},
};
const ScrollEnabledContext = createContext<ScrollEnabledContextType>(
  defaultScrollEnabledContext,
);
interface ScrollEnabledContextProps {}
export const ScrollEnabledProvider: FC<ScrollEnabledContextProps> = ({
  children,
}) => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const value = {
    scrollEnabled,
    setScrollEnabled,
  };
  return (
    <ScrollEnabledContext.Provider value={value}>
      {children}
    </ScrollEnabledContext.Provider>
  );
};
export const useScrollEnabled = (): [boolean, (enabled: boolean) => void] => {
  const { scrollEnabled, setScrollEnabled } = useContext(ScrollEnabledContext);
  return [scrollEnabled, setScrollEnabled];
};

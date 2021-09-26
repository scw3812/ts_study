import { useState, useCallback } from 'react';

export const useToggle = (
  initialValue: boolean = false,
  deps: boolean[] = [],
): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleValue = useCallback(() => setValue((state) => !state), deps);
  return [value, toggleValue];
};

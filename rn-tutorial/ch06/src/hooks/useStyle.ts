import { useMemo } from 'react';

export const useStyle = (style: object, deps: any[] = []) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => style, deps);

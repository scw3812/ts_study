import { useStyle } from './useStyle';

export const useTransformStyle = (
  transform: Record<string, any>,
  deps: any[] = [],
) =>
  useStyle(
    {
      transform: Object.keys(transform).map((key) => ({
        [key]: transform[key],
      })),
    },
    deps,
  );

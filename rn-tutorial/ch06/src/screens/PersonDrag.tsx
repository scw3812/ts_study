import React, { useMemo } from 'react';
import type { FC } from 'react';
import { Colors } from 'react-native-paper';
import * as D from '../data';
import { View } from '../theme/paper';
import DragAvatar from '../components/DragAvatar';

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonDrag: FC<PersonProps> = () => {
  const colors = useMemo(
    () => [
      Colors.pink500,
      Colors.yellow500,
      Colors.lime500,
      Colors.lightBlue500,
    ],
    [],
  );
  const circles = useMemo(
    () =>
      colors.map((color, index) => (
        <DragAvatar key={index} size={70} backgroundColor={color} />
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return <View style={{ flex: 1, height: 600 }}>{circles}</View>;
};

export default PersonDrag;

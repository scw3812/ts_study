/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useMemo, useCallback } from 'react';
import type { FC } from 'react';
import { StyleSheet, FlatList, Image, View, Animated } from 'react-native';
import type { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Colors } from 'react-native-paper';
import { TouchableView } from './TouchableView';
import {
  useAnimatedValue,
  useMonitorAnimatedValue,
  useTransformStyle,
} from '../hooks';

export interface ImageSliderProps {
  imageUrls: string[];
  imageWidth: number;
  showThumbnails?: boolean;
}

const circleWidth = 10,
  circleMarginRight = 5;

export const ImageSlider: FC<ImageSliderProps> = ({
  imageUrls,
  imageWidth,
  showThumbnails,
}) => {
  const flatListRef = useRef<FlatList | null>(null);
  const selectImage = useCallback(
    (index: number) => () => flatListRef.current?.scrollToIndex({ index }),
    [],
  );
  const circles = useMemo(
    () =>
      imageUrls.map((_, index) => <View key={index} style={styles.circle} />),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const thumbnails = useMemo(
    () =>
      imageUrls.map((uri, index) => (
        <TouchableView
          key={index}
          style={styles.thumbnail}
          onPress={selectImage(index)}>
          <Image source={{ uri }} style={styles.thumbnailImage} />
        </TouchableView>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ width: imageUrls.length * imageWidth }}
        data={imageUrls}
        renderItem={({ item }) => (
          <Image
            style={[styles.image, { width: imageWidth }]}
            source={{ uri: item }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={[styles.iconBar, { justifyContent: 'center' }]}>
        <View style={{ flexDirection: 'row' }}>
          {circles}
          <Animated.View style={[styles.circle, styles.selectedCircle]} />
        </View>
      </View>
      {showThumbnails && (
        <View style={[styles.iconBar, { justifyContent: 'space-between' }]}>
          {thumbnails}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: { height: 150, resizeMode: 'cover' },
  iconBar: { flexDirection: 'row', padding: 5 },
  thumbnail: { borderWidth: 1, padding: 2 },
  circle: {
    width: circleWidth,
    height: circleWidth,
    borderRadius: circleWidth / 2,
    marginRight: circleMarginRight,
    backgroundColor: Colors.pink100,
  },
  selectedCircle: { position: 'absolute', backgroundColor: Colors.pink700 },
  thumbnailImage: { width: 30, height: 30 },
});

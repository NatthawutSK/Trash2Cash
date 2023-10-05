import { colors } from "@/constants/Colors";
import React, { useCallback, memo, useRef, useState } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  slide: {
    height: 200,
    width: windowWidth,
    // justifyContent: "center",
    alignItems: "center",
  },
  slideImage: { width: windowWidth, height: 200 },
  slideTitle: { fontSize: 24 },
  slideSubtitle: { fontSize: 18 },

  pagination: {
    position: "absolute",
    top: 220,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  paginationDotActive: { backgroundColor: colors.green4 },
  paginationDotInactive: { backgroundColor: colors.green2 },

  carousel: { flex: 1 },
});

// const slideList = Array.from({ length: 30 }).map((_, i) => {
//   return {
//     id: i,
//     image: `https://picsum.photos/1440/2842?random=${i}`,
//     title: `This is the title ${i + 1}!`,
//     subtitle: `This is the subtitle ${i + 1}!`,
//   };
// });

const Slide = memo(function Slide({ data }: any) {
  return (
    <View style={styles.slide}>
      <Image source={{ uri: data }} style={styles.slideImage} />
    </View>
  );
});

export default function Carousel({ img }: any) {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback((event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((s: any, index: any) => String(index), []),
    getItemLayout: useCallback(
      (_: any, index: any) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  };

  const renderItem = useCallback(function renderItem({ item }: any) {
    return <Slide data={item} />;
  }, []);

  function Pagination({ index }: any) {
    return (
      <View style={styles.pagination} pointerEvents="none">
        {img.map((_: any, i: any) => {
          return (
            <View
              key={i}
              style={[
                styles.paginationDot,
                index === i
                  ? styles.paginationDotActive
                  : styles.paginationDotInactive,
              ]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={img}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={true}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination index={index}></Pagination>
    </>
  );
}

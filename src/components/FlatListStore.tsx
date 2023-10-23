import { View, Text, FlatList } from "react-native";
import React from "react";
import StoreItem from "./StoreItem";
import { Stack } from "tamagui";
import StoreItemSearch from "./StoreItemSearch";

type Props = { name: string };
const DATA = [
  {
    name: "ร้าน รี",
    mat: ["wine-bottle", "box", "file", "glass-whiskey"],
    star: 5.0,
  },
  {
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
    star: 4.3,
  },
  {
    name: "ร้าน เคิ้ล",
    mat: ["wine-bottle", "box"],
    star: 3.3,
  },
  {
    name: "ร้าน รีไซ",
    mat: ["box", "glass-whiskey"],
    star: 2.3,
  },
  {
    name: "ร้าน รีเคิล",
    mat: ["glass-whiskey"],
    star: 3.7,
  },
  {
    name: "ร้าน รี",
    mat: ["wine-bottle", "box", "file", "glass-whiskey"],
    star: 5.0,
  },
  {
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
    star: 4.3,
  },
  {
    name: "ร้าน เคิ้ล",
    mat: ["wine-bottle", "box"],
    star: 3.3,
  },
  {
    name: "ร้าน รีไซ",
    mat: ["box", "glass-whiskey"],
    star: 2.3,
  },
  {
    name: "ร้าน รีเคิล",
    mat: ["glass-whiskey"],
    star: 3.7,
  },
];
const renderStore = (item: { item: any }) => {
  return <StoreItemSearch {...item.item} />;
};

const FlatListStore = ({ data }: { data: any[] }) => {
  return (
    <Stack p={20}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderStore}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        contentContainerStyle={{ paddingBottom: 80 }}
        // Performance settings
        removeClippedSubviews={true}
        initialNumToRender={7}
        maxToRenderPerBatch={10}
        windowSize={10}
      />
    </Stack>
  );
};

export default FlatListStore;

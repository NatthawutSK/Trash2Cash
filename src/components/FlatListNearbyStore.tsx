import { View, Text, FlatList } from "react-native";
import React from "react";
import StoreItem from "./StoreItem";
import { Button, Stack } from "tamagui";
import { router } from "expo-router";
import { StoreNearbyType } from "@/types";

type Props = { name: string };

const renderStore = (item: { item: StoreNearbyType }) => {
  return <StoreItem {...item.item} />;
};

const FlatListNearbyStore = ({ data }: { data: StoreNearbyType[] }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderStore}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      // Performance settings
      removeClippedSubviews={true}
      initialNumToRender={7}
      maxToRenderPerBatch={10}
      windowSize={10}
    />
  );
};

export default FlatListNearbyStore;

import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

type Props = {};

const detailStore = (props: Props) => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>DETAIL STORE : {id}</Text>
    </View>
  );
};

export default detailStore;

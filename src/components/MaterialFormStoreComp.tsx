import { FlatList } from "react-native";
import React from "react";
import { H4, Stack, Text } from "tamagui";

type Props = {
  allMaterial: TrashMaterial[];
};

type TrashMaterial = {
  materialName: string;
  price: string;
  receive: string;
};

const MaterialFormStoreComp = ({ allMaterial }: Props) => {
  return (
    <FlatList
      data={allMaterial}
      renderItem={({ item }: { item: TrashMaterial }) => (
        <Stack
          key={item.materialName}
          bg={"$blue10Light"}
          p={"$2"}
          br={"$2"}
          space={"$2"}
        >
          <Text>{item.materialName}</Text>
          <Text>{item.price}</Text>
          <Text>{item.receive}</Text>
        </Stack>
      )}
      contentContainerStyle={{ gap: 20 }}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <H4 className="self-center py-5 font-bold">วัสดุที่รับ</H4>
      }
    />
  );
};

export default MaterialFormStoreComp;

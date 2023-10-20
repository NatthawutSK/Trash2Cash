import { View, Text, FlatList } from "react-native";
import React from "react";
import { ChevronDown } from "@tamagui/lucide-icons";
import {
  Accordion,
  XStack,
  H4,
  Square,
  Separator,
  YStack,
  Image,
} from "tamagui";
import { colors } from "@/constants/Colors";
import { getProperty } from "@/utils/util";
import { imgIcon } from "@/MockData/data";
import { TypeTrashMaterial } from "@/MockData/types";

type Props = {};

const MaterialRender = (item: TypeTrashMaterial) => {
  return (
    <YStack>
      <XStack
        ai={"center"}
        jc={"center"}
        columnGap={"$5"}
        // spaceDirection={"vertical"}
        // space={"$3"}
        // gap={"$3"}
      >
        <Image
          className="w-24 h-24"
          source={getProperty(
            imgIcon,
            item.materialName as keyof typeof imgIcon
          )}
        />
        <YStack ai={"flex-start"} jc={"center"}>
          <Text>ชื่อวัสดุ : {item.materialName}</Text>
          <Text>จำนวนที่รับ : {item.receive}</Text>
          <Text>ราคาที่รับ : {item.price} บาท/กก.</Text>
        </YStack>
      </XStack>
      {/* <Separator borderColor={colors.green4} marginTop={20} /> */}
    </YStack>
  );
};

const MaterialDropDown = ({ data }: { data: TypeTrashMaterial[] }) => {
  return (
    <Accordion overflow="hidden" width="90%" type="multiple">
      <Accordion.Item value="a2">
        <Accordion.Trigger flexDirection="row" justifyContent="space-between">
          {({ open }: any) => (
            <XStack jc={"space-between"} f={1}>
              <H4 ml={"$2"} className="font-bold">
                วัสดุที่รับทั้งหมด
              </H4>
              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </XStack>
          )}
        </Accordion.Trigger>
        <Accordion.Content>
          <View>
            {/* <Text>{JSON.stringify(data.data)}</Text> */}
            <FlatList
              style={{ gap: 20 }}
              showsVerticalScrollIndicator={false}
              data={data}
              ItemSeparatorComponent={() => (
                <Separator borderColor={colors.green4} marginTop={20} />
              )}
              renderItem={({ item }) => MaterialRender(item)}
            />
          </View>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

export default MaterialDropDown;

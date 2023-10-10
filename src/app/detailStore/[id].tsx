import React from "react";
import { useLocalSearchParams } from "expo-router";
import {
  Avatar,
  Image,
  Square,
  Stack,
  XStack,
  YStack,
  Text,
  H4,
  Accordion,
  Paragraph,
  Separator,
} from "tamagui";

// import * as Linking from "expo-linking";
import {
  Store,
  Phone,
  ChevronDown,
  Newspaper,
  Map,
} from "@tamagui/lucide-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FlatList, Linking, Platform, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import MaterialDropDown from "@/components/MaterialDropDown";
import { colors } from "@/constants/Colors";
import Carousel from "@/components/Carousel";
import { TouchableOpacity } from "react-native-gesture-handler";
import StoreInfo from "@/components/StoreInfo";
import { MockImg, MockTrashMaterial, Mockstore } from "@/MockData/data";

type Props = {};

const detailStore = (props: Props) => {
  const { id } = useLocalSearchParams();
  console.log(id);

  return (
    <ScrollView>
      {/* <Image width={500} h={250} source={{ uri: Mockstore[0].img }} /> */}
      <Carousel img={MockImg} />
      <Stack mt={"$8"}>
        <StoreInfo info={Mockstore} />
      </Stack>

      <YStack ai={"center"} pt={"$5"} space={"$4"}>
        <H4 className="font-bold">วัสดุที่รับ</H4>
        <MaterialDropDown data={MockTrashMaterial} />
      </YStack>
    </ScrollView>
  );
};

export default detailStore;

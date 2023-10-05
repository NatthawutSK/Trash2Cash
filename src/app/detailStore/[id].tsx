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
} from "tamagui";
import { Store, Phone, ChevronDown, Newspaper } from "@tamagui/lucide-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FlatList, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { getProperty, imgIcon } from "../(tabs)";
import MaterialDropDown from "@/components/MaterialDropDown";
import { colors } from "@/constants/Colors";
import Carousel from "@/components/Carousel";

type Props = {};
type TypeStore = {
  img: string;
  name: string;
  address: string;
  contact: {
    phone: string;
    email?: string;
    line?: string;
  };
};

const MockTrashMaterial = [
  {
    name: "ขวด PET ใส",
    img: "plastic_bottle",
    recieveAmount: "10 กิโลกรัม",
    price: "10 บาท/กิโลกรัม",
  },
  {
    name: "ขวดแก้ว",
    img: "glass_bottle",
    recieveAmount: "10 กิโลกรัม",
    price: "20 บาท/กิโลกรัม",
  },
  {
    name: "กระดาษกล่อง",
    img: "box",
    recieveAmount: "10 กิโลกรัม",
    price: "30 บาท/กิโลกรัม",
  },
];

const Mockstore: TypeStore[] = [
  {
    img: "https://xn--12c7bzakgbj6bza1cbe6b3jwh.com/upload/about/1735775123198501.webp",
    name: "บ้านเลขที่ 1",
    address: "ถนน 1",
    contact: {
      phone: "0812345678",
      email: "",
    },
  },
  {
    img: "http://www.thealami.com/upfile/wongranit1.jpg",
    name: "บ้านเลขที่ 2",
    address: "ถนน 2",
    contact: {
      phone: "0812345678",
      email: "",
    },
  },
];

const MockImg = [
  "https://xn--12c7bzakgbj6bza1cbe6b3jwh.com/upload/about/1735775123198501.webp",
  "http://www.thealami.com/upfile/wongranit1.jpg",
  "https://mpics.mgronline.com/pics/Images/563000002635602.JPEG",
  "https://mpics.mgronline.com/pics/Images/563000002635603.JPEG",
];

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
};

const exampleTrash = (item: any) => {
  return (
    <XStack
      ai={"center"}
      jc={"center"}
      columnGap={"$5"}
      // spaceDirection={"vertical"}
      // space={"$3"}
      // gap={"$3"}
    >
      <Image className="w-24 h-24" source={getProperty(imgIcon, item.img)} />
      <YStack ai={"flex-start"} jc={"center"}>
        <Text>ชื่อวัสดุ : {item.name}</Text>
        <Text>จำนวนที่รับ : {item.recieveAmount}</Text>
        <Text>ราคาที่รับซื้อ : {item.price}</Text>
      </YStack>
    </XStack>
  );
};

const detailStore = (props: Props) => {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView>
      {/* <Image width={500} h={250} source={{ uri: Mockstore[0].img }} /> */}
      <Carousel img={MockImg} />

      <YStack ai={"center"} pt={"$10"}>
        <View
          className="w-11/12  h-20"
          style={{ backgroundColor: colors.green3 }}
        ></View>
      </YStack>

      <YStack ai={"center"} pt={"$5"} space={"$4"}>
        <H4 className="font-bold">วัสดุที่รับ</H4>
        <MaterialDropDown data={MockTrashMaterial} renderFunc={exampleTrash} />
      </YStack>
    </ScrollView>
  );
};

export default detailStore;

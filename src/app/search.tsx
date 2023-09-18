import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  H5,
  Tabs,
  Stack,
  YStack,
  XStack,
  Avatar,
  Separator,
  ScrollView,
} from "tamagui";
import { Star, Store } from "@tamagui/lucide-icons";
import { router, useNavigation, useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import MaterialItem, { MatProps } from "@/components/MaterialItem";
import { FlatList } from "react-native";
import StoreItem, { StoreProps } from "@/components/StoreItem";

type Props = {};

const DATA = [
  { name: "ถุงฟิล์ม ยืด PE1", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ4" },
  { name: "ถุงฟิล์ม ยืด PE2", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1" },
  { name: "ถุงฟิล์ม ยืด PE3", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3" },
  { name: "ถุงฟิล์ม ยืด PE4", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2" },
  { name: "ถุงฟิล์ม ยืด PE5", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2" },
  { name: "ถุงฟิล์ม ยืด PE6", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3" },
  { name: "ถุงฟิล์ม ยืด PE7", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1" },
  { name: "ถุงฟิล์ม ยืด PE8", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ4" },
  { name: "ถุงฟิล์ม ยืด PE9", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ4" },
  { name: "ถุงฟิล์ม ยืด PE10", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1" },
  { name: "ถุงฟิล์ม ยืด PE11", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3" },
  { name: "ถุงฟิล์ม ยืด PE12", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2" },
  { name: "ถุงฟิล์ม ยืด PE13", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2" },
  { name: "ถุงฟิล์ม ยืด PE14", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3" },
  { name: "ถุงฟิล์ม ยืด PE15", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1" },
];
const DATA2 = [
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

const renderMaterial = (item: { item: MatProps }) => {
  return <MaterialItem {...item.item} />;
};

const renderStore = (item: { item: StoreProps }) => {
  return <StoreItem {...item.item} />;
};

const handleSearch = (search: string) => {
  console.log("Searching" + search);
};

const search = (props: Props) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<MatProps[]>(DATA);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        inputType: "text",
        placeholder: "ค้นหา",
        // autoFocus: true,
        onChangeText: (event: any) => {
          setData(
            data.filter((item) =>
              item.name.includes(event.nativeEvent.text.toUpperCase())
            )
          );
        },
        hintTextColor: "gray",
        obscureBackground: false,
        // disableBackButtonOverride: true,
        // search bar options
      },
    });
  }, [navigation]);

  return (
    <Stack ac={"center"}>
      <Text>{search}</Text>

      <Tabs fd={"column"} defaultValue="tab1" width={"100%"}>
        <YStack>
          <Tabs.List disablePassBorderRadius ac={"center"} loop={false} space>
            <Tabs.Tab flex={1} value="tab1">
              <Text>TAB1</Text>
            </Tabs.Tab>
            <Tabs.Tab flex={1} value="tab2">
              <Text>TAB2</Text>
            </Tabs.Tab>
          </Tabs.List>
        </YStack>
        <Tabs.Content value="tab1" h={"100%"}>
          <Stack h={"100%"} paddingBottom={200}>
            <FlatList
              contentContainerStyle={{
                gap: 10,
                paddingHorizontal: 20,
              }}
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={renderMaterial}
              keyExtractor={(item, index) => index.toString()}
              // Performance settings
            />
          </Stack>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <Stack h={"100%"} paddingBottom={200}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={DATA2}
              renderItem={renderStore}
              keyExtractor={(item, index) => index.toString()}
              // Performance settings
            />
          </Stack>
        </Tabs.Content>
      </Tabs>
    </Stack>
  );
};

export default search;

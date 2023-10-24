import React, { useEffect, useState } from "react";
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
import { gql, useQuery } from "@apollo/client";
import Spinner from "react-native-loading-spinner-overlay";
import { fetchImages } from "@/utils/util";
import { useFocus } from "@/components/UseFocus";

type Props = {};
const detailStoreQuery = gql`
  query MyQuery($auth_id: String!) {
    usersUsingStore_auth_id_fkey(auth_id: $auth_id) {
      address
      auth_id
      line_id
      store {
        store_detail
        store_user_id
      }
      user_name
      phone_number
    }
  }
`;

const detailStore = (props: Props) => {
  const { id } = useLocalSearchParams();
  // console.log(id[0]);

  const { data, loading } = useQuery(detailStoreQuery, {
    variables: { auth_id: id },
  });
  const { focusCount, isFocused } = useFocus();
  const [storeimg, setStoreimg] = useState<{ name: string; url: string }[]>([]);
  // useEffect(() => {
  //   if (focusCount === 1 && isFocused) {
  //     // this is the first time focus => init screen here
  //     fetchImages(id, setStoreimg);
  //   }
  // }, [isFocused]);

  useEffect(() => {
    // if (focusCount > 1 && isFocused) {
    // trigger when you navigate back from another screen
    // you can background reload data here ...
    fetchImages(id, setStoreimg);
    // }
  }, []);

  if (loading) {
    return (
      <Spinner
        animation="fade"
        visible={true}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
      />
    );
  }

  const storeData = data?.usersUsingStore_auth_id_fkey;
  const materialData = JSON.parse(storeData?.store[0].store_detail);
  const infoStore = {
    user_name: storeData?.user_name,
    phone_number: storeData?.phone_number,
    line_id: storeData?.line_id,
    address: storeData?.address,
  };

  return (
    <ScrollView>
      {/* <Image width={500} h={250} source={{ uri: Mockstore[0].img }} /> */}
      {/* <Carousel img={MockImg} /> */}
      <Carousel
        img={
          storeimg.length === 0
            ? [
                {
                  name: "init",
                  url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png",
                },
              ]
            : storeimg
        }
      />
      <Stack mt={"$8"}>
        <StoreInfo info={infoStore} />
      </Stack>

      <YStack ai={"center"} pt={"$5"} space={"$4"}>
        <H4 className="font-bold">วัสดุที่รับ</H4>
        <MaterialDropDown data={materialData} />
      </YStack>
    </ScrollView>
  );
};

export default detailStore;

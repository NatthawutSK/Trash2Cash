import { FlatList, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, H4, Image, Text } from "tamagui";
import { MockImg } from "@/MockData/data";
import { colors } from "@/constants/Colors";
import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";

type Props = {};

const renderImg = (item: string) => {
  return (
    <View
      className="bg-white self-center"
      style={{
        borderColor: colors.green4,
        borderWidth: 2,
        width: "80%",
        height: 140,
        borderRadius: 10,
      }}
    >
      <Image
        resizeMode="stretch"
        source={{ uri: item }}
        // className="rounded-l-lg "
        style={{
          width: "80%",
          height: "100%",
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        }}
      />
      <Button
        className="absolute top-0 right-0 h-[100%] rounded-lg"
        bg={"$red9Light"}
        style={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          width: "20%",
        }}
      >
        <FontAwesome name="trash" size={30} color="white" />
      </Button>
    </View>
  );
};

// <Image w={50} h={50} source={{ uri: item }} />

const editImageStore = (props: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={MockImg}
        renderItem={({ item }) => renderImg(item)}
        contentContainerStyle={{ gap: 20 }}
        ListHeaderComponent={
          <H4 className="self-center py-5 font-bold">รูปร้านค้า</H4>
        }
      />
      <TouchableOpacity
        onPress={() => console.log("press")}
        style={{
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          width: 65,
          position: "absolute",
          alignSelf: "flex-end",
          bottom: 30,
          right: 30,
          height: 65,
          backgroundColor: colors.green4,
          borderRadius: 100,
        }}
      >
        <Ionicons name="images-outline" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default editImageStore;

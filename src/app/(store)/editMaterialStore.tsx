import { MockTrashMaterial, imgIcon } from "@/MockData/data";
import { colors } from "@/constants/Colors";
import { getProperty } from "@/utils/util";
import React from "react";
import { FlatList, Image, View } from "react-native";

import DialogAddTrashMaterial from "@/components/DialogAddTrashMaterial";
import { Button, H4, Text } from "tamagui";

type Props = {};

const renderTrashMaterial = (item: any) => {
  return (
    <View
      className="bg-white self-center"
      style={{
        borderColor: colors.green4,
        borderWidth: 2,
        width: "90%",
        height: 150,
        borderRadius: 10,
        flexDirection: "row",
      }}
    >
      <View className="items-center justify-center w-36">
        <Image className="w-24 h-24 " source={getProperty(imgIcon, item.img)} />
      </View>
      <View className="justify-center">
        <Text>ชื่อวัสดุ : {item.name}</Text>
        <Text>จำนวนที่รับ : {item.recieveAmount}</Text>
        <Text>ราคาที่รับ : {item.price} บาท/กก.</Text>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
          <Button
            color={"white"}
            bg={"$blue9Light"}
            style={{
              width: 80,
              height: 40,
            }}
          >
            แก้ไข
          </Button>
          <Button
            color={"white"}
            bg={"$red9Light"}
            style={{
              width: 80,
              height: 40,
            }}
          >
            ลบ
          </Button>
        </View>
      </View>
    </View>
  );
};

const editMaterialStore = (props: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={MockTrashMaterial}
        renderItem={({ item }) => renderTrashMaterial(item)}
        contentContainerStyle={{ gap: 20 }}
        ListHeaderComponent={
          <H4 className="self-center py-5 font-bold">วัสดุที่รับ</H4>
        }
      />
      <DialogAddTrashMaterial />
    </View>
  );
};

export default editMaterialStore;

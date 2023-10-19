import { imgIcon } from "@/MockData/data";
import { colors } from "@/constants/Colors";
import { getProperty } from "@/utils/util";
import React from "react";
import { FlatList, Image, View } from "react-native";

import DialogAddTrashMaterial from "@/components/DialogAddTrashMaterial";
import { Button, H4, Text } from "tamagui";
import DialogEditTrashMaterial from "@/components/DialogEditTrashMaterial";
import { TypeTrashMaterial } from "@/MockData/types";
import { useLocalSearchParams } from "expo-router";
import { gql, useQuery } from "@apollo/client";
import Spinner from "react-native-loading-spinner-overlay";

type Props = {};

const getMaterialQuery = gql`
  query StoreQuery($auth_id: String!) {
    usersUsingStore_auth_id_fkey(auth_id: $auth_id) {
      store {
        store_detail
      }
    }
  }
`;

const renderTrashMaterial = (item: TypeTrashMaterial) => {
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
        <Image
          className="w-24 h-24 "
          source={getProperty(
            imgIcon,
            item.materialName as keyof typeof imgIcon
          )}
        />
      </View>
      <View className="justify-center">
        <Text>ชื่อวัสดุ : {item.materialName}</Text>
        <Text>จำนวนที่รับ : {item.receive}</Text>
        <Text>ราคาที่รับ : {item.price} บาท/กก.</Text>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
          <DialogEditTrashMaterial item={item} />
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
  const { id } = useLocalSearchParams();

  const { data, loading, refetch, error } = useQuery(getMaterialQuery, {
    variables: { auth_id: id },
  });
  // console.log("id", authUser?.id)
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

  const materialData: TypeTrashMaterial[] = JSON.parse(
    data.usersUsingStore_auth_id_fkey.store[0].store_detail
  );

  // console.log(materialDataEdit);

  if (error) return <Text>Something went wrong</Text>;
  //   console.log(data);

  return (
    <View style={{ flex: 1 }}>
      {/* <Text>{id}</Text>
      {materialData.map((item: TypeTrashMaterial, i: any) => (
        <Text key={i}>
          {item.materialName} {item.receive}
        </Text>
      ))} */}

      {/* <Text>{JSON.stringify(item.materialData)}</Text> */}
      <FlatList
        data={materialData}
        renderItem={({ item }: { item: TypeTrashMaterial }) =>
          renderTrashMaterial(item)
        }
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

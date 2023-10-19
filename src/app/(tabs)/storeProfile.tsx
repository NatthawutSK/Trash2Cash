import Carousel from "@/components/Carousel";
import React, { useState } from "react";
// import { ScrollView } from "react-native-virtualized-view";
import { MockImg } from "@/MockData/data";
import ButtonStore from "@/components/ButtonStore";
import DialogEditStoreInfo from "@/components/DialogEditStoreInfo";
import MaterialDropDown from "@/components/MaterialDropDown";
import StoreInfo from "@/components/StoreInfo";
import { useAuth } from "@clerk/clerk-expo";
import { useHeaderHeight } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-virtualized-view";
import { Stack, YStack, Text, Button } from "tamagui";
import { useUserContext } from "@/provider/UserContext";
import { gql, useQuery } from "@apollo/client";
import { View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { useNavigation } from "@react-navigation/native";
import { TypeTrashMaterial } from "@/MockData/types";
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

const storeProfile = (props: Props) => {
  const headerHeight = useHeaderHeight();
  const router = useRouter();
  const { signOut } = useAuth();
  const { dbUser, authUser }: any = useUserContext();
  const [info, setInfo] = useState(dbUser);

  const { data, loading, refetch, error } = useQuery(getMaterialQuery, {
    variables: { auth_id: authUser?.id },
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

  return (
    <ScrollView style={{ flex: 1 }}>
      <Carousel img={MockImg} />
      <Stack pb={"$14"} pt={"$8"} f={1}>
        <Stack flexDirection="column" gap={"$5"}>
          <ButtonStore
            title="แก้ไขรูปร้านค้า"
            func={() => router.push("/editImageStore")}
          />
          {/* <View>
            {materialData.map((item: any, i: any) => (
              <Text key={i}>
                {item.materialName} {item.receive}
              </Text>
            ))}
          </View> */}
          <StoreInfo info={info} />
          {/* --------------------------------------------------- */}
          <DialogEditStoreInfo info={info} setInfo={setInfo} />
          {/* --------------------------------------------------- */}
          <YStack ai={"center"} space={"$4"}>
            <MaterialDropDown data={materialData} />
            {/* <Text>{JSON.stringify(materialData)}</Text> */}
            <ButtonStore
              title="แก้ไขวัสดุที่รับ"
              func={() =>
                router.push(`/(store)/editMaterialStore/${authUser?.id}`)
              }
            />
          </YStack>

          <ButtonStore title="ประวัติการซื้อ" />
          <ButtonStore title="ออกจากระบบ" func={() => signOut()} />
        </Stack>
      </Stack>
    </ScrollView>
  );
};

export default storeProfile;

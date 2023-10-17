import Carousel from "@/components/Carousel";
import React from "react";
// import { ScrollView } from "react-native-virtualized-view";
import { MockImg, MockTrashMaterial } from "@/MockData/data";
import ButtonStore from "@/components/ButtonStore";
import DialogEditStoreInfo from "@/components/DialogEditStoreInfo";
import MaterialDropDown from "@/components/MaterialDropDown";
import StoreInfo from "@/components/StoreInfo";
import { useAuth } from "@clerk/clerk-expo";
import { useHeaderHeight } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-virtualized-view";
import { Stack, YStack, Text } from "tamagui";
import { useUserContext } from "@/provider/UserContext";
import { gql, useQuery } from "@apollo/client";
import { View } from "react-native";
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

const storeProfile = (props: Props) => {
  const headerHeight = useHeaderHeight();
  const router = useRouter();
  const { signOut } = useAuth();
  const { dbUser, authUser }: any = useUserContext();

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
  if (error) return <Text>Something went wrong</Text>;

  return (
    <ScrollView style={{ flex: 1, paddingTop: headerHeight }}>
      <Carousel img={MockImg} />
      <Stack pb={"$14"} pt={"$8"} f={1}>
        <Stack flexDirection="column" gap={"$5"}>
          <ButtonStore
            title="แก้ไขรูปร้านค้า"
            func={() => router.push("/editImageStore")}
          />
          {/* <Text>
            {JSON.stringify(
              JSON.parse(
                data.usersUsingStore_auth_id_fkey.store[0].store_detail
              )
            )}
          </Text> */}
          <View>
            {JSON.parse(
              data.usersUsingStore_auth_id_fkey.store[0].store_detail
            ).map((item: any) => (
              <Text>{item.materialName}</Text>
            ))}
          </View>
          <StoreInfo info={dbUser} />
          {/* --------------------------------------------------- */}
          <DialogEditStoreInfo info={dbUser} />
          {/* --------------------------------------------------- */}
          <YStack ai={"center"} space={"$4"}>
            <MaterialDropDown data={MockTrashMaterial} />
            <ButtonStore
              title="แก้ไขวัสดุที่รับ"
              func={() => router.push("/editMaterialStore")}
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

import Carousel from "@/components/Carousel";
import React from "react";
// import { ScrollView } from "react-native-virtualized-view";
import { MockImg, MockTrashMaterial, Mockstore } from "@/MockData/data";
import ButtonStore from "@/components/ButtonStore";
import DialogEditStoreInfo from "@/components/DialogEditStoreInfo";
import MaterialDropDown from "@/components/MaterialDropDown";
import StoreInfo from "@/components/StoreInfo";
import { useAuth } from "@clerk/clerk-expo";
import { useHeaderHeight } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-virtualized-view";
import { Stack, YStack } from "tamagui";
type Props = {};

const storeProfile = (props: Props) => {
  const headerHeight = useHeaderHeight();
  const router = useRouter();
  const { signOut } = useAuth();

  // console.log(headerHeight);

  return (
    <ScrollView style={{ flex: 1, paddingTop: headerHeight }}>
      <Carousel img={MockImg} />
      <Stack pb={"$14"} pt={"$8"} f={1}>
        <Stack flexDirection="column" gap={"$5"}>
          <ButtonStore
            title="แก้ไขรูปร้านค้า"
            func={() => router.push("/editImageStore")}
          />
          <StoreInfo info={Mockstore} />
          {/* --------------------------------------------------- */}
          <DialogEditStoreInfo info={Mockstore} />
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

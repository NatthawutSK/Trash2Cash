import React from "react";
import Carousel from "@/components/Carousel";
// import { ScrollView } from "react-native-virtualized-view";
import { useHeaderHeight } from "@react-navigation/elements";
import {
  Button,
  H4,
  Separator,
  Stack,
  Text,
  XStack,
  YStack,
  Adapt,
  Dialog,
  Fieldset,
  Input,
  Label,
  Sheet,
  Unspaced,
  TextArea,
} from "tamagui";
import { colors } from "@/constants/Colors";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { FontAwesome5 } from "@expo/vector-icons";
import { Store, Phone, X } from "@tamagui/lucide-icons";
import StoreInfo from "@/components/StoreInfo";
import ButtonStore from "@/components/ButtonStore";
import SelectDemo from "@/components/SelectDemo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DialogEditStoreInfo from "@/components/DialogEditStoreInfo";
import { MockImg, MockTrashMaterial, Mockstore } from "@/MockData/data";
import MaterialDropDown from "@/components/MaterialDropDown";
import { useRouter } from "expo-router";
type Props = {};

const storeProfile = (props: Props) => {
  const headerHeight = useHeaderHeight();
  const router = useRouter();

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
        </Stack>
      </Stack>
    </ScrollView>
  );
};

export default storeProfile;

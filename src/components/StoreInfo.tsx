import { View, Text, Platform, Linking, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "@/constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Store, Phone, Map } from "@tamagui/lucide-icons";
import { YStack, H4, XStack, Separator } from "tamagui";
import { TypeStore } from "@/MockData/types";

type Props = {
  info: TypeStore;
};

const StoreInfo = ({ info }: Props) => {
  const makePhoneCall = (phone: any) => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = `tel:${phone}`;
    } else {
      phoneNumber = `telprompt:${phone}`;
    }

    Linking.openURL(phoneNumber);
  };
  return (
    <YStack ai={"center"}>
      <View
        className="w-11/12  h-auto"
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          borderColor: colors.green4,
          borderWidth: 1,
          padding: 15,
        }}
      >
        <YStack>
          <H4 className="font-bold">{info?.user_name}</H4>
          <XStack ai={"center"} space={8}>
            <Store size={30} color={colors.green4} />
            <Text>ร้านรับซื้อ</Text>
          </XStack>
          <Separator borderColor={colors.green4} marginVertical={10} />
          <XStack ai={"center"} space={8}>
            <Phone size={30} color={colors.green4} />
            <TouchableOpacity onPress={() => makePhoneCall(info?.phone_number)}>
              <Text className="underline">{info.phone_number}</Text>
            </TouchableOpacity>
          </XStack>
          <Separator borderColor={colors.green4} marginVertical={10} />
          <XStack ai={"center"} space={8}>
            <FontAwesome5 name="line" size={30} color={colors.green4} />
            <Text>{info?.line_id}</Text>
          </XStack>
          <Separator borderColor={colors.green4} marginVertical={10} />
          <XStack ai={"center"} space={8} pr={30}>
            <Map size={30} color={colors.green4} />
            <Text>{info?.address}</Text>
          </XStack>
        </YStack>
      </View>
    </YStack>
  );
};

export default StoreInfo;

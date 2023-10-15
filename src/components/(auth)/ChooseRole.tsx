import { MySafeAreaView } from "@/components/MySafeAreaView";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Form, H4, Stack, Text, XStack } from "tamagui";
import FormSeller from "./FormSeller";

type Props = {};

const chooseRole = (props: Props) => {
  //   const router = useRouter();
  const [checkRole, setCheckRole] = useState("role");
  return (
    <>
      {checkRole === "role" ? (
        <View style={{ flex: 1, justifyContent: "center", gap: 20 }}>
          <H4 ta={"center"} className="font-black text-2xl">
            คุณเป็นใคร ?
          </H4>
          <XStack ai={"center"} jc={"center"} space={"$6"}>
            <Button
              size={"$6"}
              color={"$green1Light"}
              bg={"$green10Light"}
              onPress={() => setCheckRole("store")}
            >
              ร้านรับซื้อ
            </Button>
            <Button
              size={"$6"}
              color={"$green1Light"}
              bg={"$green10Light"}
              onPress={() => setCheckRole("seller")}
            >
              คนขาย
            </Button>
          </XStack>
        </View>
      ) : checkRole === "seller" ? (
        <FormSeller />
      ) : checkRole === "store" ? (
        <FormSeller />
      ) : null}
    </>
  );
};

export default chooseRole;

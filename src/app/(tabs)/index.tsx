import { StyleSheet } from "react-native";

import SwitchDemo from "@/components/SwitchDemo";
import { View } from "@/components/Themed";
import {
  Button,
  Circle,
  H4,
  Image,
  ScrollView,
  Square,
  Stack,
  Text,
  XStack,
  YStack,
} from "tamagui";
import { Link, useRouter } from "expo-router";
import MapViewComponent from "@/components/MapComponent";
import MiniMap from "@/components/MiniMap";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DialogDemo from "@/components/DialogDemo";

export default function home() {
  const router = useRouter();
  return (
    <ScrollView bg={"$green5Light"} f={1} pt={"$11"}>
      {/* <DialogDemo /> */}
      {/* <Circle w={"100%"} h={"60%"} bg={"$green10Light"} /> */}
      {/* <Button onPress={() => router.push("/(auth)/login")}>go to loggin</Button> */}
      {/* <Button onPress={() => router.push("/FormApprove")}>go to 3rd</Button> */}
      <Stack space={"$8"} pb={"$8"} pt={"$8"}>
        {/* <Text ta={"center"} mt={"$4"} className="text-xl font-bold ">
          Trash2Cash
        </Text> */}
        <Stack space={"$4"}>
          <View
            style={{
              alignSelf: "center",
              width: "90%",
              height: 250,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <MiniMap />
          </View>
          <Stack jc={"center"} ai={"center"}>
            <Button
              w={"90%"}
              onPress={() => router.push("/(map)/nearbyRanking")}
            >
              <Text fos={"$5"} className="font-bold" color={"$green10Light"}>
                อันดับร้านใกล้ฉัน
              </Text>
            </Button>
          </Stack>
        </Stack>

        {/* <Image source={require("../../../assets/images/co2.png")} /> */}
        {/* <Button
          alignSelf="center"
          size="$6"
          onPress={() => router.push("/FormApprove")}
        >
          go to form approve
        </Button> */}

        {/* <Link href={"/(thirds)/history"} asChild> */}
        {/* <Button


        alignSelf="center"
        size="$6"
        onPress={() => router.push("/(thirds)/history")}
      >
        go to admin Approve
      </Button> */}
        {/* </Link> */}
        {/* <Button
          alignSelf="center"
          size="$6"
          onPress={() => router.push("/formStore")}
        >
          go to form store
        </Button>
        <Button
          alignSelf="center"
          size="$6"
          onPress={() => router.push("/formSeller")}
        >
          go to form seller
        </Button>
        <Button
          alignSelf="center"
          size="$6"
          onPress={() => router.push("/(admin)/adminApprove")}
        >
          Approve ADmin
        </Button>
        <Button
          alignSelf="center"
          size="$6"
          onPress={() => router.push("/FormApprove")}
        >
          Form Approve
        </Button> */}
        {/* <Button
        alignSelf="center"
        size="$6"
        onPress={() => router.push("/detailStore/66")}
      >
        go to detail Store
      </Button>
      <Button
        alignSelf="center"
        size="$6"
        onPress={() => router.push("/detailStore/66")}
      >
        go to detail Store
      </Button> */}

        {/* </Link> */}
        {/* <SwitchDemo /> */}
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      </Stack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

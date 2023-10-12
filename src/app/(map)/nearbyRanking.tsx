import { StyleSheet, Image } from "react-native";

import { Text, View } from "@/components/Themed";
import { router } from "expo-router";
import { Button, ScrollView } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import FlatListNearbyStore from "@/components/FlatListNearbyStore";
import { Stack, XStack, YStack } from "tamagui";

type Props = {};
const DATA = [
  {
    img: "https://picsum.photos/200",
    name: "ร้าน รี",
    mat: [
      "wine-bottle",
      "box",
      "file",
      "glass-whiskey",
      "file",
      "glass-whiskey",
    ],
    transport: ["car", "Warehouse"],
  },
  {
    img: "https://picsum.photos/203",
    name: "ร้าน รีไซ",
    mat: ["box", "glass-whiskey"],
    transport: ["car", "Warehouse"],
  },
  {
    img: "https://picsum.photos/204",
    name: "ร้าน รีเคิลเคิลเคิลเคิลเคิลเติลเต",
    mat: ["glass-whiskey"],
    transport: ["car", "Warehouse"],
  },
  {
    img: "https://picsum.photos/205",
    name: "ร้าน รี",
    mat: ["wine-bottle", "box", "file", "glass-whiskey"],
    transport: ["car", "Warehouse"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
    transport: ["car", "Warehouse"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
    transport: ["car", "Warehouse"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
    transport: ["car", "Warehouse"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
    transport: ["car", "Warehouse"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
    transport: ["car", "Warehouse"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ 10",
    mat: ["file", "glass-whiskey"],
    transport: ["car", "Warehouse"],
  },
];

export default function nearbyRanking() {
  return (
    <>
    <View className="bg-white h-full w-full">
			{/* <StatusBar style="light" /> */}
			<Image
				className="h-full w-full absolute"
				source={require("../../../assets/images/background4.png")}
			/>
    <Stack p={15} justifyContent="center">

      <YStack mt={20} p={20} h={"97%"} className="bg-transparent">
        <FlatListNearbyStore data={DATA} />
      <Button className="bg-inherit bg-[#61876e] " onPress={() => router.push("/(map)/fullMap")} p={10} mt={20} color={"$yellow1"} >
          Go Full Map
        </Button>
      </YStack>

    </Stack>
    </View>
      {/* <LocationRankingComponent /> */}
    </>
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

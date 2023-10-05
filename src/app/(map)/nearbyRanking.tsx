import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { router } from "expo-router";
import { Button } from "tamagui";
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
  },
  {
    img: "https://picsum.photos/203",
    name: "ร้าน รีไซ",
    mat: ["box", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/204",
    name: "ร้าน รีเคิลเคิลเคิลเคิลเคิลเติลเต",
    mat: ["glass-whiskey"],
  },
  {
    img: "https://picsum.photos/205",
    name: "ร้าน รี",
    mat: ["wine-bottle", "box", "file", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/206",
    name: "Peter",
    mat: ["file", "glass-whiskey"],
  },
];

export default function nearbyRanking() {
  return (
    <Stack ac={"center"} h={"95%"}>
      <FlatListNearbyStore data={DATA} />

      <View>
        <Button onPress={() => router.push("/(map)/fullMap")}>
          Go Full Map
        </Button>
      </View>
      {/* <LocationRankingComponent /> */}
    </Stack>
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

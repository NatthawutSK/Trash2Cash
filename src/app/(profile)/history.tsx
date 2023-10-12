import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
// import SearchBar from "@/components/SearchBar";
import DetailPurchaseComponent from "@/components/DetailPurchaseComponent";
import FlatListHistory from "@/components/FlatListHistory";
import { Stack } from "tamagui";

type Props = {};
const DATA = [
  {
    img: "https://picsum.photos/200",
    name: "ร้าน รี",
    date: "01/02/2575",
    info: [
      ["box", "1"],
      ["bottle", "2"]
  ],
  },
  {
    img: "https://picsum.photos/203",
    name: "ร้าน รีไซ",
    date: "01/02/2575",
    info: [
      ["box", "1"],
      ["bottle", "2"]
  ],
  },
  {
    img: "https://picsum.photos/204",
    name: "ร้าน รีเคิลเคิลเคิลเคิลเคิลเติลเต",
    date: "01/02/2575",
    info: [
      ["box", "1"],
      ["bottle", "2"]
  ],
  },


];


export default function history() {
  return (
    <Stack ac={"center"} h={"95%"}>

        <View>
          {/* <Text style={styles.title}>Tab One</Text>
      <Button alignSelf="center" size="$6">
        Large
      </Button>
      <SearchBar placeholder={""} onSearch={function (text: string): void {
        throw new Error("Function not implemented.");
      } } />
      <SwitchDemo /> */}
          {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
          <FlatListHistory data={DATA} />
        </View>
    </Stack>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 15,
    width: "100%",
  },
});

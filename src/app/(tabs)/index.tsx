import { FlatList, Image, Pressable, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Button, H4, ScrollView, Stack, Text, XStack } from "tamagui";
// import { FontAwesome } from "@expo/vector-icons";
import { TrashMaterial, imgIcon } from "@/MockData/data";
import { getProperty } from "@/utils/util";
import { useHeaderHeight } from "@react-navigation/elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import MiniMap from "@/components/MiniMap";
const BoxTrash = (item: any) => {
  return (
    <Pressable onPress={() => router.push("/")}>
      <View
        className="h-52 rounded-lg w-52  items-center flex justify-center"
        style={{ backgroundColor: colors.green3 }}
      >
        <Image className="w-24 h-24" source={getProperty(imgIcon, item.img)} />
        <Text ta={"center"} mt={"$3"} fontSize={"$5"} className="text-white">
          {item.materialName}
        </Text>
      </View>
    </Pressable>
  );
};

const router = useRouter();
export default function home() {
  // const headerHeight = useHeaderHeight();
  return (
    <ScrollView bg={"$green5Light"} f={1}>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      {/* <SelectTrashMaterial /> */}
      {/* <DialogDemo /> */}
      {/* <Circle w={"100%"} h={"60%"} bg={"$green10Light"} /> */}
      {/* <Button onPress={() => router.push("/mockFormStore")}>
        go to Form Store
      </Button>
      <Button onPress={() => router.push("/(tabs)/storeProfile")}>
        go to Store
      </Button> */}

      <Stack space={"$8"} pb={"$8"}>
        <Image
          className="h-full w-full absolute"
          source={require("../../../assets/images/background4.png")}
        />
        {/* <Text ta={"center"} mt={"$4"} className="text-xl font-bold ">
          Trash2Cash
        </Text> */}
        <Stack space={"$4"}>
          {/* <View
            style={{
              alignSelf: "center",
              width: "90%",
              height: 250,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <MiniMap />
          </View> */}
          <Stack jc={"center"} ai={"center"}>
            <Button
              w={"90%"}
              onPress={() => router.push("/(map)/nearbyRanking")}
              style={{ backgroundColor: colors.green4 }}
            >
              <Text
                style={{ fontFamily: "Kanit" }}
                fos={"$5"}
                className="font-bold"
                color={"$green1Light"}
              >
                อันดับร้านใกล้ฉัน
              </Text>
            </Button>
          </Stack>

          <XStack
            alignItems="center"
            jc={"space-between"}
            marginHorizontal={"$4"}
          >
            <H4 className="font-bold">วัสดุรีไซเคิล</H4>
            <TouchableOpacity onPress={() => router.push("/search")}>
              <Text>ดูทั้งหมด</Text>
            </TouchableOpacity>
          </XStack>
          <FlatList
            contentContainerStyle={{ gap: 20, paddingHorizontal: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={TrashMaterial}
            renderItem={({ item }) => BoxTrash(item)}
          />
        </Stack>
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

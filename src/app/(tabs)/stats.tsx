import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { H4, Image, Square, Stack, Text, XStack, YStack } from "tamagui";
// import co2 from "../../../assets/images/co2.png";

export default function TabTwoScreen() {
  return (
    <Stack jc={"center"} ai={"center"} f={1} space={"$5"}>
      <H4 fos={20}>สถิติรวม</H4>
      {/* <Text>กู้โลก</Text> */}

      <XStack space={"$4"}>
        <YStack space="$4">
          <Square w={160} h={180} br={20} backgroundColor="$gray8Light">
            <YStack space={"$3"}>
              <Text>ลด co2 ไปแล้ว</Text>
              <Text ta={"center"} fos={"$5"}>
                90709{"     "}
                <Text fos={"$2"} color={"$gray10Light"}>
                  kCO2e
                </Text>
              </Text>
              <MaterialCommunityIcons
                name="molecule-co2"
                size={48}
                color="black"
              />
              {/* <Image source={{ uri: co2 }} /> */}
            </YStack>
          </Square>
          <Square w={160} h={130} br={20} bg={"$gray8Light"}>
            <YStack space={"$1"}>
              <Text>เทียบเท่าปลูกต้นไม้</Text>
              <Text ta={"center"} fos={"$5"}>
                9070{"     "}
                <Text fos={"$2"} color={"$gray10Light"}>
                  ต้น
                </Text>
              </Text>
              <MaterialCommunityIcons
                name="molecule-co2"
                size={48}
                color="black"
              />
            </YStack>
          </Square>
        </YStack>

        <YStack space={"$4"}>
          <Square w={140} h={130} br={20} bg={"$gray8Light"}>
            <YStack space={"$2"}>
              <Text>ลดขยะ</Text>
              <Text ta={"center"} fos={"$5"}>
                9070{"     "}
                <Text fos={"$2"} color={"$gray10Light"}>
                  กก.
                </Text>
              </Text>
              <MaterialCommunityIcons
                name="molecule-co2"
                size={48}
                color="black"
              />
            </YStack>
          </Square>
          <Square w={140} h={180} br={20} bg={"$gray8Light"}>
            <YStack space={"$2"}>
              <Text>ผู้เข้าร่วมช่วยโลก</Text>
              <Text ta={"center"} fos={"$5"}>
                922{"     "}
                <Text fos={"$2"} color={"$gray10Light"}>
                  คน
                </Text>
              </Text>
              <MaterialCommunityIcons
                name="molecule-co2"
                size={48}
                color="black"
              />
            </YStack>
          </Square>
        </YStack>
      </XStack>
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

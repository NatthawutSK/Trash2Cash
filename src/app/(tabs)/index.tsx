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

export default function home() {
  const router = useRouter();
  return (
    <ScrollView bg={"$green5Light"} f={1}>
      {/* <Circle w={"100%"} h={"60%"} bg={"$green10Light"} /> */}
      <Button onPress={() => router.push("/(auth)/login")}>go to loggin</Button>
      {/* <Button onPress={() => router.push("/FormApprove")}>go to 3rd</Button> */}
      <Stack space={"$8"} pb={"$8"} pt={"$8"}>
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
            >
              <Text fos={"$5"} className="font-bold" color={"$green10Light"}>
                อันดับร้านใกล้ฉัน
              </Text>
            </Button>
          </Stack>
        </Stack>

        <Text ta={"center"} className="text-xl font-bold" color={"$green8Dark"}>
          สถิติรวม
        </Text>

        <Stack jc={"center"} ai={"center"} space={"$5"}>
          {/* <H4 fos={20}>สถิติรวม</H4> */}
          {/* <Text>กู้โลก</Text> */}

          <XStack space={"$4"}>
            <YStack space="$4">
              <Square w={180} h={200} br={20} backgroundColor="$green9Dark">
                <YStack space={"$3"}>
                  <Text fos={"$6"} color={"$red1Light"} className="font-bold">
                    ลด co2 ไปแล้ว
                  </Text>
                  <Text
                    color={"$red1Light"}
                    className="font-bold"
                    fos={"$8"}
                    ta={"center"}
                  >
                    90709{"     "}
                    <Text fos={"$5"} color={"$gray5Light"}>
                      kCO2e
                    </Text>
                  </Text>

                  <MaterialCommunityIcons
                    name="molecule-co2"
                    size={48}
                    color="white"
                  />
                  {/* <Image source={{ uri: co2 }} /> */}
                </YStack>
              </Square>
              <Square w={180} h={150} br={20} bg={"$green9Dark"}>
                <YStack space={"$2"} mt={"$3"}>
                  <Text fos={"$6"} color={"$red1Light"} className="font-bold">
                    เทียบเท่าปลูกต้นไม้
                  </Text>
                  <Text
                    color={"$red1Light"}
                    ta={"center"}
                    fos={"$8"}
                    className="font-bold"
                  >
                    9070{"     "}
                    <Text fos={"$5"} color={"$gray5Light"}>
                      ต้น
                    </Text>
                  </Text>
                  <MaterialCommunityIcons
                    name="tree-outline"
                    size={48}
                    color="white"
                  />
                </YStack>
              </Square>
            </YStack>

            <YStack space={"$4"}>
              <Square w={160} h={150} br={20} bg={"$green9Dark"}>
                <YStack space={"$2"}>
                  <Text fos={"$6"} color={"$red1Light"} className="font-bold">
                    ลดขยะ
                  </Text>
                  <Text fos={"$8"} color={"$red1Light"} className="font-bold">
                    9070{"     "}
                    <Text fos={"$5"} color={"$gray5Light"}>
                      กก.
                    </Text>
                  </Text>
                  <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={48}
                    color="white"
                  />
                </YStack>
              </Square>
              <Square w={160} h={200} br={20} bg={"$green9Dark"}>
                <YStack space={"$4"}>
                  <Text fos={"$6"} color={"$red1Light"} className="font-bold">
                    ผู้ร่วมช่วยโลก
                  </Text>
                  <Text
                    fos={"$8"}
                    color={"$red1Light"}
                    ta={"center"}
                    className="font-bold"
                  >
                    922{"     "}
                    <Text fos={"$5"} color={"$gray5Light"}>
                      คน
                    </Text>
                  </Text>
                  <Stack ml={"$3"}>
                    <MaterialCommunityIcons
                      name="account-group-outline"
                      size={48}
                      color="white"
                    />
                  </Stack>
                </YStack>
              </Square>
            </YStack>
          </XStack>
        </Stack>

        {/* <Image source={require("../../../assets/images/co2.png")} /> */}
        <Button
          alignSelf="center"
          size="$6"
          onPress={() => router.push("/FormApprove")}
        >
          go to form approve
        </Button>
        <Button
          alignSelf="center"
          size="$6"
          onPress={() => router.push("/(admin)/adminApprove")}
        >
          only for admin
        </Button>

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

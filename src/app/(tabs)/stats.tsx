import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { XStack, YStack, Square, Text, Stack, View } from "tamagui";
import { Trash2, TreePine } from "@tamagui/lucide-icons";

type Props = {};

const stats = (props: Props) => {
  return (
    <Stack f={1} ai={"center"} jc={"center"}>
      <Text
        pb={"$10"}
        ta={"center"}
        className="text-xl font-bold"
        color={"$green8Dark"}
      >
        สถิติรวม
      </Text>

      <Stack jc={"center"} ai={"center"} space={"$5"}>
        {/* <H4 fos={20}>สถิติรวม</H4> */}
        {/* <Text>กู้โลก</Text> */}

        <XStack space={"$4"}>
          <YStack space="$4">
            <Square w={180} h={200} br={20} backgroundColor="$green9Dark">
              <YStack space={"$3"}>
                <Text fos={"$4"} color={"$red1Light"} className="font-bold">
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
                <Text fos={"$4"} color={"$red1Light"} className="font-bold">
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
                <TreePine size={45} color="white" />
              </YStack>
            </Square>
          </YStack>

          <YStack space={"$4"}>
            <Square w={160} h={150} br={20} bg={"$green9Dark"}>
              <YStack space={"$2"}>
                <Text fos={"$4"} color={"$red1Light"} className="font-bold">
                  ลดขยะ
                </Text>
                <Text fos={"$8"} color={"$red1Light"} className="font-bold">
                  9070{"     "}
                  <Text fos={"$5"} color={"$gray5Light"}>
                    กก.
                  </Text>
                </Text>
                <Trash2 size={40} color="white" />
              </YStack>
            </Square>
            <Square w={160} h={200} br={20} bg={"$green9Dark"}>
              <YStack space={"$4"}>
                <Text fos={"$4"} color={"$red1Light"} className="font-bold">
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
    </Stack>
  );
};

export default stats;

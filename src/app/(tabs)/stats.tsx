import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { XStack, YStack, Square, Text, Stack, View, H4 } from "tamagui";
import { Trash2, TreePine } from "@tamagui/lucide-icons";
import { gql, useQuery } from "@apollo/client";
import Spinner from "react-native-loading-spinner-overlay";
import { Image } from "react-native";
import { colors } from "@/constants/Colors";
type Props = {};

const ScoreAllQuery = gql`
  query MyQuery {
    scoreAll {
      all_user
      score_carbon
      score_trash
      score_tree
    }
  }
`;

const stats = (props: Props) => {
  const { data, loading, refetch } = useQuery(ScoreAllQuery);
  if (loading) {
    return (
      <Spinner
        animation="fade"
        visible={true}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
      />
    );
  }
  // console.log(data?.scoreAll);

  return (
    <Stack ai={"center"} jc={"center"} f={1} bg={"$blue1Light"}>
      <Image
        className="h-full w-full absolute"
        source={require("../../../assets/images/background6.png")}
      />
      <H4
        pb={"$10"}
        ta={"center"}
        className="text-2xl font-bold"
        color={"$green1Light"}
      >
        สถิติรวม
      </H4>

      <Stack jc={"center"} ai={"center"} space={"$5"}>
        {/* <H4 fos={20}>สถิติรวม</H4> */}
        {/* <Text>กู้โลก</Text> */}

        <XStack space={"$4"}>
          <YStack space="$4">
            <Square w={180} h={200} br={20} backgroundColor="$green1Light">
              <YStack space={"$3"}>
                <Text fos={"$4"} color={colors.green4} className="font-bold">
                  ลด co2 ไปแล้ว
                </Text>
                <Text
                  color={colors.green4}
                  className="font-bold"
                  fos={"$8"}
                  ta={"center"}
                >
                  {data?.scoreAll.score_carbon}
                  {"     "}
                  <Text fos={"$5"} color={colors.green4}>
                    kCO2e
                  </Text>
                </Text>

                <MaterialCommunityIcons
                  name="molecule-co2"
                  size={48}
                  color={colors.green4}
                />
                {/* <Image source={{ uri: co2 }} /> */}
              </YStack>
            </Square>
            <Square w={180} h={150} br={20} backgroundColor="$green1Light">
              <YStack space={"$2"} mt={"$3"}>
                <Text fos={"$4"} color={colors.green4} className="font-bold">
                  เทียบเท่าปลูกต้นไม้
                </Text>
                <Text
                  color={colors.green4}
                  ta={"center"}
                  fos={"$8"}
                  className="font-bold"
                >
                  {data?.scoreAll.score_tree}
                  {"     "}
                  <Text fos={"$5"} color={colors.green4}>
                    ต้น
                  </Text>
                </Text>
                <TreePine size={45} color={colors.green4} />
              </YStack>
            </Square>
          </YStack>

          <YStack space={"$4"}>
            <Square w={160} h={150} br={20} backgroundColor="$green1Light">
              <YStack space={"$2"}>
                <Text fos={"$4"} color={colors.green4} className="font-bold">
                  ลดขยะ
                </Text>
                <Text fos={"$8"} color={colors.green4} className="font-bold">
                  {data?.scoreAll.score_trash}
                  {"     "}
                  <Text fos={"$5"} color={colors.green4}>
                    กก.
                  </Text>
                </Text>
                <Trash2 size={40} color={colors.green4} />
              </YStack>
            </Square>
            <Square w={160} h={200} br={20} backgroundColor="$green1Light">
              <YStack space={"$4"}>
                <Text fos={"$4"} color={colors.green4} className="font-bold">
                  ผู้ร่วมช่วยโลก
                </Text>
                <Text
                  fos={"$8"}
                  color={colors.green4}
                  ta={"center"}
                  className="font-bold"
                >
                  {data?.scoreAll.all_user}
                  {"     "}
                  <Text fos={"$5"} color={colors.green4}>
                    คน
                  </Text>
                </Text>
                <Stack ml={"$3"}>
                  <MaterialCommunityIcons
                    name="account-group-outline"
                    size={48}
                    color={colors.green4}
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

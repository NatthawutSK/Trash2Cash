import { Pressable, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Star, Store, Menu } from "@tamagui/lucide-icons";
import {
  YStack,
  XStack,
  Avatar,
  Separator,
  Text,
  Stack,
  Button,
} from "tamagui";
import { Link, useRouter } from "expo-router";

export type HistoryProps = {
  img: string;
  name: string;
  date: string;
  info: string[][];
};

const HistoryItem = ({ name, date, infoOrder }: any) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const router = useRouter();
  return (
    //   <Link href="/detailStore/66" asChild>
    <YStack flex={1}>
      {/* <Text>
        ggg{name} {date} {JSON.stringify(infoOrder)}
      </Text> */}
      <XStack
        br={20}
        alignItems="center"
        py={20}
        px={20}
        mb={6}
        bc={"$green2Light"}
        borderWidth={2}
        borderColor={"$green8Dark"}
        jc={"space-between"}
      >
        <XStack ai={"center"} ac={"center"} space={"$4"} w={"50%"} pb={"$3"}>
          <Avatar size="$6" radiused>
            <Avatar.Image source={{ uri: "https://picsum.photos/203" }} />
            <Avatar.Fallback bc="red" />
          </Avatar>
          <YStack space={"$1"}>
            <Text fow={"800"}>{name}</Text>
            <Text fow={"800"}>Date : {date}</Text>
          </YStack>
        </XStack>
        <YStack ai={"flex-end"} space={"$1"} w={"30%"}>
          <Button onPress={toggleDetails}>
            <Menu size={24} />
          </Button>
        </YStack>
      </XStack>
      {showDetails && (
        <Stack
          br={20}
          py={30}
          pt={40}
          px={50}
          mb={15}
          mt={-30}
          zIndex={-1}
          bc={"$green1Light"}
          borderWidth={2}
          borderColor={"$green8Dark"}
        >
          <XStack jc={"space-between"}>
            <Text>ประเภท</Text>
            <Text>กิโลกรัม</Text>
          </XStack>
          <Separator marginVertical={15} />
          {infoOrder.map((x: any, index: any) => (
            <XStack jc={"space-between"} px={5} key={index}>
              <YStack>
                <Text fow={"800"}>{x.name}</Text>
              </YStack>
              <XStack>
                <Text fow={"800"}>{x.weight}</Text>
              </XStack>
            </XStack>
          ))}
        </Stack>
      )}
    </YStack>

    //   </Link>
  );
};

export default HistoryItem;

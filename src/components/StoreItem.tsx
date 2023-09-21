import { Pressable, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Star, Store } from "@tamagui/lucide-icons";
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

export type StoreProps = { img: string; name: string; mat: string[] };

const StoreItem = ({ img, name, mat }: StoreProps) => {
  const router = useRouter();
  return (
    //   <Link href="/detailStore/66" asChild>
    <Pressable onPress={() => router.push("/detailStore/66")}>
      <YStack flex={1}>
        <XStack
          br={20}
          alignItems="center"
          py={10}
          px={20}
          bc={"$green8Light"}
          jc={"space-between"}
        >
          <XStack ai={"center"} ac={"center"} space={"$4"} w={"50%"}>
            <Avatar circular size="$6">
              <Avatar.Image src={img} />
              <Avatar.Fallback bc="red" />
            </Avatar>
            <YStack space={"$1"}>
              <Text fow={"800"} color={"white"}>
                {name}
              </Text>
              <Text>วัสดุที่รับ</Text>
              <XStack maw={"80%"} space={"$2"} fw={"wrap"}>
                {mat.map((m, i) => {
                  return <FontAwesome5 key={i} name={m} size={18} />;
                })}
              </XStack>
            </YStack>
          </XStack>
          <YStack ai={"flex-end"} space={"$1"} w={"30%"}>
            <Store size={24} />
            <Text fos={"$2"}>ระยะห่าง</Text>
            <Text>1.5 กม.</Text>
          </YStack>
        </XStack>
      </YStack>
    </Pressable>
    //   </Link>
  );
};

export default StoreItem;

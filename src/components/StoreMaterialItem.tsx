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

export type StoreMaterialProps = { img: string; name: string; mat: string[], transport: string[], price: number  };

const StoreMaterial = ({ img, name, mat, price, transport }: StoreMaterialProps) => {
  const router = useRouter();
  return (
    //   <Link href="/detailStore/66" asChild>
    <Pressable onPress={() => router.push(`/detailStore/66`)}>
      <YStack flex={1}>
        <XStack
          br={20}
          alignItems="center"
          py={10}
          px={20}
          bc={"$green2Light"}
          borderWidth={2}
          borderColor={"$green8Dark"}
          jc={"space-between"}
        >
          <XStack ai={"center"} ac={"center"} space={"$4"} w={"50%"}>
            <Avatar size="$5" radiused>
              <Avatar.Image src={img} />
              <Avatar.Fallback bc="red" />
            </Avatar>
            <YStack space={"$1"}>
              <Text fow={"800"} fontSize={"$1"}>
                {name}
         
              </Text>
              <Text>ราคาขั้นต่ำ : {price} ฿</Text>
            </YStack>
          </XStack>
          <YStack ai={"flex-end"} space={"$1"} w={"30%"}>
            <XStack space={"$2"}>

            {
                transport.map((x, index) => {
                    return <FontAwesome5 key={index} name={x} size={18} />;
                })
            }
            </XStack>
            {/* <Text>{transport[0]}</Text> */}
            <Text>1.5 กม.</Text>
          </YStack>
        </XStack>
      </YStack>
    </Pressable>
    //   </Link>
  );
};

export default StoreMaterial;

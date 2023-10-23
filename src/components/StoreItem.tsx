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
import { StoreNearbyType } from "@/types";
import { TouchableOpacity } from "react-native-gesture-handler";

// export type StoreProps = { img: string; name: string; mat: string[] };

const StoreItem = ({ user_name, distance, auth_id }: StoreNearbyType) => {
  const router = useRouter();
  return (
    //   <Link href="/detailStore/66" asChild>
    <>
      <TouchableOpacity onPress={() => router.push(`/detailStore/${auth_id}`)}>
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
              <Avatar size="$6" radiused>
                <Avatar.Image source={{ uri: "https://picsum.photos/200" }} />
                <Avatar.Fallback bc="red" />
              </Avatar>
              <YStack space={"$1"}>
                <Text fow={"800"}>{user_name}</Text>
                {/* <Text>วัสดุที่รับ</Text>
                <XStack maw={"80%"} space={"$2"} fw={"wrap"}>
                  {mat.map((m, i) => {
                    return <FontAwesome5 key={i} name={m} size={18} />;
                  })}
                </XStack> */}
              </YStack>
            </XStack>
            <YStack ai={"flex-end"} space={"$1"} w={"30%"}>
              <Store size={24} />
              <Text fos={"$2"}>ระยะห่าง</Text>
              <Text>
                {distance > 1000 ? distance / 1000 : distance}{" "}
                {distance > 1000 ? "กม." : "ม."}
              </Text>
            </YStack>
          </XStack>
        </YStack>
      </TouchableOpacity>
    </>
    //   </Link>
  );
};

export default StoreItem;

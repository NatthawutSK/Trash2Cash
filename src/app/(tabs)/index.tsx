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
import { gql, useQuery } from "@apollo/client";
const BoxTrash = (item: any) => {
  return (
    <Pressable onPress={() => router.push("/")}>
      <View
        className="h-52 rounded-lg w-52  items-center flex justify-center"
        style={{ backgroundColor: colors.green3 }}
      >
        <Image className="w-24 h-24" source={getProperty(imgIcon, item.img)} />
        <Text ta={"center"} mt={"$3"} fontSize={"$5"} className="text-white">
          {item.name}
        </Text>
      </View>
    </Pressable>
  );
};

const getUserQuery = gql`
  query MyQuery($authid: String!) {
    usersUsingusers_auth_user_key(auth_user: $authid) {
      address
      auth_user
      line_id
      phone_number
      roles
      user_name
    }
  }
`;

const router = useRouter();
export default function home() {
  // const {
  //   data,
  //   loading: isDbLoading,
  //   refetch,
  // } = useQuery(getUserQuery, {
  //   variables: { authid: "authla" },
  // });
  const headerHeight = useHeaderHeight();
  return (
    <ScrollView bg={"$green5Light"} f={1} pt={headerHeight}>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      {/* <SelectTrashMaterial /> */}
      {/* <DialogDemo /> */}
      {/* <Circle w={"100%"} h={"60%"} bg={"$green10Light"} /> */}
      {/* <Button onPress={() => router.push("/FormApprove")}>go to 3rd</Button> */}
      <Stack space={"$8"} pb={"$8"} pt={"$5"}>
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
              <Text fos={"$5"} className="font-bold" color={"$green1Light"}>
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

        {/* <Image source={require("../../../assets/images/co2.png")} /> */}
        {/* <Button
          alignSelf="center"
          size="$6"
          onPress={() => router.push("/FormApprove")}
        >
          go to form approve
        </Button> */}

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

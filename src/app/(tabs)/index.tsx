import { StyleSheet } from "react-native";

import SwitchDemo from "@/components/SwitchDemo";
import { View } from "@/components/Themed";
import { Button, Image, Text } from "tamagui";
import { Link, useRouter } from "expo-router";

export default function home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text className="text-xl ">Home</Text>
      {/* <Image source={require("../../../assets/images/co2.png")} /> */}
      <Button
        alignSelf="center"
        size="$6"
        onPress={() => router.push("/login")}
      >
        go to login
      </Button>
      {/* <Link href={`/detailStore/99`} asChild> */}
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
    </View>
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

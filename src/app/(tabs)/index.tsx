import { StyleSheet } from "react-native";

import SwitchDemo from "@/components/SwitchDemo";
import { Text, View } from "@/components/Themed";
import { Button, Image } from "tamagui";
import { useRouter } from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Image source={require("../../../assets/images/co2.png")} />
      <Button
        alignSelf="center"
        size="$6"
        onPress={() => router.push("/login")}
      >
        go to login
      </Button>

      <SwitchDemo />

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

import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import DialogDemo from "@/components/DialogDemo";
import SpinnerDemo from "@/components/SpinnerDemo";
import MapViewComponent from "@/components/MapComponent";
import MapRanking from "@/components/MapRanking";
import LocationRankingComponent from "@/components/LocationRankingComponent";
import { router } from "expo-router";
import { Button } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";

export default function nearbyRanking() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <Text style={styles.title}>Tab Four</Text> */}
          {/* <DialogDemo />
      <SpinnerDemo /> */}
          {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
          {/* <MapViewComponent /> */}
          <View>
            <MapRanking />
          </View>

          <View style={{ margin: "10%" }}>
            <Button onPress={() => router.push("/(map)/fullMap")}>
              Go Full Map
            </Button>
          </View>
          {/* <LocationRankingComponent /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
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

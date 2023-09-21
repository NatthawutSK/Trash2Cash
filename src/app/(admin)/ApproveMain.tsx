import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
// import { Text, View } from "@/components/Themed";
import DialogDemo from "@/components/DialogDemo";
import SpinnerDemo from "@/components/SpinnerDemo";
import MapViewComponent from "@/components/MapComponent";
import Colors from "@/constants/Colors";
import DetailTrashWantBuy from "@/components/DetailTrashWantBuy";
import LocationRankingComponent, {
  truncateText,
} from "@/components/LocationRankingComponent";
import { Button } from "tamagui";
import DetailApprove from "@/components/ApproveDetail";
import { router } from "expo-router";

export default function Fullmap() {
  return (
    <SafeAreaView style={{ backgroundColor: "#daffd6" }}>
      <ScrollView>
        <View style={{ padding: 20, margin: 15, backgroundColor: "white" }}>
          <View
            style={[
              styles.container,
              {
                alignItems: "flex-start",
              },
            ]}
          >
            <View style={[styles.container]}>
              <Text style={[styles.title]}>Sell Bottle</Text>
            </View>
            <View style={[]}>
              <Image
                source={require("../../../assets/images/op1.jpg")}
                style={{
                  width: 320,
                  height: 270,
                  marginTop: 20,
                  margin: 10,
                  alignItems: "center",
                }}
              />
            </View>
            <View style={styles.container}></View>
          </View>
          <View style={{ marginTop: 10 }}>
            <LocationRankingComponent />
            <View
              style={{
                padding: 20,
                paddingVertical: 40,
                backgroundColor: "#8ECDDD",
                margin: 15,
                flex: 0,
                flexDirection: "column",
                borderRadius: 12,
              }}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => {
                  router.push("/detailStore/99");
                }}
              >
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: "https://cdn.discordapp.com/attachments/1152653971895373864/1153608855062847508/image.png",
                  }}
                />
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: 15,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>
                    Name : {truncateText("พรี่รี่", 10)}
                  </Text>
                  <Text style={{ fontSize: 14 }}>
                    ID : {truncateText("8132783210983098132809312", 10)}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <DetailApprove />
          </View>
          <View style={[styles.container, { alignItems: "flex-end" }]}>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <Button
                style={{
                  color: "white",
                  marginRight: 10,
                  backgroundColor: "green",
                }}
                size="$3"
                theme="active"
                onPress={() => router.push("/(tabs)/")}
              >
                Approve
              </Button>
              <Button
                style={{ color: "white", backgroundColor: "red" }}
                size="$3"
                theme="active"
                onPress={() => router.push("/(tabs)/")}
              >
                Deny
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  tinyLogo: {
    width: 70,
    height: 70,
  },
});

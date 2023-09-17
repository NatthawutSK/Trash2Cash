import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
// import SearchBar from "@/components/SearchBar";
import DetailPurchaseComponent from "@/components/DetailPurchaseComponent";

export default function history() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <Text style={styles.title}>Tab One</Text>
      <Button alignSelf="center" size="$6">
        Large
      </Button>
      <SearchBar placeholder={""} onSearch={function (text: string): void {
        throw new Error("Function not implemented.");
      } } />
      <SwitchDemo /> */}
          {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
          <View>
            <DetailPurchaseComponent />
            <DetailPurchaseComponent />
            <DetailPurchaseComponent />
            <DetailPurchaseComponent />
            <DetailPurchaseComponent />
            <DetailPurchaseComponent />
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
    justifyContent: "center",
    height: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 15,
    width: "100%",
  },
});

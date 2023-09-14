import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import DialogDemo from "@/components/DialogDemo";
import SpinnerDemo from "@/components/SpinnerDemo";
import MapViewComponent from "@/components/MapComponent";
import { useEffect, useRef, useState } from "react";
import DetailTrashWantBuy from "@/components/DetailTrashWantBuy";
import TrashDetail from "@/components/DetailTrash";

// const images = [
//   { id: "1", source: require("../../../assets/images/t.jpg") },
//   { id: "2", source: require("../../../assets/images/op1.jpg") },
//   { id: "3", source: require("../../../assets/images/op4.jpg") },
//   // Add more images as needed
// ];

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <TrashDetail />

       <DetailTrashWantBuy/>
       <DetailTrashWantBuy/>
       <DetailTrashWantBuy/>
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
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  circlemini: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginLeft: 10,
    backgroundColor: "red",
  },
  hr: {
    borderBottomColor: "white", // Change color as needed
    borderBottomWidth: 1, // Change thickness as needed
    marginVertical: 10,
    margin: 40, // Adjust spacing as needed
  },
  miniimage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
  },
});

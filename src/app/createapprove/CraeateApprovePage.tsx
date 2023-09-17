import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Text,
    Image,
  } from "react-native";
  
  // import { Text, View } from "@/components/Themed";
  import Colors from "@/constants/Colors";
  import { Button } from "tamagui";
import ApproveBuyer from "@/components/CreateApproveBuyer";
  
  export default function Fullmap() {
    return (
      <SafeAreaView style={{backgroundColor: "#daffd6"}}>
        <ScrollView>
        <ApproveBuyer />
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
  });
  
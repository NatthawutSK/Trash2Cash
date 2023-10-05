import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "tamagui";
import { router } from "expo-router";

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
};
const LocationRankingComponent = () => {
  return (
    <View
      style={{
        padding: 20,
        paddingVertical: 40,
        margin: 15,
        flex: 0,
        flexDirection: "column",
        borderRadius: 12,
      }}
      className="border-4 border-green-800"
    >
      <View
        style={{ flexDirection: "row" }}
        // onPress={() => {
        //   router.push("/detailStore/99");
        // }}
      >
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://xn--12c7bzakgbj6bza1cbe6b3jwh.com/upload/about/1735775123198501.webp",
          }}
          className=" rounded-md"
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 15,
          }}
        >
          <Text style={{ fontSize: 14 }}>
            Name : {truncateText("วงษ์พาณิชย์", 10)}
          </Text>
          <Text style={{ fontSize: 14 }}>ประเภทขยะรับซื้อ</Text>
          <Text style={{ fontSize: 14 }}>ประเภทขยะรับซื้อ</Text>
          
        </View>
      </View>
    </View>
  );
};

export default LocationRankingComponent;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 70,
    height: 70,
  },
});

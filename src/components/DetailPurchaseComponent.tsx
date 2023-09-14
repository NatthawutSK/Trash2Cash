import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button } from "tamagui";

const DetailPurchaseComponent = () => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + "...";
    }
  };
  
  const [showDetails, setShowDetails] = useState(false);
  
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
  let p = 5;
  
  return (
    <View
      style={{
        padding: 40,
        backgroundColor: "grey",
        margin: 15,
        flex: 0,
        flexDirection: "column",
      }}
    >
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 15,
          }}
        >
          <Text style={{ fontSize: 15 }}>Name : {truncateText("p", 10)}</Text>
          <Text style={{ fontSize: 15 }}>Date : 01/01/0001</Text>
        </View>
      </TouchableOpacity>
      <View style={{ position: "relative", left: "80%" }}>
        <Button
          size="$3"
          width="$8"
          height="$5"
          theme="active"
          borderRadius="$10"
          onPress={toggleDetails}
        >
          Detail
        </Button>
      </View>
      {showDetails && (
        <View>
          <View style={styles.hr}></View>
          <Text style={{ fontSize: 10 }}>Additional details go here.</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>รายการ</Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>จำนวน</Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>ราคา</Text>
            {/* <View style={styles.hr}></View> */}
          </View>
          {/* for(let i = 0; i < p; i++) {

          } */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>รายการ</Text>
            <Text>จำนวน</Text>
            <Text>ราคา</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default DetailPurchaseComponent;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 70,
    height: 70,
  },
  hr: {
    borderBottomColor: "black", // Change color as needed
    borderBottomWidth: 1, // Change thickness as needed
    marginVertical: 10, // Adjust spacing as needed
  },
});

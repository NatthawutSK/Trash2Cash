import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button } from "tamagui";

const DetailApprove = () => {
  
  const [showDetails, setShowDetails] = useState(false);
  
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#8ECDDD",
        margin: 15,
        flex: 0,
        flexDirection: "column",
        borderRadius: 12
      }}
    >
      <View style={{ position: "relative" }}>
        <Button
          size={100}
          width={270}
          height="$4"
          theme="active"
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
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>น้ำหนัก</Text>
            {/* <View style={styles.hr}></View> */}
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>- ขวดน้ำ</Text>
            <Text>8 kg</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>- ขวดน้ำ</Text>
            <Text>8 kg</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>- ขวดน้ำ</Text>
            <Text>8 kg</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>- ขวดน้ำ</Text>
            <Text>8 kg</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default DetailApprove;

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

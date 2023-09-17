import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "tamagui";

const LocationRankingComponent = () => {

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + '...';
    }
  };

  return (
    <View  style={{
      padding: 40,
      backgroundColor: "#8ECDDD",
      margin: 15,
      flex: 0, flexDirection: "column",
      borderRadius: 12
    }}>
      <TouchableOpacity style={{flexDirection: "row"}}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={{ flexDirection: "column", justifyContent: "center", marginLeft: 15,}}>
        <Text style={{fontSize: 16}}>Name : {truncateText("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPp", 10)}</Text>
        <Text style={{fontSize: 16}}>Distance : 1 KM</Text>
      </View>
      </TouchableOpacity>
        
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

import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    FlatList,
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
  
  import EditScreenInfo from "@/components/EditScreenInfo";
//   import { Text, View } from "@/components/Themed";
  import DialogDemo from "@/components/DialogDemo";
  import SpinnerDemo from "@/components/SpinnerDemo";
  import MapViewComponent from "@/components/MapComponent";
  import { useEffect, useRef, useState } from "react";
  import DetailTrashWantBuy from "@/components/DetailTrashWantBuy";
  
  const images = [
    { id: "1", source: require("../../assets/images/t.jpg") },
    { id: "2", source: require("../../assets/images/op1.jpg") },
    { id: "3", source: require("../../assets/images/op4.jpg") },
    // Add more images as needed
  ];
  
  export default function TrashDetail() {
    let [currentIndex, setCurrentIndex] = useState(0);
    // const flatListRef = useRef(null);
    console.log(currentIndex);
  
    const truncateText = (text: string, maxLength: number) => {
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.substring(0, maxLength) + '...';
      }
    };
  
    const incrementIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
  
    const renderItemCircle = () => {
      const circleStyle = {
        ...styles.circlemini,
      };
  
      return <View style={circleStyle} />;
    };
  
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={[styles.container, { margin: 30, borderRadius: 12 }]}>
            <FlatList
              data={images}
              keyExtractor={(item) => item.id}
              horizontal
              pagingEnabled
              renderItem={({ item }) => (
                <>
                  <Image
                    source={item.source}
                    style={{ width: 350, height: 265 }}
                  />
                </>
              )}
              getItemLayout={(data, index) => ({
                length: 210, // Adjust this to your image height
                offset: 210 * index,
                index,
              })}
            />
          </View>
          <View style={[styles.container]}>
            <FlatList
              data={images}
              keyExtractor={(item) => item.id}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              renderItem={renderItemCircle}
              initialScrollIndex={currentIndex}
              getItemLayout={(data, index) => ({
                length: 210, // Adjust this to your image height
                offset: 210 * index,
                index,
              })}
            ></FlatList>
          </View>
  
          <View
            style={[
              styles.container,
              { alignItems: "flex-start", marginLeft: 50 },
            ]}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Name : Peter</Text>
            <Text style={{ fontSize: 14 }}>Type : Insect</Text>
          </View>
          <View style={styles.hr}></View>
          <View style={[]}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Text style={{ fontSize: 14 }}>Reduce Co2</Text>
              <Text style={{ fontSize: 14 }}>... e/kg</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Text style={{ fontSize: 14 }}>Average Price</Text>
              <Text style={{ fontSize: 14 }}>... baht/kg</Text>
            </View>
          </View>
          <View style={styles.hr}></View>
          <View
            style={[
              styles.container,
              { alignItems: "flex-start", marginLeft: 50 },
            ]}
          >
            <Text style={{ fontSize: 14 }}>สินค้าที่มีวัสดุนี้</Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/images/peter.png")}
                style={styles.miniimage}
              />
              <Image
                source={require("../../assets/images/peter.png")}
                style={styles.miniimage}
              />
              <Image
                source={require("../../assets/images/peter.png")}
                style={styles.miniimage}
              />
              <Image
                source={require("../../assets/images/peter.png")}
                style={styles.miniimage}
              />
              <Image
                source={require("../../assets/images/peter.png")}
                style={styles.miniimage}
              />
            </View>
          </View>
          <View
            style={[
              styles.container,
              { alignItems: "flex-start", marginLeft: 50 },
            ]}
          >
            <Text style={{ fontSize: 14 }}>เลือกประเภทผู้รับวัสดุนี้</Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/images/peter.png")}
                style={[styles.miniimage, {borderRadius: 0}]}
              />
              <Image
                source={require("../../assets/images/peter.png")}
                style={[styles.miniimage, {borderRadius: 0}]}
              />
              <Image
                source={require("../../assets/images/peter.png")}
                style={[styles.miniimage, {borderRadius: 0}]}
              />
              <Image
                source={require("../../assets/images/peter.png")}
                style={[styles.miniimage, {borderRadius: 0}]}
              />
              <Image
                source={require("../../assets/images/peter.png")}
                style={[styles.miniimage, {borderRadius: 0}]}
              />
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
  
import { Pressable, View, StyleSheet, Image, FlatList} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import React, { useState} from "react";
import { XStack, Avatar, Separator, Text, Button, YStack } from "tamagui";
import { router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import Carousel from "./Carousel";

const imgw = [
    {
      id: "1",
      source: {
        uri: "https://ichef.bbci.co.uk/news/640/cpsprodpb/FFEF/production/_114791556_045a3336-8ab5-4cd4-90fc-ef42c5562d76.jpg",
      },
    },
    {
      id: "2",
      source: {
        uri: "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      },
    },
    {
      id: "3",
      source: {
        uri: "https://ichef.bbci.co.uk/news/640/cpsprodpb/FFEF/production/_114791556_045a3336-8ab5-4cd4-90fc-ef42c5562d76.jpg",
      },
    },
    // Add more item.picture as needed
  ];

const pic = [
  "https://xn--12c7bzakgbj6bza1cbe6b3jwh.com/upload/about/1735775123198501.webp",
  "http://www.thealami.com/upfile/wongranit1.jpg",
  "https://mpics.mgronline.com/pics/Images/563000002635602.JPEG",
]

  const Icon = [
    "car", "store-alt"
  ];

export type MatProps2 = {
    img?: string; name: string; description: string, picture: string[], id: string, typeM: string, reduce: number, avgprice: number, submat: string[]
};
// export type MatProps = { img?: string; name: string; description: string };
const MaterialInfoItem = ({name, picture, id, typeM, reduce, avgprice, submat}: MatProps2) => {
    let [currentIndex, setCurrentIndex] = useState(0);
    
    console.log(id)

    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) {
          return text;
        } else {
          return text.substring(0, maxLength) + "...";
        }
      };

      const incrementIndex = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % picture.length);
      };
    
      const renderItemCircle = () => {
        const circleStyle = {
          ...styles.circlemini,
        };
    
        return <View style={circleStyle} />;
      };
      
	return (
        <>
        <ScrollView>

        <YStack alignItems="center">
          {/* <Carousel data={pic} /> */}
                    {/* {picture.map((x) => { 
                        // return <Text>{x}</Text>})}
                        <Image source={{uri: x}} style={{ width: 330, height: 215, borderColor: "green", borderWidth: 5 }} /> })} */}
            {/* <FlatList
              style={{ width: 330 }}
              data={item}
              keyExtractor={(items) => `${item.id}`}
              horizontal
              pagingEnabled
              renderItem={({items}) => (
                <>
                {

                    items.map((x, i) => { 
                        return <Image
                        source={x.picture[i]}
                        key={item.id}
                        style={{ width: 330, height: 215, borderColor: "green", borderWidth: 5 }}
                      /> })
                }

                </>
              )}
              getItemLayout={(data, index) => ({
                length: 215, // Adjust this to your image height
                offset: 215 * index,
                index,
              })} 
             />  */}
          </YStack>
          <YStack alignItems="center" m={10}>
            <FlatList
              data={picture}
              keyExtractor={(items) => `${id}`}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              renderItem={renderItemCircle}
              initialScrollIndex={currentIndex}
              getItemLayout={(data, index) => ({
                length: 215, // Adjust this to your image height
                offset: 215 * index,
                index,
              })}
            ></FlatList>
          </YStack>

          <YStack
             alignItems= "flex-start" 
             ml= {30}
             mb={10}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Name : {name}
            </Text>
            <Text style={{ fontSize: 14 }}>Type : {typeM}</Text>
          </YStack>
          <View style={styles.hr}></View>
          <YStack>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Text style={{ fontSize: 14 }}>Reduce Co2</Text>
              <Text style={{ fontSize: 14 }}>{reduce} e/kg</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Text style={{ fontSize: 14 }}>Average Price</Text>
              <Text style={{ fontSize: 14 }}>{reduce} baht/kg</Text>
            </View>
          </YStack>
          <View style={styles.hr}></View>
          <YStack
            alignItems="flex-start"
            ml={30}
          >
            <Text style={{ fontSize: 14 }}>สินค้าที่มีวัสดุนี้</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              {Icon.map((m, i) => {
                  return <Text className="my-3 mr-5"><FontAwesome5 key={i} name={m} size={18} /></Text>;
                })}
            </View>
          </YStack>
          <YStack
            alignItems="flex-start"
            ml={30}
          >
            <Text style={{ fontSize: 14 }}>เลือกประเภทผู้รับวัสดุนี้</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >

              {Icon.map((m, i) => {
                  return <Button className=" p-6 bg-green-800 m-2"><FontAwesome5 key={i} name={m} size={1}  /></Button>;
                })}
              </View>

          </YStack>
        </ScrollView>
        </>
	);
};

export default MaterialInfoItem;

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
      borderBottomColor: "grey", // Change color as needed
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
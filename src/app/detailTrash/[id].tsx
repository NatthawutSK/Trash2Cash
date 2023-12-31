import { Pressable, StyleSheet, Text, View, Image, } from "react-native";

//   import { Text, View } from "@/components/Themed";
import FlatListStoreMaterial from "@/components/FlatListStoreMaterial";
import { FontAwesome5 } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native-virtualized-view";
import { YStack } from "tamagui";
// import Carousel from "@/components/Carousel";
import CarouselTrashDetail from "@/components/CarouselTrashDetail";

const images = [
  "../../../assets/images/trash/bottlewarn.png",

  "../../../assets/images/trash/bottlecorrect.png",

  "../../../assets/images/trash/bottlewarn.png",

  // Add more images as needed
];

const Icon = ["car", "store-alt"];

const DATA = [
  {
    img: "https://picsum.photos/200",
    name: "ร้าน รี",
    mat: ["file", "glass-whiskey"],
    transport: ["car", "store-alt"],
    price: 10,
  },
  {
    img: "https://picsum.photos/203",
    name: "ร้าน รีไซ",
    mat: ["file", "glass-whiskey"],
    transport: ["car"],
    price: 5,
  },
  {
    img: "https://picsum.photos/204",
    name: "ร้าน รีเคิลเคิลเคิลเคิลเคิลเติลเต",
    mat: ["file", "glass-whiskey"],
    transport: ["car", "store-alt"],
    price: 8,
  },
  {
    img: "https://picsum.photos/205",
    mat: ["file"],
    name: "ร้าน รี",
    transport: ["store-alt"],
    price: 4,
  },
];
const DATA2 = [
  {
    id: "1",
    name: "ถุงฟิล์ม ยืด PE1",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ4",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic1",
    reduce: 10,
    avgprice: 51,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "2",
    name: "ถุงฟิล์ม ยืด PE2",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic2",
    reduce: 11,
    avgprice: 52,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "3",
    name: "ถุงฟิล์ม ยืด PE3",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic3",
    reduce: 12,
    avgprice: 53,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "4",
    name: "ถุงฟิล์ม ยืด PE4",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic4",
    reduce: 13,
    avgprice: 54,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "5",
    name: "ถุงฟิล์ม ยืด PE5",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic5",
    reduce: 14,
    avgprice: 55,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "6",
    name: "ถุงฟิล์ม ยืด PE6",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic6",
    reduce: 15,
    avgprice: 56,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "7",
    name: "ถุงฟิล์ม ยืด PE7",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic7",
    reduce: 16,
    avgprice: 57,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "8",
    name: "ถุงฟิล์ม ยืด PE8",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ4",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic8",
    reduce: 17,
    avgprice: 58,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "9",
    name: "ถุงฟิล์ม ยืด PE9",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ4",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic9",
    reduce: 18,
    avgprice: 59,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "10",
    name: "ถุงฟิล์ม ยืด PE10",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic10",
    reduce: 19,
    avgprice: 60,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "11",
    name: "ถุงฟิล์ม ยืด PE11",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic11",
    reduce: 20,
    avgprice: 62,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "12",
    name: "ถุงฟิล์ม ยืด PE12",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic12",
    reduce: 21,
    avgprice: 63,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "13",
    name: "ถุงฟิล์ม ยืด PE13",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic13",
    reduce: 22,
    avgprice: 64,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "14",
    name: "ถุงฟิล์ม ยืด PE14",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic14",
    reduce: 23,
    avgprice: 65,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "15",
    name: "ถุงฟิล์ม ยืด PE15",
    description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1",
    picture: [
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
      "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg",
    ],
    typeM: "plastic15",
    reduce: 24,
    avgprice: 66,
    submat: ["peter", "card", "can", "fan"],
  },
];
type ItemProps = {
  name: string;
  picture: string[][];
  typeM: string;
  reduce: number;
  avgprice: number;
  submat: string[][];
};
export default function TrashDetail() {
  // const params = useLocalSearchParams<{ item: any }>();
  const item = useLocalSearchParams();
  // const {item} = params;
  // console.log(item)
  // console.log(item.picture)

  // const pictureCorousel = (item.picture).split(',');
  
  // let [currentIndex, setCurrentIndex] = useState(0);
  // const flatListRef = useRef(null);
  // console.log(currentIndex);

  // const truncateText = (text: string, maxLength: number) => {
  //   if (text.length <= maxLength) {
  //     return text;
  //   } else {
  //     return text.substring(0, maxLength) + "...";
  //   }
  // };

  // const incrementIndex = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const renderItemCircle = () => {
  //   const circleStyle = {
  //     ...styles.circlemini,
  //   };

  //   return <View style={circleStyle} />;
  // };
  // const renderItem = ({DATA2}) =>{
  //   return (
  //     <ScrollView>
  //       <View>
  //         <Text>{DATA2.name}</Text>
  //       </View>
  //     </ScrollView>
  //   );
  // }
  return (
    <ScrollView className="w-full h-full">
      {/* <View className="bg-white h-full w-full"> */}
      {/* <StatusBar style="light" /> */}
     
      <Image
        className="h-full w-full absolute"
        source={require("../../../assets/images/background5.png")}
      />

      <CarouselTrashDetail img={item.picture} />
      <YStack p={20} mt={"$8"}>
        
        <YStack alignItems="flex-start" ml={30} mb={10}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {item.name}
          </Text>

          <Text style={{ fontSize: 14 }}>{item.description}</Text>
        </YStack>
        <View style={styles.hr}></View>
        <YStack>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
              {/* {JSON.parse(item.picture).map(picture => <Text>{picture}</Text>)} */}
            <Text style={{ fontSize: 14 }}>Reduce Co2</Text>
            <Text style={{ fontSize: 14 }}>{item.reduce} e/kg</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text style={{ fontSize: 14 }}>Average Price</Text>
            <Text style={{ fontSize: 14 }}>{item.avgprice} baht/kg</Text>
          </View>
        </YStack>
        <View style={styles.hr}></View>
        <YStack alignItems="flex-start" ml={30}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Description</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text className=" border-4 p-5 mt-3 bg-green-50 border-emerald-800">
              {item.typeM}
             </Text>
          </View>
        </YStack>
        {/* <YStack alignItems="flex-start" ml={30}>
          <Text style={{ fontSize: 14 }}>สินค้าที่มีวัสดุนี้</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            {Icon?.map((m, i) => {
              return (
                <Text className="my-3 mr-5" key={i}>
                  <FontAwesome5 key={i} name={m} size={18} />
                </Text>
              );
            })}
          </View>
        </YStack> */}
        {/* <YStack alignItems="flex-start" ml={30}>
          <Text style={{ fontSize: 14 }}>เลือกประเภทผู้รับวัสดุนี้</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            {Icon.map((m, i) => {
              return (
                <Pressable
                  key={i}
                  className=" p-3 bg-gradient-to-r from-cyan-500 to-blue-500 mr-5 mt-3 border-2"
                  onPress={() => router.push("/detailStore/66")}
                >
                  <FontAwesome5 key={i} name={m} size={18} />
                </Pressable>
              );
            })}
          </View>
        </YStack> */}

        {/* <FlatListMaterialInfo data={DATA2} /> */}
        {/* <FlatListStoreMaterial data={DATA} /> */}
      </YStack>
      {/* </View> */}
    </ScrollView>
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

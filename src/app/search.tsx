import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, Stack, XStack, YStack } from "tamagui";
import { router, useNavigation } from "expo-router";
import { MatProps } from "@/components/MaterialItem";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FlatList, TextInput } from "react-native-gesture-handler";
import FlatListStore from "@/components/FlatListStore";
import FlatListMaterial from "@/components/FlatListMaterial";
import { useHeaderHeight } from "@react-navigation/elements";
import { ArrowBigLeft, Search } from "@tamagui/lucide-icons";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, Pressable, Text } from "react-native";

import { gql, useQuery } from "@apollo/client";
import Spinner from "react-native-loading-spinner-overlay";
import { orderByDistance, convertDistance, getDistance } from "geolib";
import * as Location from "expo-location";
type Props = {};
const Tab = createMaterialTopTabNavigator();

const DATA = [
  {
    id: "1",
    name: "ขวดแก้ว",
    description: "แตกขาว แก้วใส เศษแก้วขาว",
    iconmain: ["https://www.cospak.com.au/productimages/AG118FR.jpg"],
    picture: [
      require("../../assets/images/trash/glass1.png"),
      require("../../assets/images/trash/glass2.png"),
    ],
    typeM:
      "“ขวดแก้ว” คือบรรจุภัณฑ์ที่ทำจากวัสดุหลักคือ “แก้ว” ซึ่ง “แก้ว” เป็นสารอนินทรีย์มีส่วนประกอบหลักคือทรายแก้ว หินปูนบริสุทธิ์ โซดาแอซ หรือ โซเดียมคาร์บอเนต และสารเคมีอื่นๆ ที่ใช้เป็นตัวฟอกสี หรือไล่อากาศ ทั้งนี้จะมีการผสมเศษแก้วเข้าไปส่วนหนึ่ง เพื่อช่วยการหลอมละลายให้เร็วขึ้น วัตถุดิบส่วนใหญ่จะหาได้จากในประเทศทำให้ต้นทุนในการผลิตบรรจุภัณฑ์ประเภทนี้มีราคาที่ถูกกว่าวัสดุอื่นขวดแก้วนั้น มีใช้มานานกว่า 2,500 ปี ในการผลิตขวดแก้วนั้นมีพัฒนาการเรื่อยมาจนถึงปัจจุบันซึ่งมีนวัตกรรมใหม่ ๆ ในการผลิตแก้วให้มีความแข็งแรงมากขึ้น ลดความเปราะจากการใช้สารเคลือบวัสดุ อีกทั้งยังทำให้ขวดแก้วมีน้ำหนักที่ลดลงด้วย",
    reduce: 10,
    avgprice: 51,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "2",
    name: "กระดาษกล่อง",
    description: "กระดาษคราฟท์ กระดาษลั",
    iconmain: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrjuv-Pj-m8UoDMWPL12naUSS4O14a8kt5A&usqp=CAU",
    ],
    picture: [
      require("../../assets/images/trash/box1.png"),
      require("../../assets/images/trash/boxwarn.png"),
      require("../../assets/images/trash/boxcorrect.png"),
    ],
    typeM:
      "กระดาษลัง หรือ กระดาษกล่อง คือ กระดาษ ที่เป็นชนิดกระดาษลูกฟูกซึ่งมีลักษณะเป็นแผ่นกระดาษแปะหน้าไว้ 2 ฝั่ง โดยมีลอนกระดาษอยู่ตรงกลาง นิยมหยิบมาใช้เป็นบรรจุภัณฑ์ เนื่องจากมีความแข็งแรง ทนทาน และรับน้ำหนักได้มาก แถมตัวกระดาษยังมีน้ำหนักที่เบา และยังสามารถวางต่อกันเป็นชั้นเพื่อประหยัดพื้นที่ได้อีกด้วย ที่พิเศษนอกเหนือจากนั้น กระดาษลูกฟูก ยังสามารถทำเป็นรูปทรงต่างๆได้ตามที่ต้องการ แถมยังมีราคาที่ต่ำมาก จึงทำให้กระดาษลูกฟูก ได้รับความนิยมในการนำมาใช้ในการบรรจุสินค้า หรือพัสดุต่างๆอีกด้วย ในปี 1871 Albert L.Jones ชาวอเมริกา ได้นำกระดาษที่ทำเป็นลอนมาประยุกต์ช้งาน โดยนำมาห่อหุ้มสินค้า ซึ่งในช่วงเเรกๆสินค้าที่ถูกห่อหุ้มโดยกระดาษเป็นขวดแก้ว และชุดตะเกียงน้ำมันกาดต่อมาในปี 1874 ได้มีการจดสิทธิบัตรแนวความคิดที่จะไม่ให้กระดาษที่ขึ้นรูปเป็นลอนมีการยึดตัวออก จึงได้นำกระดาษแผ่นเรียบมาประกบติดกันจึงเกิดเป็นกระดาษ 2 ชั้นตั้งเเต่นั้นมา",
    reduce: 11,
    avgprice: 52,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "3",
    name: "ขวด PET ใส",
    description: "ขวดกุ๊ก ขวดใสเหนียว ขวดเพชร",
    iconmain: [
      "https://www.imcofoodpack.com/assets/img/products/lists/2/2925%20350%20ml%20B.png",
    ],
    picture: [
      require("../../assets/images/trash/bottle1.png"),
      require("../../assets/images/trash/bottlewarn.png"),
      require("../../assets/images/trash/bottlecorrect.png"),
    ],
    typeM:
      "พลาสติกเป็นวัสดุที่มนุษย์คิดค้นและประดิษฐ์ขึ้นเพื่อช่วยให้เรามีชีวิตที่สะดวกสบายยิ่งขึ้น ในอดีตเราไม่เคยรู้จักพลาสติกเลยจนกระทั่งกลางศตวรรษที่ 19 วัสดุดั้งเดิมที่มนุษย์ค้นเคยและใช้อยู่ทั่วไปในชีวิตประจำวันในยุคก่อนหน้านี้ล้วนเป็นวัสดุจากธรรมชาติทั้งสิ้นไม่ว่าจะเป็น แก้ว ไม้ กระดาษ โลหะ ยาง หรือ ขนสัตว์ สิ่งเหล่านี้เคยเป็นวัสดุที่ตอบสนองความต้องการของมนุษย์ได้เป็นอย่างดีโดยพลาสติกจัดเป็นสารประกอบพวกไฮโดรคาร์บอนที่มีน้ำหนักโมเลกุลสูง ประกอบด้วยโมเลกุลซ้ำๆ กันต่อกันเป็นโมเลกุลสายยาวๆ ประกอบด้วยธาตุสำคัญ คือ คาร์บอน, ไฮโดรเจน, และออกซิเจน นอกจากนี้อาจมีธาตุอื่นๆเป็นส่วนประกอบย่อย ซึ่งได้แก่ ไนโตรเจน, ฟลูออรีน, คลอรีน, และกำมะถัน เป็นต้น",
    reduce: 12,
    avgprice: 53,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "4",
    name: "ถุง/ฟิล์ม ยืด PE",
    description: "ถุงหนียว ถุงก็อบแก๊บ ถุงยืดได้",
    iconmain: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQxFgOL02x_cGM6XJjaVniCmWz1o3QJL5log&usqp=CAU",
    ],
    picture: [
      require("../../assets/images/trash/plastic1.png"),
      require("../../assets/images/trash/plasticwarn.png"),
      require("../../assets/images/trash/plasticcorrect.png"),
    ],
    typeM:
      "PE Polyethylene มีคุณสมบัติ เป็นฉนวนไฟฟ้าที่ดี , มีความเหนียว และทนทานต่อแรงดึงปานกลาง ฉีกขาดยาก พวกที่มีความหนาแน่นต่ำ จะใสมาก แต่จะขุ่นเมื่อความหนาแน่นสูง ป้องกันความชื้นไม่ให้ผ่านเข้าออกได้ แต่ให้อากาศและก๊าซต่างๆ ซึมผ่านได้ ทนกรดและด่างอ่อน แต่ไม่ทนน้ำมันและไขมัน มีน้ำหนักเบา สามารถพับงอได้ดี มีความยืดตัวได้สูง ปกติจะไม่ละลายในตัวทำละลายใดๆ แต่ถ้าอุณหภูมิสูงกว่า 70 องศา ทนความเย็นได้ถึง -73 องศา จะเริ่มละลาย PE ได้ถูกจำแนกเป็นหลายชนิด ตัวหลักๆ ที่ใช้กันมากคือ LDPE , LLDPE , MDPE , HDPEการใช้งานของPE กว้างขวางมากนิยมผลิตเป็นถุง ,ขวด ,ฟิล์ม ,แผงบรรจุยา ,สายน้ำเกลือ ,ชิ้นส่วนรถยนต์ ,เชือก ,แห ,อวน , ถุง พลาสติก ,ท่อและรางน้ำ ,เครื่องใช้ในครัวเรือน ,ของเด็กเล่น ,ฉนวนหุ้มสายไฟ ,สายเคเบิ้ล ,เคลือบหลังพรม ,ผ้าใบพลาสติก ,แผ่นฟิล์มสำหรับการบรรจุหีบห่อ , แผ่นฟิล์มที่ใช้ในการเกษตร",
    reduce: 13,
    avgprice: 54,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "5",
    name: "กระป๋องอะลูมิเนียม",
    description: "ป๋องเนียม",
    iconmain: [
      "https://thaibeveragecan.com/wp-content/uploads/2023/03/beverage-cans-set-blank-aluminum-packaging-1024x683.jpg",
    ],
    picture: [
      require("../../assets/images/trash/can1.png"),
      require("../../assets/images/trash/canwarn.png"),
      require("../../assets/images/trash/cancorrect.png"),
    ],
    typeM:
      "กระป๋องอะลูมิเนียมเป็นหนึ่งในบรรจุภัณฑ์ที่ถูกยกให้เป็นบรรจุภัณฑ์ที่เป็นมิตรกับสิ่งแวดล้อมมากที่สุด เพราะนอกจากจะมีคุณสมบัติที่เบา พกพาง่าย แข็งแรง และปกป้องเครื่องดื่มได้ดีแล้ว กระป๋องอะลูมิเนียมส่วนใหญ่ยังผลิตมาจากกระป๋องอะลูมิเนียมใช้แล้วที่ผ่านการรีไซเคิล ซึ่งช่วยลดขยะและลดการใช้ทรัพยากรใหม่ได้มหาศาล ก่อนอื่นเรามาทำความรู้จักกับ 'กระป๋องอะลูมิเนียม' บรรจุภัณฑ์ซึ่งเป็นที่นิยม นำมาบรรจุเครื่องดื่มประเภทต่างๆ ไม่ว่าจะเป็นน้ำอัดลม น้ำผลไม้ กาแฟ นมสด ฯลฯ เพราะกระป๋องอะลูมิเนียมเหล่านี้ มีคุณสมบัติที่ทนทานต่อการกัดกร่อน ทนต่อการซึมผ่านของความชื้น อากาศ ก๊าซ และกลิ่น ไม่ให้ออกไปภายนอก ในทางตรงกันข้ามยังสามารถป้องกันอากาศ แสงแดด และสิ่งแปลกปลอมจากภายนอกที่จะมาสัมผัสกับเครื่องดื่มในกระป๋องได้เป็นอย่างดี ซึ่งมีผลต่อการรักษาคุณภาพของเครื่องดื่มที่อยู่ภายในให้คงรสชาติไว้ได้ยาวนาน ตามอายุของผลิตภัณฑ์นั้นๆ ",
    reduce: 14,
    avgprice: 55,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    id: "6",
    name: "กระดาษขาวดำ",
    description: "กระดาษปอนด์ขาว กระดาษคอมพิวเตอร์",
    iconmain: [
      "https://www.quinl.com/contentImages/images/1446264177_887579.jpg",
    ],
    picture: [
      require("../../assets/images/trash/paper1.png"),
      require("../../assets/images/trash/paperwarn.png"),
      require("../../assets/images/trash/papercorrect.png"),
    ],
    typeM:
      "กระดาษ เป็นวัสดุที่ผลิตขึ้นมาสำหรับการจดบันทึก มีประวัติศาสตร์ยาวนาน เชื่อกันว่ามีการใช้กระดาษครั้งแรก ๆ โดยชาวอียิปต์และชาวจีนโบราณ แต่กระดาษในยุคแรก ๆ ล้วนผลิตขึ้นเพื่อการจดบันทึกด้วยกันทั้งสิ้น จึงกล่าวได้ว่าระบบการเขียนคือแรงผลักดันให้เกิดการผลิตกระดาษขึ้นในโลก ปัจจุบันกระดาษไม่ได้มีประโยชน์ในการใช้จดบันทึกตัวหนังสือ หรือข้อความ เท่านั้น ยังใช้ประโยชน์อื่น ๆ ได้มากมาย เช่น กระดาษชำระ กระดาษห่อของขวัญ กระดาษลูกฟูกสำหรับทำกล่อง เป็นต้น ",
    reduce: 15,
    avgprice: 56,
    submat: ["peter", "card", "can", "fan"],
  },
];

const LocationQuery = gql`
  query MyQuery {
    location_storeList {
      auth_id
      latitude
      location_id
      longtitude
      users {
        user_name
        phone_number
      }
    }
  }
`;

const SearchComponent = (props: Props) => {
  const [data1, setData1] = useState<MatProps[]>(DATA);
  const navigation = useNavigation();
  const [search, setSearch] = useState<string>("");
  const [tabnum, setTabnum] = useState<number>(1);

  // console.log(navigation.getState().key);
  const { data, loading } = useQuery(LocationQuery);

  const [location, setLocation] = useState<Location.LocationObject>({
    coords: {
      latitude: 0,
      longitude: 0,
      altitude: null,
      accuracy: null,
      altitudeAccuracy: null,
      heading: null,
      speed: null,
    },
    timestamp: 0,
    mocked: false,
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // console.log(data?.location_storeList);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  // console.log(loading);
  if (loading) {
    return (
      <Spinner
        animation="fade"
        visible={true}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
      />
    );
  }

  // const [NearbyData, setNearbyData] = useState([]);
  let NearbyData: any = [];

  if (!loading) {
    const resultArray = data?.location_storeList.map((item: any) => ({
      latitude: parseFloat(item.latitude),
      longitude: parseFloat(item.longtitude),
    }));

    const orderByDis = orderByDistance(
      {
        latitude: location?.coords.latitude!,
        longitude: location?.coords.longitude!,
      },
      resultArray
    );

    NearbyData = resultArray?.map((item1: any) => {
      const match = data?.location_storeList.find(
        (item2: any) =>
          parseFloat(item2.latitude) === item1.latitude &&
          parseFloat(item2.longtitude) === item1.longitude
      );
      return {
        ...item1,
        user_name: match ? match?.users?.user_name : undefined,
        auth_id: match ? match?.auth_id : undefined,
        distance: match
          ? convertDistance(
              getDistance(
                {
                  latitude: parseFloat(item1.latitude),
                  longitude: parseFloat(item1.longitude),
                },
                {
                  latitude: location?.coords.latitude!,
                  longitude: location?.coords.longitude!,
                }
              ),
              "m"
            )
          : undefined,
      };
    });

    console.log("resultArray", resultArray);
    console.log("orderByDis", orderByDis);
  }

  return (
    <YStack ac={"center"} h={"100%"} bg={"white"}>
      {/* <Text>5555</Text> */}
      <XStack
        mt={40}
        bg={"white"}
        height={"5%"}
        ai={"center"}
        jc={"space-between"}
        px={20}
        mb={10}
      >
        <Pressable onPress={() => router.push("/")}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </Pressable>
        <TextInput
          className="w-[70%] border-2 rounded-md h-10  text-base py-2 px-2 border-[#3C6255]"
          placeholder="ค้นหา"
          value={search}
          onChangeText={(text) => {
            setSearch(text);
          }}
          onSubmitEditing={() => {
            console.log(tabnum);
            if (tabnum === 1) {
              console.log(123);
              setData1(
                DATA.filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
              );
              console.log(data);
            } else {
              console.warn("ยังมีบัคอยู่");

              // const newData = NearbyData.filter((item: any) =>
              //   item.user_name.toLowerCase().includes(search.toLowerCase())
              // );
              // console.log("ggg" + JSON.stringify(NearbyData));
              // console.log(newData);

              // NearbyData.length = 0;
              // console.log("hh" + JSON.stringify(newData));

              // NearbyData.push(newData);
              // console.log("qq" + JSON.stringify(NearbyData));
              // console.log(data2);
            }
          }}
        />
        <Pressable>
          <Ionicons name="search" size={28} color="black" />
        </Pressable>
      </XStack>
      <Stack h={"100%"}>
        <Tab.Navigator
          initialRouteName="ฮีโร่"
          initialLayout={{
            height: 0,
            width: Dimensions.get("window").width,
          }}
        >
          <Tab.Screen
            name="ฮีโร่"
            listeners={{
              state: () => {
                setSearch("");
                setTabnum(tabnum * -1);
                console.log(tabnum);
              },
            }}
            children={() => <FlatListStore data={NearbyData} />}
          />
          <Tab.Screen
            name="วัสดุรีไซเคิล"
            listeners={{
              state: () => {
                setSearch("");
                setTabnum(tabnum * -1);
                console.log(tabnum);
              },
            }}
            children={() => <FlatListMaterial data={data1} />}
          />
        </Tab.Navigator>
      </Stack>
    </YStack>
  );
};

export default React.memo(SearchComponent);

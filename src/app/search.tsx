import React, { useLayoutEffect, useState } from "react";
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
import { Dimensions, Pressable } from "react-native";
import { StoreProps } from "@/components/StoreItem";

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
    typeM: "กระดาษลัง หรือ กระดาษกล่อง คือ กระดาษ ที่เป็นชนิดกระดาษลูกฟูกซึ่งมีลักษณะเป็นแผ่นกระดาษแปะหน้าไว้ 2 ฝั่ง โดยมีลอนกระดาษอยู่ตรงกลาง นิยมหยิบมาใช้เป็นบรรจุภัณฑ์ เนื่องจากมีความแข็งแรง ทนทาน และรับน้ำหนักได้มาก แถมตัวกระดาษยังมีน้ำหนักที่เบา และยังสามารถวางต่อกันเป็นชั้นเพื่อประหยัดพื้นที่ได้อีกด้วย ที่พิเศษนอกเหนือจากนั้น กระดาษลูกฟูก ยังสามารถทำเป็นรูปทรงต่างๆได้ตามที่ต้องการ แถมยังมีราคาที่ต่ำมาก จึงทำให้กระดาษลูกฟูก ได้รับความนิยมในการนำมาใช้ในการบรรจุสินค้า หรือพัสดุต่างๆอีกด้วย",
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
    typeM: "พลาสติกเป็นวัสดุที่มนุษย์คิดค้นและประดิษฐ์ขึ้นเพื่อช่วยให้เรามีชีวิตที่สะดวกสบายยิ่งขึ้น ในอดีตเราไม่เคยรู้จักพลาสติกเลยจนกระทั่งกลางศตวรรษที่ 19 วัสดุดั้งเดิมที่มนุษย์ค้นเคยและใช้อยู่ทั่วไปในชีวิตประจำวันในยุคก่อนหน้านี้ล้วนเป็นวัสดุจากธรรมชาติทั้งสิ้นไม่ว่าจะเป็น แก้ว ไม้ กระดาษ โลหะ ยาง หรือ ขนสัตว์ สิ่งเหล่านี้เคยเป็นวัสดุที่ตอบสนองความต้องการของมนุษย์ได้เป็นอย่างดีโดยพลาสติกจัดเป็นสารประกอบพวกไฮโดรคาร์บอนที่มีน้ำหนักโมเลกุลสูง ประกอบด้วยโมเลกุลซ้ำๆ กันต่อกันเป็นโมเลกุลสายยาวๆ ประกอบด้วยธาตุสำคัญ คือ คาร์บอน, ไฮโดรเจน, และออกซิเจน นอกจากนี้อาจมีธาตุอื่นๆเป็นส่วนประกอบย่อย ซึ่งได้แก่ ไนโตรเจน, ฟลูออรีน, คลอรีน, และกำมะถัน เป็นต้น",
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
    typeM: "PE Polyethylene มีคุณสมบัติ เป็นฉนวนไฟฟ้าที่ดี , มีความเหนียว และทนทานต่อแรงดึงปานกลาง ฉีกขาดยาก พวกที่มีความหนาแน่นต่ำ จะใสมาก แต่จะขุ่นเมื่อความหนาแน่นสูง ป้องกันความชื้นไม่ให้ผ่านเข้าออกได้ แต่ให้อากาศและก๊าซต่างๆ ซึมผ่านได้ ทนกรดและด่างอ่อน แต่ไม่ทนน้ำมันและไขมัน มีน้ำหนักเบา สามารถพับงอได้ดี มีความยืดตัวได้สูง ปกติจะไม่ละลายในตัวทำละลายใดๆ แต่ถ้าอุณหภูมิสูงกว่า 70 องศา ทนความเย็นได้ถึง -73 องศา จะเริ่มละลาย PE ได้ถูกจำแนกเป็นหลายชนิด ตัวหลักๆ ที่ใช้กันมากคือ LDPE , LLDPE , MDPE , HDPEการใช้งานของPE กว้างขวางมากนิยมผลิตเป็นถุง ,ขวด ,ฟิล์ม ,แผงบรรจุยา ,สายน้ำเกลือ ,ชิ้นส่วนรถยนต์ ,เชือก ,แห ,อวน , ถุง พลาสติก ,ท่อและรางน้ำ ,เครื่องใช้ในครัวเรือน ,ของเด็กเล่น ,ฉนวนหุ้มสายไฟ ,สายเคเบิ้ล ,เคลือบหลังพรม ,ผ้าใบพลาสติก ,แผ่นฟิล์มสำหรับการบรรจุหีบห่อ , แผ่นฟิล์มที่ใช้ในการเกษตร",
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
    typeM: "กระป๋องอะลูมิเนียมเป็นหนึ่งในบรรจุภัณฑ์ที่ถูกยกให้เป็นบรรจุภัณฑ์ที่เป็นมิตรกับสิ่งแวดล้อมมากที่สุด เพราะนอกจากจะมีคุณสมบัติที่เบา พกพาง่าย แข็งแรง และปกป้องเครื่องดื่มได้ดีแล้ว กระป๋องอะลูมิเนียมส่วนใหญ่ยังผลิตมาจากกระป๋องอะลูมิเนียมใช้แล้วที่ผ่านการรีไซเคิล ซึ่งช่วยลดขยะและลดการใช้ทรัพยากรใหม่ได้มหาศาล ",
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
    typeM: "กระดาษขาวดำถือเป็นขยะกระดาษที่แพงที่สุดเพราะผ่านการฟอกสีออกหมดแล้ว สามารถนำไปทำเป็นกระดาษประเภทต่างๆ ได้หลากหลาย เช่น กระดาษทิชชู่ ผ้าอนามัย หรือแม้กระทั้งนำกลับมาทำเป็น A4 แผ่นใหม่ได้ กระดาษเอกสารที่ใช้กันในสำนักงาน มีราคาสูง เพราะ เวลานำมารีไซเคิลแล้วไม่ต้องฟอกสีใหม่ ส่วนใหญ่นิยมนำมาทำเนกระดาษทิชชู่หรือกระดาษเอกสาร",
    reduce: 15,
    avgprice: 56,
    submat: ["peter", "card", "can", "fan"],
  },
];
const DATA2 = [
  {
    img: "https://picsum.photos/200",
    name: "ร้าน รี",
    mat: [
      "wine-bottle",
      "box",
      "file",
      "glass-whiskey",
      "file",
      "glass-whiskey",
    ],
  },
  {
    img: "https://picsum.photos/201",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/202",
    name: "ร้าน เคิ้ล",
    mat: ["wine-bottle", "box"],
  },
  {
    img: "https://picsum.photos/203",
    name: "ร้าน รีไซ",
    mat: ["box", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/204",
    name: "ร้าน รีเคิลเคิลเคิลเคิลเคิลเติลเต",
    mat: ["glass-whiskey"],
  },
  {
    img: "https://picsum.photos/205",
    name: "ร้าน รี",
    mat: ["wine-bottle", "box", "file", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/206",
    name: "ร้าน ไซ",
    mat: ["file", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/207",
    name: "ร้าน เคิ้ล",
    mat: ["wine-bottle", "box"],
  },
  {
    img: "https://picsum.photos/208",
    name: "ร้าน รีไซ",
    mat: ["box", "glass-whiskey"],
  },
  {
    img: "https://picsum.photos/209",
    name: "ร้าน รีเคิล",
    mat: ["glass-whiskey"],
  },
];

const SearchComponent = (props: Props) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<MatProps[]>(DATA);
  const [data2, setData2] = useState<StoreProps[]>(DATA2);
  const [tabnum, setTabnum] = useState<number>(1);
  console.log(navigation.getState().key);
  return (
    <YStack ac={"center"} h={"100%"} bg={"white"}>
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
              setData(
                DATA.filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
              );
              console.log(data);
            } else {
              setData2(
                DATA2.filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
              );
              console.log(data2);
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
            children={() => <FlatListStore data={data2} />}
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
            children={() => <FlatListMaterial data={data} />}
          />
        </Tab.Navigator>
      </Stack>
    </YStack>
  );
};

export default React.memo(SearchComponent);

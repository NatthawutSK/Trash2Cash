import { FlatList, Image, Pressable, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Button, H4, ScrollView, Stack, Text, XStack } from "tamagui";
// import { FontAwesome } from "@expo/vector-icons";
import { TrashMaterial, imgIcon } from "@/MockData/data";
import { getProperty } from "@/utils/util";
import { useHeaderHeight } from "@react-navigation/elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import MiniMap from "@/components/MiniMap";
const BoxTrash = (item: any) => {
  console.log(item)
  return (
    <Pressable onPress={() => router.push({pathname:`/detailTrash/${item.id}`, params: item } )}>
      <View
        className="h-52 rounded-lg w-52  items-center flex justify-center"
        style={{ backgroundColor: colors.green3 }}
      >
        <Image className="w-24 h-24" source={item.pic} />
        <Text ta={"center"} mt={"$3"} fontSize={"$5"} className="text-white">
          {item.name}
        </Text>
      </View>
    </Pressable>
  );
};

const DATA = [
  {
    pic: require("../../../assets/images/glass-bottle.png"),
    id: "1",
    name: "ขวดแก้ว",
    description: "แตกขาว แก้วใส เศษแก้วขาว",
    iconmain: ["https://www.cospak.com.au/productimages/AG118FR.jpg"],
    picture: [
      require("../../../assets/images/trash/glass1.png"),
      require("../../../assets/images/trash/glass2.png"),
    ],
    typeM:
      "“ขวดแก้ว” คือบรรจุภัณฑ์ที่ทำจากวัสดุหลักคือ “แก้ว” ซึ่ง “แก้ว” เป็นสารอนินทรีย์มีส่วนประกอบหลักคือทรายแก้ว หินปูนบริสุทธิ์ โซดาแอซ หรือ โซเดียมคาร์บอเนต และสารเคมีอื่นๆ ที่ใช้เป็นตัวฟอกสี หรือไล่อากาศ ทั้งนี้จะมีการผสมเศษแก้วเข้าไปส่วนหนึ่ง เพื่อช่วยการหลอมละลายให้เร็วขึ้น วัตถุดิบส่วนใหญ่จะหาได้จากในประเทศทำให้ต้นทุนในการผลิตบรรจุภัณฑ์ประเภทนี้มีราคาที่ถูกกว่าวัสดุอื่นขวดแก้วนั้น มีใช้มานานกว่า 2,500 ปี ในการผลิตขวดแก้วนั้นมีพัฒนาการเรื่อยมาจนถึงปัจจุบันซึ่งมีนวัตกรรมใหม่ ๆ ในการผลิตแก้วให้มีความแข็งแรงมากขึ้น ลดความเปราะจากการใช้สารเคลือบวัสดุ อีกทั้งยังทำให้ขวดแก้วมีน้ำหนักที่ลดลงด้วย",
    reduce: 10,
    avgprice: 51,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    pic: require("../../../assets/images/box.png"),
    id: "2",
    name: "กระดาษกล่อง",
    description: "กระดาษคราฟท์ กระดาษลั",
    iconmain: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrjuv-Pj-m8UoDMWPL12naUSS4O14a8kt5A&usqp=CAU",
    ],
    picture: [
      require("../../../assets/images/trash/box1.png"),
      require("../../../assets/images/trash/boxwarn.png"),
      require("../../../assets/images/trash/boxcorrect.png"),
    ],
    typeM:
      "กระดาษลัง หรือ กระดาษกล่อง คือ กระดาษ ที่เป็นชนิดกระดาษลูกฟูกซึ่งมีลักษณะเป็นแผ่นกระดาษแปะหน้าไว้ 2 ฝั่ง โดยมีลอนกระดาษอยู่ตรงกลาง นิยมหยิบมาใช้เป็นบรรจุภัณฑ์ เนื่องจากมีความแข็งแรง ทนทาน และรับน้ำหนักได้มาก แถมตัวกระดาษยังมีน้ำหนักที่เบา และยังสามารถวางต่อกันเป็นชั้นเพื่อประหยัดพื้นที่ได้อีกด้วย ที่พิเศษนอกเหนือจากนั้น กระดาษลูกฟูก ยังสามารถทำเป็นรูปทรงต่างๆได้ตามที่ต้องการ แถมยังมีราคาที่ต่ำมาก จึงทำให้กระดาษลูกฟูก ได้รับความนิยมในการนำมาใช้ในการบรรจุสินค้า หรือพัสดุต่างๆอีกด้วย ในปี 1871 Albert L.Jones ชาวอเมริกา ได้นำกระดาษที่ทำเป็นลอนมาประยุกต์ช้งาน โดยนำมาห่อหุ้มสินค้า ซึ่งในช่วงเเรกๆสินค้าที่ถูกห่อหุ้มโดยกระดาษเป็นขวดแก้ว และชุดตะเกียงน้ำมันกาดต่อมาในปี 1874 ได้มีการจดสิทธิบัตรแนวความคิดที่จะไม่ให้กระดาษที่ขึ้นรูปเป็นลอนมีการยึดตัวออก จึงได้นำกระดาษแผ่นเรียบมาประกบติดกันจึงเกิดเป็นกระดาษ 2 ชั้นตั้งเเต่นั้นมา",
    reduce: 11,
    avgprice: 52,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    pic: require("../../../assets/images/plastic-bottle.png"),
    id: "3",
    name: "ขวด PET ใส",
    description: "ขวดกุ๊ก ขวดใสเหนียว ขวดเพชร",
    iconmain: [
      "https://www.imcofoodpack.com/assets/img/products/lists/2/2925%20350%20ml%20B.png",
    ],
    picture: [
      require("../../../assets/images/trash/bottle1.png"),
      require("../../../assets/images/trash/bottlewarn.png"),
      require("../../../assets/images/trash/bottlecorrect.png"),
    ],
    typeM:
      "พลาสติกเป็นวัสดุที่มนุษย์คิดค้นและประดิษฐ์ขึ้นเพื่อช่วยให้เรามีชีวิตที่สะดวกสบายยิ่งขึ้น ในอดีตเราไม่เคยรู้จักพลาสติกเลยจนกระทั่งกลางศตวรรษที่ 19 วัสดุดั้งเดิมที่มนุษย์ค้นเคยและใช้อยู่ทั่วไปในชีวิตประจำวันในยุคก่อนหน้านี้ล้วนเป็นวัสดุจากธรรมชาติทั้งสิ้นไม่ว่าจะเป็น แก้ว ไม้ กระดาษ โลหะ ยาง หรือ ขนสัตว์ สิ่งเหล่านี้เคยเป็นวัสดุที่ตอบสนองความต้องการของมนุษย์ได้เป็นอย่างดีโดยพลาสติกจัดเป็นสารประกอบพวกไฮโดรคาร์บอนที่มีน้ำหนักโมเลกุลสูง ประกอบด้วยโมเลกุลซ้ำๆ กันต่อกันเป็นโมเลกุลสายยาวๆ ประกอบด้วยธาตุสำคัญ คือ คาร์บอน, ไฮโดรเจน, และออกซิเจน นอกจากนี้อาจมีธาตุอื่นๆเป็นส่วนประกอบย่อย ซึ่งได้แก่ ไนโตรเจน, ฟลูออรีน, คลอรีน, และกำมะถัน เป็นต้น",
    reduce: 12,
    avgprice: 53,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    pic: require("../../../assets/images/plastic-bag.png"),
    id: "4",
    name: "ถุง/ฟิล์ม ยืด PE",
    description: "ถุงหนียว ถุงก็อบแก๊บ ถุงยืดได้",
    iconmain: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQxFgOL02x_cGM6XJjaVniCmWz1o3QJL5log&usqp=CAU",
    ],
    picture: [
      require("../../../assets/images/trash/plastic1.png"),
      require("../../../assets/images/trash/plasticwarn.png"),
      require("../../../assets/images/trash/plasticcorrect.png"),
    ],
    typeM:
      "PE Polyethylene มีคุณสมบัติ เป็นฉนวนไฟฟ้าที่ดี , มีความเหนียว และทนทานต่อแรงดึงปานกลาง ฉีกขาดยาก พวกที่มีความหนาแน่นต่ำ จะใสมาก แต่จะขุ่นเมื่อความหนาแน่นสูง ป้องกันความชื้นไม่ให้ผ่านเข้าออกได้ แต่ให้อากาศและก๊าซต่างๆ ซึมผ่านได้ ทนกรดและด่างอ่อน แต่ไม่ทนน้ำมันและไขมัน มีน้ำหนักเบา สามารถพับงอได้ดี มีความยืดตัวได้สูง ปกติจะไม่ละลายในตัวทำละลายใดๆ แต่ถ้าอุณหภูมิสูงกว่า 70 องศา ทนความเย็นได้ถึง -73 องศา จะเริ่มละลาย PE ได้ถูกจำแนกเป็นหลายชนิด ตัวหลักๆ ที่ใช้กันมากคือ LDPE , LLDPE , MDPE , HDPEการใช้งานของPE กว้างขวางมากนิยมผลิตเป็นถุง ,ขวด ,ฟิล์ม ,แผงบรรจุยา ,สายน้ำเกลือ ,ชิ้นส่วนรถยนต์ ,เชือก ,แห ,อวน , ถุง พลาสติก ,ท่อและรางน้ำ ,เครื่องใช้ในครัวเรือน ,ของเด็กเล่น ,ฉนวนหุ้มสายไฟ ,สายเคเบิ้ล ,เคลือบหลังพรม ,ผ้าใบพลาสติก ,แผ่นฟิล์มสำหรับการบรรจุหีบห่อ , แผ่นฟิล์มที่ใช้ในการเกษตร",
    reduce: 13,
    avgprice: 54,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    pic: require("../../../assets/images/can.png"),
    id: "5",
    name: "กระป๋องอะลูมิเนียม",
    description: "ป๋องเนียม",
    iconmain: [
      "https://thaibeveragecan.com/wp-content/uploads/2023/03/beverage-cans-set-blank-aluminum-packaging-1024x683.jpg",
    ],
    picture: [
      require("../../../assets/images/trash/can1.png"),
      require("../../../assets/images/trash/canwarn.png"),
      require("../../../assets/images/trash/cancorrect.png"),
    ],
    typeM:
      "กระป๋องอะลูมิเนียมเป็นหนึ่งในบรรจุภัณฑ์ที่ถูกยกให้เป็นบรรจุภัณฑ์ที่เป็นมิตรกับสิ่งแวดล้อมมากที่สุด เพราะนอกจากจะมีคุณสมบัติที่เบา พกพาง่าย แข็งแรง และปกป้องเครื่องดื่มได้ดีแล้ว กระป๋องอะลูมิเนียมส่วนใหญ่ยังผลิตมาจากกระป๋องอะลูมิเนียมใช้แล้วที่ผ่านการรีไซเคิล ซึ่งช่วยลดขยะและลดการใช้ทรัพยากรใหม่ได้มหาศาล ก่อนอื่นเรามาทำความรู้จักกับ 'กระป๋องอะลูมิเนียม' บรรจุภัณฑ์ซึ่งเป็นที่นิยม นำมาบรรจุเครื่องดื่มประเภทต่างๆ ไม่ว่าจะเป็นน้ำอัดลม น้ำผลไม้ กาแฟ นมสด ฯลฯ เพราะกระป๋องอะลูมิเนียมเหล่านี้ มีคุณสมบัติที่ทนทานต่อการกัดกร่อน ทนต่อการซึมผ่านของความชื้น อากาศ ก๊าซ และกลิ่น ไม่ให้ออกไปภายนอก ในทางตรงกันข้ามยังสามารถป้องกันอากาศ แสงแดด และสิ่งแปลกปลอมจากภายนอกที่จะมาสัมผัสกับเครื่องดื่มในกระป๋องได้เป็นอย่างดี ซึ่งมีผลต่อการรักษาคุณภาพของเครื่องดื่มที่อยู่ภายในให้คงรสชาติไว้ได้ยาวนาน ตามอายุของผลิตภัณฑ์นั้นๆ ",
    reduce: 14,
    avgprice: 55,
    submat: ["peter", "card", "can", "fan"],
  },
  {
    pic: require("../../../assets/images/paper.png"),
    id: "6",
    name: "กระดาษขาวดำ",
    description: "กระดาษปอนด์ขาว กระดาษคอมพิวเตอร์",
    iconmain: [
      "https://www.quinl.com/contentImages/images/1446264177_887579.jpg",
    ],
    picture: [
      require("../../../assets/images/trash/paper1.png"),
      require("../../../assets/images/trash/paperwarn.png"),
      require("../../../assets/images/trash/papercorrect.png"),
    ],
    typeM:
      "กระดาษ เป็นวัสดุที่ผลิตขึ้นมาสำหรับการจดบันทึก มีประวัติศาสตร์ยาวนาน เชื่อกันว่ามีการใช้กระดาษครั้งแรก ๆ โดยชาวอียิปต์และชาวจีนโบราณ แต่กระดาษในยุคแรก ๆ ล้วนผลิตขึ้นเพื่อการจดบันทึกด้วยกันทั้งสิ้น จึงกล่าวได้ว่าระบบการเขียนคือแรงผลักดันให้เกิดการผลิตกระดาษขึ้นในโลก ปัจจุบันกระดาษไม่ได้มีประโยชน์ในการใช้จดบันทึกตัวหนังสือ หรือข้อความ เท่านั้น ยังใช้ประโยชน์อื่น ๆ ได้มากมาย เช่น กระดาษชำระ กระดาษห่อของขวัญ กระดาษลูกฟูกสำหรับทำกล่อง เป็นต้น ",
    reduce: 15,
    avgprice: 56,
    submat: ["peter", "card", "can", "fan"],
  },
];

const router = useRouter();
export default function home() {
  // const headerHeight = useHeaderHeight();
  return (
    <ScrollView bg={"$green5Light"} f={1}>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      {/* <SelectTrashMaterial /> */}
      {/* <DialogDemo /> */}
      {/* <Circle w={"100%"} h={"60%"} bg={"$green10Light"} /> */}
      {/* <Button onPress={() => router.push("/mockFormStore")}>
        go to Form Store
      </Button>
      <Button onPress={() => router.push("/(tabs)/storeProfile")}>
        go to Store
      </Button> */}

      <Stack space={"$8"} pb={"$8"}>
        <Image
          className="h-full w-full absolute"
          source={require("../../../assets/images/background4.png")}
        />
        {/* <Text ta={"center"} mt={"$4"} className="text-xl font-bold ">
          Trash2Cash
        </Text> */}
        <Stack space={"$4"}>
          <View
            style={{
              alignSelf: "center",
              width: "90%",
              height: 250,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <MiniMap />
          </View>
          <Stack jc={"center"} ai={"center"}>
            <Button
              w={"90%"}
              onPress={() => router.push("/(map)/nearbyRanking")}
              style={{ backgroundColor: colors.green4 }}
            >
              <Text fos={"$5"} className="font-bold" color={"$green1Light"}>
                อันดับร้านใกล้ฉัน
              </Text>
            </Button>
          </Stack>

          <XStack
            alignItems="center"
            jc={"space-between"}
            marginHorizontal={"$4"}
          >
            <H4 className="font-bold">วัสดุรีไซเคิล</H4>
            <TouchableOpacity onPress={() => router.push("/search")}>
              <Text>ดูทั้งหมด</Text>
            </TouchableOpacity>
          </XStack>
          <FlatList
            contentContainerStyle={{ gap: 20, paddingHorizontal: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => BoxTrash(item)}
          />
        </Stack>

        {/* <Text ta={"center"} className="text-xl font-bold" color={"$green8Dark"}>
          สถิติรวม
        </Text> */}

        {/* <Stack jc={"center"} ai={"center"} space={"$5"}>
          <XStack space={"$4"}> */}
        {/* <YStack space="$4">
              <Square w={180} h={200} br={20} backgroundColor="$green9Dark">
                <YStack space={"$3"}>
                  <Text fos={"$6"} color={"$red1Light"} className="font-bold">
                    ลด co2 ไปแล้ว
                  </Text>
                  <Text
                    color={"$red1Light"}
                    className="font-bold"
                    fos={"$8"}
                    ta={"center"}
                  >
                    90709{"     "}
                    <Text fos={"$5"} color={"$gray5Light"}>
                      kCO2e
                    </Text>
                  </Text>

                  <MaterialCommunityIcons
                    name="molecule-co2"
                    size={48}
                    color="white"
                  />
                </YStack>
              </Square>
              <Square w={180} h={150} br={20} bg={"$green9Dark"}>
                <YStack space={"$2"} mt={"$3"}>
                  <Text fos={"$6"} color={"$red1Light"} className="font-bold">
                    เทียบเท่าปลูกต้นไม้
                  </Text>
                  <Text
                    color={"$red1Light"}
                    ta={"center"}
                    fos={"$8"}
                    className="font-bold"
                  >
                    9070{"     "}
                    <Text fos={"$5"} color={"$gray5Light"}>
                      ต้น
                    </Text>
                  </Text>
                  <MaterialCommunityIcons
                    name="tree-outline"
                    size={48}
                    color="white"
                  />
                </YStack>
              </Square>
            </YStack> */}

        {/* <YStack space={"$4"}>
              <Square w={160} h={150} br={20} bg={"$green9Dark"}>
                <YStack space={"$2"}>
                  <Text fos={"$6"} color={"$red1Light"} className="font-bold">
                    ลดขยะ
                  </Text>
                  <Text fos={"$8"} color={"$red1Light"} className="font-bold">
                    9070{"     "}
                    <Text fos={"$5"} color={"$gray5Light"}>
                      กก.
                    </Text>
                  </Text>
                  <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={48}
                    color="white"
                  />
                </YStack>
              </Square>
              <Square w={160} h={200} br={20} bg={"$green9Dark"}>
                <YStack space={"$4"}>
                  <Text fos={"$6"} color={"$red1Light"} className="font-bold">
                    ผู้ร่วมช่วยโลก
                  </Text>
                  <Text
                    fos={"$8"}
                    color={"$red1Light"}
                    ta={"center"}
                    className="font-bold"
                  >
                    922{"     "}
                    <Text fos={"$5"} color={"$gray5Light"}>
                      คน
                    </Text>
                  </Text>
                  <Stack ml={"$3"}>
                    <MaterialCommunityIcons
                      name="account-group-outline"
                      size={48}
                      color="white"
                    />
                  </Stack>
                </YStack>
              </Square>
            </YStack> */}
        {/* </XStack>
        </Stack> */}

        {/* <Image source={require("../../../assets/images/co2.png")} /> */}
        {/* <Button
          alignSelf="center"
          size="$6"
          onPress={() => router.push("/FormApprove")}
        >
          go to form approve
        </Button>
        <Button
          alignSelf="center"
          size="$6"
          // onPress={() => router.push("/(admin)/adminApprove")}
        >
          only for admin
        </Button> */}

        {/* <Link href={"/(thirds)/history"} asChild> */}
        {/* <Button


        alignSelf="center"
        size="$6"
        onPress={() => router.push("/(thirds)/history")}
      >
        go to admin Approve
      </Button> */}
        {/* </Link> */}
        {/* <Button
          alignSelf="center"
          size="$6"
          onPress={() => router.push("/formStore")}
        >
          go to form store
        </Button>
        <Button
          alignSelf="center"
          size="$6"
          onPress={() => router.push("/formSeller")}
        >
          go to form seller
        </Button>
        <Button
          alignSelf="center"
          size="$6"
          onPress={() => router.push("/(admin)/adminApprove")}
        >
          Approve ADmin
        </Button>
        <Button
          alignSelf="center"
          size="$6"
          onPress={() => router.push("/FormApprove")}
        >
          Form Approve
        </Button> */}
        {/* <Button
        alignSelf="center"
        size="$6"
        onPress={() => router.push("/detailStore/66")}
      >
        go to detail Store
      </Button>
      <Button
        alignSelf="center"
        size="$6"
        onPress={() => router.push("/detailStore/66")}
      >
        go to detail Store
      </Button> */}

        {/* </Link> */}
        {/* <SwitchDemo /> */}
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      </Stack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});

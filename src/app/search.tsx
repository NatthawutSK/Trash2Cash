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

	{ id: "1",name: "ขวดแก้ว", description: "แตกขาว แก้วใส เศษแก้วขาว" , iconmain:["https://www.cospak.com.au/productimages/AG118FR.jpg"],picture:[require("../../assets/images/trash/glass1.png"), require("../../assets/images/trash/glass2.png")], typeM: "plastic1", reduce: 10, avgprice: 51, submat:["peter", "card", "can", "fan"] },
	{ id: "2",name: "กระดาษกล่อง", description: "กระดาษคราฟท์ กระดาษลั" , iconmain:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrjuv-Pj-m8UoDMWPL12naUSS4O14a8kt5A&usqp=CAU"],picture:[require("../../assets/images/trash/box1.png"), require("../../assets/images/trash/boxwarn.png"), require("../../assets/images/trash/boxcorrect.png")], typeM: "plastic2", reduce: 11, avgprice: 52, submat:["peter", "card", "can", "fan"] },
	{ id: "3",name: "ขวด PET ใส", description: "ขวดกุ๊ก ขวดใสเหนียว ขวดเพชร" , iconmain:["https://www.imcofoodpack.com/assets/img/products/lists/2/2925%20350%20ml%20B.png"],picture:[require("../../assets/images/trash/bottle1.png"), require("../../assets/images/trash/bottlewarn.png"), require("../../assets/images/trash/bottlecorrect.png")], typeM: "plastic3", reduce: 12, avgprice: 53, submat:["peter", "card", "can", "fan"] },
	{ id: "4",name: "ถุง/ฟิล์ม ยืด PE", description: "ถุงหนียว ถุงก็อบแก๊บ ถุงยืดได้" , iconmain:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQxFgOL02x_cGM6XJjaVniCmWz1o3QJL5log&usqp=CAU"],picture:[require("../../assets/images/trash/plastic1.png"), require("../../assets/images/trash/plasticwarn.png"), require("../../assets/images/trash/plasticcorrect.png")], typeM: "plastic4", reduce: 13, avgprice: 54, submat:["peter", "card", "can", "fan"] },
	{ id: "5",name: "กระป๋องอะลูมิเนียม", description: "ป๋องเนียม" , iconmain:["https://thaibeveragecan.com/wp-content/uploads/2023/03/beverage-cans-set-blank-aluminum-packaging-1024x683.jpg"],picture:[require("../../assets/images/trash/can1.png"), require("../../assets/images/trash/canwarn.png"), require("../../assets/images/trash/cancorrect.png")], typeM: "plastic5", reduce: 14, avgprice: 55, submat:["peter", "card", "can", "fan"] },
	{ id: "6",name: "กระดาษขาวดำ", description: "กระดาษปอนด์ขาว กระดาษคอมพิวเตอร์" , iconmain:["https://www.quinl.com/contentImages/images/1446264177_887579.jpg"],picture:[require("../../assets/images/trash/paper1.png"), require("../../assets/images/trash/paperwarn.png"), require("../../assets/images/trash/papercorrect.png")], typeM: "plastic6", reduce: 15, avgprice: 56, submat:["peter", "card", "can", "fan"] },

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
									(item.name.toLowerCase()).includes(search.toLowerCase())
								)
							);
							console.log(data);
						}
						else{
							setData2(
								DATA2.filter((item) =>
									(item.name.toLowerCase()).includes(search.toLowerCase())
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
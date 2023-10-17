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

type Props = {};
const Tab = createMaterialTopTabNavigator();
const DATA = [
	{
		id: "1",
		name: "ขวด PET ใส",
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
		name: "ขวดแก้ว",
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
		name: "กระดาษกล่อง",
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
		name: "ถุงฟิล์ม/ยืด",
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
		name: "กระป๋องอลูมิเนียม",
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
		name: "กระดาษขาวดำ",
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
									item.name.includes(search)
								)
							);
							console.log(data);
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
						children={() => <FlatListStore data={DATA2} />}
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

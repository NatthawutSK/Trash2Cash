import React, { useLayoutEffect, useState } from "react";
import { Stack } from "tamagui";
import { useNavigation } from "expo-router";
import { MatProps } from "@/components/MaterialItem";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FlatList } from "react-native-gesture-handler";
import FlatListStore from "@/components/FlatListStore";
import FlatListMaterial from "@/components/FlatListMaterial";

type Props = {};
const Tab = createMaterialTopTabNavigator();
const DATA = [
	{ id: "1",name: "ถุงฟิล์ม ยืด PE1", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ4" ,picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg"], typeM: "plastic1", reduce: 10, avgprice: 51, submat:["peter", "card", "can", "fan"] },
	{ id: "2",name: "ถุงฟิล์ม ยืด PE2", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1" ,picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg"], typeM: "plastic2", reduce: 11, avgprice: 52, submat:["peter", "card", "can", "fan"] },
	{ id: "3",name: "ถุงฟิล์ม ยืด PE3", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3" ,picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg"], typeM: "plastic3", reduce: 12, avgprice: 53, submat:["peter", "card", "can", "fan"] },
	{ id: "4",name: "ถุงฟิล์ม ยืด PE4", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2" ,picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg"], typeM: "plastic4", reduce: 13, avgprice: 54, submat:["peter", "card", "can", "fan"] },
	{ id: "5",name: "ถุงฟิล์ม ยืด PE5", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2" ,picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg"], typeM: "plastic5", reduce: 14, avgprice: 55, submat:["peter", "card", "can", "fan"] },
	{ id: "6",name: "ถุงฟิล์ม ยืด PE6", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3" ,picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg"], typeM: "plastic6", reduce: 15, avgprice: 56, submat:["peter", "card", "can", "fan"] },
	{ id: "7",name: "ถุงฟิล์ม ยืด PE7", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1" ,picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg"], typeM: "plastic7", reduce: 16, avgprice: 57, submat:["peter", "card", "can", "fan"] },
	{ id: "8",name: "ถุงฟิล์ม ยืด PE8", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ4" ,picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg"], typeM: "plastic8", reduce: 17, avgprice: 58, submat:["peter", "card", "can", "fan"] },
	{ id: "9",name: "ถุงฟิล์ม ยืด PE9", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ4" ,picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg"], typeM: "plastic9", reduce: 18, avgprice: 59, submat:["peter", "card", "can", "fan"] },
	{ id: "10",name: "ถุงฟิล์ม ยืด PE10", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1",picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://ichef.bbci.co.uk/news/640/cpsprodpb/FFEF/production/_114791556_045a3336-8ab5-4cd4-90fc-ef42c5562d76.jpg"], typeM: "plastic10", reduce: 19, avgprice: 60, submat:["peter", "card", "can", "fan"] },
	{ id: "11",name: "ถุงฟิล์ม ยืด PE11", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3",picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://ichef.bbci.co.uk/news/640/cpsprodpb/FFEF/production/_114791556_045a3336-8ab5-4cd4-90fc-ef42c5562d76.jpg"], typeM: "plastic11", reduce: 20, avgprice: 62, submat:["peter", "card", "can", "fan"] },
	{ id: "12",name: "ถุงฟิล์ม ยืด PE12", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2",picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://ichef.bbci.co.uk/news/640/cpsprodpb/FFEF/production/_114791556_045a3336-8ab5-4cd4-90fc-ef42c5562d76.jpg"], typeM: "plastic12", reduce: 21, avgprice: 63, submat:["peter", "card", "can", "fan"] },
	{ id: "13",name: "ถุงฟิล์ม ยืด PE13", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2",picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://ichef.bbci.co.uk/news/640/cpsprodpb/FFEF/production/_114791556_045a3336-8ab5-4cd4-90fc-ef42c5562d76.jpg"], typeM: "plastic13", reduce: 22, avgprice: 64, submat:["peter", "card", "can", "fan"] },
	{ id: "14",name: "ถุงฟิล์ม ยืด PE14", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3",picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://ichef.bbci.co.uk/news/640/cpsprodpb/FFEF/production/_114791556_045a3336-8ab5-4cd4-90fc-ef42c5562d76.jpg"], typeM: "plastic14", reduce: 23, avgprice: 65, submat:["peter", "card", "can", "fan"] },
	{ id: "15",name: "ถุงฟิล์ม ยืด PE15", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1",picture:["https://www.onep.go.th/wp-content/uploads/2020/12/envinews-20201222-2.jpg", "https://ichef.bbci.co.uk/news/640/cpsprodpb/FFEF/production/_114791556_045a3336-8ab5-4cd4-90fc-ef42c5562d76.jpg"], typeM: "plastic15", reduce: 24, avgprice: 66, submat:["peter", "card", "can", "fan"] },
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

const search = (props: Props) => {
	const navigation = useNavigation();
	const [search, setSearch] = useState<string>("");
	const [data, setData] = useState<MatProps[]>(DATA);
	useLayoutEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				inputType: "text",
				placeholder: "ค้นหา",
				// autoFocus: true,
				onChangeText: (event: any) => {
					setData(
						data.filter((item) =>
							item.name.includes(
								event.nativeEvent.text.toUpperCase()
							)
						)
					);
				},
				hintTextColor: "gray",
				obscureBackground: false,
				// disableBackButtonOverride: true,
				// search bar options
			},
		});
	}, [navigation]);

	return (
		<Stack ac={"center"} h={"100%"}>
			<Tab.Navigator initialRouteName="ฮีโร่" screenOptions={{}}>
				<Tab.Screen
					name="ฮีโร่"
					children={() => <FlatListStore data={DATA2} />}
				/>
				<Tab.Screen
					name="วัสดุรีไซเคิล"
					children={() => <FlatListMaterial data={DATA} />}
				/>
			</Tab.Navigator>
		</Stack>
	);
};

export default search;

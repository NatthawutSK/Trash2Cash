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
	{ name: "ถุงฟิล์ม ยืด PE1", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ4" },
	{ name: "ถุงฟิล์ม ยืด PE2", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1" },
	{ name: "ถุงฟิล์ม ยืด PE3", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3" },
	{ name: "ถุงฟิล์ม ยืด PE4", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2" },
	{ name: "ถุงฟิล์ม ยืด PE5", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2" },
	{ name: "ถุงฟิล์ม ยืด PE6", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3" },
	{ name: "ถุงฟิล์ม ยืด PE7", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1" },
	{ name: "ถุงฟิล์ม ยืด PE8", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ4" },
	{ name: "ถุงฟิล์ม ยืด PE9", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ4" },
	{ name: "ถุงฟิล์ม ยืด PE10", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1" },
	{ name: "ถุงฟิล์ม ยืด PE11", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3" },
	{ name: "ถุงฟิล์ม ยืด PE12", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2" },
	{ name: "ถุงฟิล์ม ยืด PE13", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ2" },
	{ name: "ถุงฟิล์ม ยืด PE14", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ3" },
	{ name: "ถุงฟิล์ม ยืด PE15", description: "ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ1" },
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

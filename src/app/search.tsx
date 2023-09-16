import React, { useLayoutEffect, useState } from "react";
import {
	View,
	Text,
	Button,
	H5,
	Tabs,
	Stack,
	YStack,
	XStack,
	Avatar,
	Separator,
	ScrollView,
} from "tamagui";
import { Star, Store } from "@tamagui/lucide-icons";
import { router, useNavigation, useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import MaterialItem, { MatProps } from "@/components/MaterialItem";
import { FlatList } from "react-native";

type Props = {};

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

const renderMaterial = (item: { item: MatProps }) => {
	return <MaterialItem {...item.item} />;
};
const StoreItem = () => {
	return (
		<YStack w={"100%"}>
			<XStack
				alignItems="center"
				space="$6"
				jc={"space-between"}
				bg={"$green10Light"}
				w={"100%"}
			>
				<XStack ai={"center"} ac={"center"} space={"$4"}>
					<Avatar circular size="$6">
						<Avatar.Image src="http://placekitten.com/200/300" />
						<Avatar.Fallback bc="red" />
					</Avatar>
					<YStack space={"$1"}>
						<Text fow={"800"} color={"white"}>
							ร้านรีป่ะ
						</Text>
						<Text>วัสดุที่รับ</Text>
						<XStack space={"$2"}>
							<FontAwesome5 name="wine-bottle" size={18} />
							<FontAwesome5 name="box" size={18} />
							<FontAwesome5 name="file" size={18} />
							<FontAwesome5 name="glass-whiskey" size={18} />
						</XStack>
					</YStack>
				</XStack>
				<YStack ai={"center"} space={"$1"}>
					<Text>
						5.0 {""} <Star size={18} />
					</Text>
					<Store size={24} />
				</YStack>
			</XStack>
			<Separator alignSelf="stretch" />
		</YStack>
	);
};

const search = (props: Props) => {
	const navigation = useNavigation();
	const [search, setSearch] = useState<string>("");

	useLayoutEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				placeholder: "ค้นหา",
				// autoFocus: true,
				onChangeText: (event: any) => setSearch(event.nativeEvent.text),
				// onBlur: () => {
				// 	console.log("Searching" + search);
				//  handleSearch();
				// },
				hintTextColor: "gray",
				obscureBackground: false,
				// disableBackButtonOverride: true,
				// search bar options
			},
		});
	}, [navigation]);
	return (
		<Stack ac={"center"}>
			<Tabs fd={"column"} defaultValue="tab1" width={"100%"}>
				<YStack>
					<Tabs.List
						disablePassBorderRadius
						ac={"center"}
						loop={false}
						space
					>
						<Tabs.Tab flex={1} value="tab1">
							<Text>TAB1</Text>
						</Tabs.Tab>
						<Tabs.Tab flex={1} value="tab2">
							<Text>TAB2</Text>
						</Tabs.Tab>
					</Tabs.List>
				</YStack>
				<Tabs.Content value="tab1" h={"100%"}>
					<Stack h={"100%"}>
						<FlatList
							showsVerticalScrollIndicator={false}
							data={DATA}
							renderItem={renderMaterial}
							keyExtractor={(item, index) => index.toString()}
							// Performance settings
						/>
					</Stack>
				</Tabs.Content>
				<Tabs.Content value="tab2">
					<ScrollView>
						<StoreItem></StoreItem>
						<StoreItem></StoreItem>
						<StoreItem></StoreItem>
						<StoreItem></StoreItem>
						<StoreItem></StoreItem>
						<StoreItem></StoreItem>
						<StoreItem></StoreItem>
						<StoreItem></StoreItem>
						<StoreItem></StoreItem>
						<StoreItem></StoreItem>
						<StoreItem></StoreItem>
						<StoreItem></StoreItem>
					</ScrollView>
				</Tabs.Content>
			</Tabs>
		</Stack>
	);
};

export default search;

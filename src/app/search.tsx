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
} from "tamagui";
import { Star, Store } from "@tamagui/lucide-icons";
import { router, useNavigation, useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = {};

const VatsduItem = () => {
	return (
		<YStack w={"100%"}>
			<XStack
				alignItems="center"
				space="$6"
				p={10}
				bg={"$green10Light"}
				w={"100%"}
			>
				<Avatar circular size="$6">
					<Avatar.Image src="http://placekitten.com/200/300" />
					<Avatar.Fallback bc="red" />
				</Avatar>
				<YStack>
					<Text fow={"800"} color={"white"}>
						ถุงฟิล์ม ยืด PE
					</Text>
					<Text>ถุงก็อบแก็บ มาเดินกุ๊บกั๊บ</Text>
				</YStack>
			</XStack>
			<Separator alignSelf="stretch" />
		</YStack>
	);
};

const StoreItem = () => {
	return (
		<YStack w={"100%"}>
			<XStack
				alignItems="center"
				space="$6"
				p={10}
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
				//   console.log("Searching" + search);
				//   handleSearch();
				// },
				hintTextColor: "gray",
				// obscureBackground: false,
				// disableBackButtonOverride: true,
				// search bar options
			},
		});
	}, [navigation]);
	return (
		<Stack ac={"center"}>
			<Tabs
				fd={"column"}
				defaultValue="tab1"
				width={"100%"}
				overflow="hidden"
			>
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
				<Tabs.Content
					value="tab1"
					jc={"center"}
					ai={"center"}
					ac={"center"}
				>
					<VatsduItem></VatsduItem>
					<VatsduItem></VatsduItem>
					<VatsduItem></VatsduItem>
					<VatsduItem></VatsduItem>
					<VatsduItem></VatsduItem>
					<VatsduItem></VatsduItem>
					<VatsduItem></VatsduItem>
					<VatsduItem></VatsduItem>
					<VatsduItem></VatsduItem>
					<VatsduItem></VatsduItem>
					<VatsduItem></VatsduItem>
					<VatsduItem></VatsduItem>
				</Tabs.Content>
				<Tabs.Content value="tab2">
					<StoreItem></StoreItem>
					<StoreItem></StoreItem>
					<StoreItem></StoreItem>
					<StoreItem></StoreItem>
				</Tabs.Content>
			</Tabs>
		</Stack>
	);
};

export default search;

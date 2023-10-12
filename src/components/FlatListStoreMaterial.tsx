import { View, Text, FlatList } from "react-native";
import React from "react";
import StoreMaterialItem, { StoreMaterialProps } from "./StoreMaterialItem";
import { Stack } from "tamagui";

type Props = { name: string };
const DATA = [
	{
		name: "ร้าน รี",
		mat: ["wine-bottle", "box", "file", "glass-whiskey"],
		star: 5.0,
	},
	{
		name: "ร้าน ไซ",
		mat: ["file", "glass-whiskey"],
		star: 4.3,
	},
	{
		name: "ร้าน เคิ้ล",
		mat: ["wine-bottle", "box"],
		star: 3.3,
	},
	{
		name: "ร้าน รีไซ",
		mat: ["box", "glass-whiskey"],
		star: 2.3,
	},
	{
		name: "ร้าน รีเคิล",
		mat: ["glass-whiskey"],
		star: 3.7,
	},
	{
		name: "ร้าน รี",
		mat: ["wine-bottle", "box", "file", "glass-whiskey"],
		star: 5.0,
	},
	{
		name: "ร้าน ไซ",
		mat: ["file", "glass-whiskey"],
		star: 4.3,
	},
	{
		name: "ร้าน เคิ้ล",
		mat: ["wine-bottle", "box"],
		star: 3.3,
	},
	{
		name: "ร้าน รีไซ",
		mat: ["box", "glass-whiskey"],
		star: 2.3,
	},
	{
		name: "ร้าน รีเคิล",
		mat: ["glass-whiskey"],
		star: 3.7,
	},
];
const renderStoreMaterial = (item: { item: StoreMaterialProps }) => {
	return <StoreMaterialItem {...item.item} />;
};

const FlatListStoreMaterial = ({ data }: { data: StoreMaterialProps[] }) => {
	return (
		<Stack p={20}>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={data}
				renderItem={renderStoreMaterial}
				keyExtractor={(item, index) => index.toString()}
				ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
				// Performance settings
				removeClippedSubviews={true}
				initialNumToRender={7}
				maxToRenderPerBatch={10}
				windowSize={10}
			/>
		</Stack>
	);
};

export default FlatListStoreMaterial;

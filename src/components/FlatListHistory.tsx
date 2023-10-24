import { View, Text, FlatList } from "react-native";
import React from "react";
import StoreItem from "./StoreItem";
import HistoryItem, { HistoryProps } from "./HistoryItem";
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
];
const renderHistory = (item: { item: any }) => {
	return <HistoryItem {...item.item} />;
};

const FlatListHistory = ({ data }: { data: any[] }) => {
	return (
		<Stack p={20}>
			{data.length === 0 && (
				<Text className="text-center text-2xl font-bold">
					ไม่มีประวัติ
				</Text>
			)}
			<FlatList
				showsVerticalScrollIndicator={false}
				data={data}
				renderItem={renderHistory}
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

export default FlatListHistory;

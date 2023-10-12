import { View, Text, FlatList } from "react-native";
import React from "react";
import StoreItem, { StoreProps } from "./StoreItem";
import { Button, Stack } from "tamagui";
import { router } from "expo-router";

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
const renderStore = (item: { item: StoreProps }) => {
	return <StoreItem {...item.item} />;
};

const FlatListNearbyStore = ({ data }: { data: StoreProps[] }) => {
	return (

			<FlatList
				showsVerticalScrollIndicator={false}
				data={data}
				renderItem={renderStore}
				keyExtractor={(item, index) => index.toString()}
				ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
				// Performance settings
				removeClippedSubviews={true}
				initialNumToRender={7}
				maxToRenderPerBatch={10}
				windowSize={10}
			/>
			

	);
};

export default FlatListNearbyStore;

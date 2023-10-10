import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "tamagui";
import { Cross, X } from "@tamagui/lucide-icons";
import { Detail } from "@/app/(tabs)/qrCodeSeller";

type Props = {
	list: Detail[];
	removeItem: (index: number) => void;
};

const SellingFlatList = ({ list, removeItem }: Props) => {
	return (
		<FlatList
			data={list}
			renderItem={({ item, index }) => {
				return (
					<View
						key={index}
						className="flex-row justify-between items-center bg-[#3C6255] rounded-lg px-5 py-3 mt-2"
					>
						<Text className="text-white text-sm">{item.name}</Text>
						<Text className="text-white text-sm">
							{item.weight} กก.
						</Text>
						<Button
							icon={X}
							color={"white"}
							unstyled
							onPress={() => {
								removeItem(index);
							}}
						></Button>
					</View>
				);
			}}
			keyExtractor={(_, index) => index.toString()}
		/>
	);
};

export default SellingFlatList;

const styles = StyleSheet.create({});

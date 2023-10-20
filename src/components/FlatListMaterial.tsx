import { View, Text, FlatList } from "react-native";
import React from "react";
import StoreItem, { StoreProps } from "./StoreItem";
import MaterialItem, { MatProps } from "@/components/MaterialItem";
import { Stack } from "tamagui";

type Props = {};

const renderMaterial = (item: { item: MatProps }) => {
	return <MaterialItem {...item.item} />;
};

const FlatListMaterial = ({ data }: { data: MatProps[] }) => {
	return (
		<Stack p={20}>
			<FlatList
				contentContainerStyle={{
					gap: 10,
					paddingBottom: 80,
				}}
				showsVerticalScrollIndicator={false}
				data={data}
				renderItem={renderMaterial}
				keyExtractor={(item, index) => index.toString()}
				// Performance settings
				removeClippedSubviews={true}
			/>
		</Stack>
	);
};

export default FlatListMaterial;

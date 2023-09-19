import { View, Text, FlatList } from "react-native";
import React from "react";
import { Stack, YStack } from "tamagui";
import { DATARank } from "./../app/(tabs)/scoreRanking";
import RankingUser, { RankingUserProps } from "./RankingUser";

type Props = {};

const renderRankingUser = (item: RankingUserProps) => {
	return <RankingUser {...item} />;
};

const FlatlistRanking = ({ data }: { data: RankingUserProps[] }) => {
	return (
		<YStack
			flex={1}
			jc={"center"}
			ai={"center"}
			ac={"center"}
			px={10}
			pt={10}
			bc={"$green5Light"}
		>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={data}
				renderItem={({ item, index }) =>
					renderRankingUser({ ...item, index: index + 1 })
				}
				keyExtractor={(item, index) => index.toString()}
				// Performance settings
				removeClippedSubviews={true}
				initialNumToRender={7}
				maxToRenderPerBatch={10}
				windowSize={10}
			/>
		</YStack>
	);
};

export default FlatlistRanking;

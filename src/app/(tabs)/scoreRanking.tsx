import React, { useState } from "react";
import {
	H5,
	Separator,
	SizableText,
	Tabs,
	YStack,
	TabsContentProps,
	Avatar,
	Stack,
	SizeTokens,
	Text,
	H4,
	View,
	Button,
	XStack,
	ColorTokens,
} from "tamagui";
import { FlatList } from "react-native";
import { router } from "expo-router";
import RankingUser, { RankingUserProps } from "./../../components/RankingUser";
import FlatlistRanking from "@/components/FlatlistRanking";
import RankTabs from "@/components/RankTab";
import { colors } from "@/constants/Colors";

type Props = {};

export const DATARank: RankingUserProps[] = [
	{
		id: 1,
		name: "test1 surr1",
		img: "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=0",
		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 2,
		name: "test2 surr2",
		img: "https://picsum.photos/200",
		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 3,
		name: "test3 surr3",

		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 4,
		name: "test4",

		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 5,
		name: "Aaaaaaa Gggggg",
		img: "https://picsum.photos/300",
		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 6,
		name: "test5 surr5",

		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 7,
		name: "test6",

		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 8,
		name: "test7 surr7",

		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 9,
		name: "tes8 surr8",

		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 10,
		name: "test9",

		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
];

const Ranking = (props: Props) => {
	return (
		<YStack
			f={1}
			mt={90}
			pb={20}
			ai={"stretch"}
			jc={"center"}
			bc={colors.green3}
		>
			{/* <XStack pt={30} ac={"center"} ai={"center"} jc={"space-evenly"}>
				<Button
					bc={"#1cb60e"}
					color={"#daffd6"}
					br={20}
					onPress={() => setNow(DATA)}
				>
					All Time
				</Button>
				<Button br={20} onPress={() => setNow(DATA2)}>
					This Month
				</Button>
			</XStack>
			<YStack flex={1} jc={"center"} ai={"center"} ac={"center"} p={20}>
				<FlatList
					showsVerticalScrollIndicator={false}
					data={isNow}
					renderItem={({ item, index }) =>
						renderRankingUser({ ...item, index: index + 1 })
					}
					keyExtractor={(item, index) => index.toString()}
					// Performance settings
					removeClippedSubviews={true} // Unmount components when outside of window
					initialNumToRender={1} // Reduce initial render amount
					maxToRenderPerBatch={1} // Reduce number in each render batch
					windowSize={2} // Reduce the window size
				/> */}

			<RankTabs data={DATARank} />
			<RankingUser {...DATARank[5]} isMe={true} />
			{/* </YStack> */}
		</YStack>
	);
};

export default Ranking;

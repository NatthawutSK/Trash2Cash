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

type Props = {};

export const DATA: RankingUserProps[] = [
	{
		id: 1,
		name: "test1 surr1",

		point: 500,
	},
	{
		id: 2,
		name: "test2 surr2",

		point: 200,
	},
	{
		id: 3,
		name: "test3 surr3",

		point: 200,
	},
	{
		id: 4,
		name: "test4",

		point: 200,
	},
	{
		id: 5,
		name: "Aaaaaaa Gggggg",

		point: 200,
	},
	{
		id: 6,
		name: "test5 surr5",

		point: 200,
	},
	{
		id: 7,
		name: "test6",

		point: 200,
	},
	{
		id: 8,
		name: "test7 surr7",

		point: 200,
	},
	{
		id: 9,
		name: "tes8 surr8",

		point: 200,
	},
	{
		id: 10,
		name: "test9",

		point: 200,
	},
];

const DATA2 = DATA.filter((item) => item.id < 5);
const renderRankingUser = (item: RankingUserProps) => {
	return <RankingUser {...item} />;
};
const Ranking = (props: Props) => {
	const [isNow, setNow] = useState(DATA);
	return (
		<YStack ai={"stretch"} jc={"center"} w={"100%"} h={"100%"}>
			<XStack pt={30} ac={"center"} ai={"center"} jc={"space-evenly"}>
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
					initialNumToRender={7} // Reduce initial render amount
					maxToRenderPerBatch={1} // Reduce number in each render batch
					windowSize={7} // Reduce the window size
				/>
				<RankingUser {...DATA[5]} />
			</YStack>
		</YStack>
	);
};

export default Ranking;

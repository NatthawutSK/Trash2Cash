import React from "react";
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

type Props = {};
type PeopleProps = {
	fullname: string;
	size: SizeTokens;
	rank: number;
	point: number;
	bcol?: ColorTokens | string;
};
export const DATA = [
	{
		id: "1",
		name: "test1 surr1",
		size: "$6",
		point: 500,
	},
	{
		id: "2",
		name: "test1 surr1",
		size: "$4",
		point: 200,
	},
	{
		id: "3",
		name: "test1 surr1",
		size: "$4",
		point: 200,
	},
	{
		id: "4",
		name: "test1",
		size: "$4",
		point: 200,
	},
	{
		id: "5",
		name: "Aaaaaaa Gggggg",
		size: "$4",
		point: 200,
	},
	{
		id: "6",
		name: "test1 surr1",
		size: "$4",
		point: 200,
	},
	{
		id: "7",
		name: "test1",
		size: "$4",
		point: 200,
	},
	{
		id: "8",
		name: "test1 surr1",
		size: "$4",
		point: 200,
	},
	{
		id: "9",
		name: "test1 surr1",
		size: "$4",
		point: 200,
	},
	{
		id: "10",
		name: "test1",
		size: "$4",
		point: 200,
	},
];

const People = ({ fullname, size, rank, point, bcol }: PeopleProps) => {
	return (
		<Stack
			fd={"row"}
			space={10}
			marginVertical={10}
			bc={bcol === undefined ? "green" : bcol}
			br={20}
			p={10}
			jc={"space-between"}
			onPress={() => {
				router.push(`/profileRanking/${rank + 1}`);
			}}
		>
			<View space={10} fd={"row"}>
				<H5 alignSelf="center" color={rank === 0 ? "gold" : "white"}>
					{rank + 1}
				</H5>
				<Avatar circular size={size}>
					<Avatar.Image
						accessibilityLabel="Cam"
						src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
					/>
					<Avatar.Fallback backgroundColor="$blue10" />
				</Avatar>
				<H5 color={rank === 0 ? "gold" : "white"} alignSelf="center">
					{fullname}
				</H5>
			</View>
			<H5
				ac={"flex-end"}
				color={rank === 0 ? "gold" : "white"}
				alignSelf="center"
			>
				{point}
			</H5>
		</Stack>
	);
};

const Ranking = (props: Props) => {
	return (
		<YStack ai={"stretch"} jc={"center"} w={"100%"} h={"100%"}>
			<XStack pt={30} ac={"center"} ai={"center"} jc={"space-evenly"}>
				<Button br={20}>All Time</Button>
				<Button br={20}>This Month</Button>
			</XStack>
			<YStack flex={1} p={20}>
				<FlatList
					data={DATA}
					renderItem={({ item, index }) => (
						<People
							fullname={item.name}
							size={item.size}
							rank={index}
							point={item.point}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>
				<People
					fullname="Aaaaaaa Gggggg"
					size="$5"
					rank={5}
					point={200}
					bcol={"#b23b3b"}
				/>
			</YStack>
		</YStack>
	);
};

export default Ranking;

import { router } from "expo-router";
import {
	Avatar,
	ColorTokens,
	H5,
	SizeTokens,
	Stack,
	View,
	Text,
	YStack,
	H6,
} from "tamagui";

export type RankingUserProps = {
	id: number;
	name: string;
	point: number;
};

const RankingUser = (item: RankingUserProps, index: number) => {
	return (
		<YStack
			fd={"row"}
			bc={
				item.id === 1
					? "gold"
					: item.id === 2
					? "silver"
					: item.id === 3
					? "#CD7F32"
					: "green"
			}
			br={20}
			m={10}
			jc={"space-between"}
			px={10}
			miw={"80%"}
			space={10}
			elevation={15}
			onPress={() => {
				router.push(`/profileRanking/${item.id}`);
			}}
		>
			<Stack space={10} p={5} br={20} fd={"row"}>
				<H5 alignSelf="center" color={"black"}>
					{item.id}
				</H5>
				<Avatar
					circular
					size={item.id === 1 ? "$6" : item.id === 2 ? "$5" : "$4"}
				>
					<Avatar.Image
						accessibilityLabel="Cam"
						src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
					/>
					<Avatar.Fallback backgroundColor="$blue10" />
				</Avatar>
				<H6 color={index === 0 ? "gold" : "white"} alignSelf="center">
					{item.name}
				</H6>
			</Stack>
			<H5
				ac={"flex-end"}
				color={index === 0 ? "gold" : "white"}
				alignSelf="center"
			>
				{item.point}
			</H5>
			{/* <View fd={"row"}>
				<H5
					alignSelf="center"
					color={
						item.id === 1
							? "gold"
							: item.id === 2
							? "silver"
							: item.id === 3
							? "#CD7F32"
							: "green"
					}
				>
					{index + 1}
				</H5>
				<Avatar
					circular
					size={item.id === 1 ? "$6" : item.id === 2 ? "$5" : "$4"}
				>
					<Avatar.Image
						accessibilityLabel="Cam"
						src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
					/>
					<Avatar.Fallback backgroundColor="$blue10" />
				</Avatar>
				<H5 color={index === 0 ? "gold" : "white"} alignSelf="center">
					{item.name}
				</H5>
			</View>
			<H5
				ac={"flex-end"}
				color={index === 0 ? "gold" : "white"}
				alignSelf="center"
			>
				{item.point}
			</H5> */}
		</YStack>
	);
};

const renderRankingUser = (item: { item: RankingUserProps }) => {
	return <RankingUser {...item.item} />;
};
export default renderRankingUser;

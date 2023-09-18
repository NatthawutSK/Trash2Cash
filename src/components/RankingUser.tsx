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
	index?: number;
};

const RankingUser = (item: RankingUserProps) => {
	return (
		<YStack
			fd={"row"}
			bc={
				item.index === 1
					? "gold"
					: item.index === 2
					? "silver"
					: item.index === 3
					? "#CD7F32"
					: "$green8Light"
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
				<H5 alignSelf="center" color={"$green5Light"}>
					{item.index}
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
				<H6 color={"white"} alignSelf="center">
					{item.name}
				</H6>
			</Stack>
			<H5 ac={"flex-end"} color={"white"} alignSelf="center">
				{item.point}
			</H5>
		</YStack>
	);
};

export default RankingUser;
import { UserRankType } from "@/MockData/types";
import { colors } from "@/constants/Colors";
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

type ScoreType = {
	score_trash: number;
	score_carbon: number;
	score_tree: number;
};
type RankingUserProps = {
	isMe?: boolean;
} & UserRankType;

const RankingUser = (item: RankingUserProps) => {
	// console.log(item, "item");
	return (
		<YStack
			fd={"row"}
			bc={colors.green4}
			br={20}
			m={10}
			jc={"space-between"}
			px={10}
			py={2}
			miw={"80%"}
			space={10}
			elevation={5}
			onPress={() => {
				router.push({
					pathname: `/profileRanking/${item.auth_id}`,
					params: {
						img: item.img || "https://picsum.photos/200/300",
						name: item.user_name,
						point: item.score[0].score_trash,
						point_tree: item.score[0].score_tree,
						point_carbon: item.score[0].score_carbon,
					},
				});
			}}
		>
			<Stack space={10} p={5} br={20} fd={"row"} als={"center"}>
				<H5 alignSelf="center" color={"$green5Light"}>
					{item.isMe ? "ME" : item.index}
				</H5>
				<Avatar als={"center"} circular size={"$4"}>
					<Avatar.Image
						accessibilityLabel="Cam"
						src={item.img || "https://picsum.photos/200"}
					/>
					<Avatar.Fallback backgroundColor="$blue10" />
				</Avatar>
				<H6 color={"white"} als="center">
					{item.user_name}
				</H6>
			</Stack>
			<H5 ac={"flex-end"} color={"white"} als="center">
				{item.score[0].score_trash}
			</H5>
		</YStack>
	);
};

export default RankingUser;

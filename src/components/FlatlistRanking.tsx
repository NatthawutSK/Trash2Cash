import { FlatList } from "react-native";
import React from "react";
import { Stack, YStack, Text, View, Avatar } from "tamagui";
import { DATARank } from "./../app/(tabs)/scoreRanking";
import RankingUser from "./RankingUser";
import { colors } from "@/constants/Colors";
import { router } from "expo-router";
import { UserRankType } from "@/MockData/types";

type Props = {};

const renderRankingUser = (item: UserRankType) => {
	return <RankingUser {...item} />;
};

const FlatlistRanking = ({ data }: { data: UserRankType[] }) => {
	// console.log(data[1].score[0].score_trash);
	return (
		<YStack bc={colors.green2} mt={-45}>
			<View h={"40%"} fd={"row"} className="mb-2" jc={"center"} mx={5}>
				<Stack
					bg={colors.green4}
					als={"flex-end"}
					h={"$13"}
					w={115}
					jc={"center"}
					ai={"center"}
					br={15}
					className="m-1"
					onPress={() => {
						router.push({
							pathname: `/profileRanking/${data[1].auth_id}`,
							params: {
								img:
									data[1].img ||
									"https://picsum.photos/200/300",
								name: data[1].user_name,
								point: data[1].score[0].score_trash,
								point_tree: data[1].score[0].score_tree,
								point_carbon: data[1].score[0].score_carbon,
							},
						});
					}}
				>
					<View jc={"center"} ai={"center"} mb={10}>
						<Avatar als={"center"} circular size={"$7"}>
							<Avatar.Image
								accessibilityLabel="Cam"
								src={
									data[1].img
										? data[1].img
										: "https://picsum.photos/300/300"
								}
							/>

							<Avatar.Fallback backgroundColor="$blue10" />
						</Avatar>
						<Text
							className="rounded-xl w-[25px] h-[25px] text-center text-white font-bold absolute bottom-[-10]"
							bg={"red"}
						>
							2
						</Text>
					</View>
					<Text
						ww={"break-word"}
						className="text-base font-bold min-w-[50px] max-w-[90px] text-white "
						numberOfLines={1}
					>
						{data[1].user_name}
					</Text>
					<Text className="font-semibold text-white">
						{data[1].score[0].score_trash} point
					</Text>
				</Stack>
				<Stack
					bg={colors.green4}
					h={"$13"}
					w={120}
					als={"center"}
					p={10}
					jc={"center"}
					ai={"center"}
					br={15}
					className="m-1"
					onPress={() => {
						router.push({
							pathname: `/profileRanking/${data[1].auth_id}`,
							params: {
								img:
									data[0].img ||
									"https://picsum.photos/200/300",
								name: data[0].user_name,
								point: data[0].score[0].score_trash,
								point_tree: data[0].score[0].score_tree,
								point_carbon: data[0].score[0].score_carbon,
							},
						});
					}}
				>
					<View jc={"center"} ai={"center"} mb={10}>
						<Avatar als={"center"} circular size={"$7"}>
							<Avatar.Image
								accessibilityLabel="Cam"
								src={
									data[0].img
										? data[0].img
										: "https://picsum.photos/200/300"
								}
							/>

							<Avatar.Fallback backgroundColor="$blue10" />
						</Avatar>
						<Text
							className="rounded-xl w-[25px] h-[25px] text-center bg-yellow-500 text-white font-bold absolute bottom-[-10]"
							bg={"red"}
						>
							1
						</Text>
					</View>
					<Text
						ww={"break-word"}
						className="text-base font-bold min-w-[50px] max-w-[90px] text-white "
						numberOfLines={1}
					>
						{data[0].user_name}
					</Text>
					<Text className="font-semibold text-white">
						{data[0].score[0].score_trash} point
					</Text>
				</Stack>
				<Stack
					bg={colors.green4}
					als={"flex-end"}
					h={"$13"}
					w={115}
					jc={"center"}
					ai={"center"}
					br={15}
					className="m-1"
					onPress={() => {
						router.push({
							pathname: `/profileRanking/${data[1].auth_id}`,
							params: {
								img:
									data[2].img ||
									"https://picsum.photos/200/300",
								name: data[2].user_name,
								point: data[2].score[0].score_trash,
								point_tree: data[2].score[0].score_tree,
								point_carbon: data[2].score[0].score_carbon,
							},
						});
					}}
				>
					<View jc={"center"} ai={"center"} mb={10}>
						<Avatar als={"center"} circular size={"$7"}>
							<Avatar.Image
								accessibilityLabel="Cam"
								src={
									data[2].img ||
									"https://picsum.photos/300/300"
								}
							/>

							<Avatar.Fallback backgroundColor="$blue10" />
						</Avatar>
						<Text className="rounded-xl w-[25px] h-[25px] text-center text-white font-bold absolute bottom-[-10] bg-orange-600">
							3
						</Text>
					</View>
					<Text
						ww={"break-word"}
						className="text-base font-bold min-w-[50px] max-w-[90px] text-white "
						numberOfLines={1}
					>
						{data[2].user_name}
					</Text>
					<Text className="font-semibold text-white">
						{data[2].score[0].score_trash} point
					</Text>
				</Stack>
			</View>
			<FlatList
				showsVerticalScrollIndicator={false}
				style={{
					width: "100%",
					height: "60%",
					paddingHorizontal: 10,
				}}
				data={data.filter((val: any, i: number) => {
					return i > 2;
				})}
				renderItem={({ item, index }) =>
					renderRankingUser({ ...item, index: index + 4 })
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

import { FlatList } from "react-native";
import React from "react";
import { Stack, YStack, Text, View, Avatar } from "tamagui";
import { DATARank } from "./../app/(tabs)/scoreRanking";
import RankingUser, { RankingUserProps } from "./RankingUser";
import { colors } from "@/constants/Colors";
import { router } from "expo-router";

type Props = {};

const renderRankingUser = (item: RankingUserProps) => {
	return <RankingUser {...item} />;
};

const FlatlistRanking = ({ data }: { data: RankingUserProps[] }) => {
	return (
		<YStack jc={"center"} ai={"center"} bc={colors.green1}>
			<View
				h={"40%"}
				fd={"row"}
				space={"$1"}
				className="mb-2"
				jc={"center"}
				mx={5}
			>
				{/* {data
					.filter((val, i) => {
						return i < 3;
					})
					.map((val, index) => {
						return (
							<Stack
								key={val.id}
								bg={colors.green4}
								als={
									index == 0
										? "flex-start"
										: index == 1
										? "center"
										: "flex-end"
								}
								h={"$13"}
								w={115}
								jc={"center"}
								ai={"center"}
								br={15}
								space={"$2"}
								onPress={() => {
									router.push({
										pathname: `/profileRanking/${val.id}`,
										params: {
											img: val.img
												? val.img
												: "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
											name: val.name,
											point: val.point,
										},
									});
								}}
							>
								<View jc={"center"} ai={"center"} mb={5}>
									<Avatar als={"center"} br={40} size={80}>
										<Avatar.Image
											accessibilityLabel="Cam"
											src={val.img}
										/>

										<Avatar.Fallback backgroundColor="$blue10" />
									</Avatar>
									<Text
										className="rounded-xl w-[25px] h-[25px] text-center text-white font-bold absolute bottom-[-10]"
										bg={"red"}
									>
										{index}
									</Text>
								</View>
								<Text className="text-base font-bold text-white">
									{val.name}
								</Text>
								<Text className="font-semibold text-white">
									{val.point} point
								</Text>
							</Stack>
						);
					})} */}

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
							pathname: `/profileRanking/${data[1].id}`,
							params: {
								img:
									data[1].img ||
									"https://picsum.photos/200/300",
								name: data[1].name,
								point: data[1].point.score_trash,
								point_tree: data[1].point.score_tree,
								point_carbon: data[1].point.score_carbon,
							},
						});
					}}
				>
					<View jc={"center"} ai={"center"} mb={10}>
						<Avatar als={"center"} circular size={"$7"}>
							<Avatar.Image
								accessibilityLabel="Cam"
								src={data[1].img}
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
					<Text className="text-base font-bold text-white">
						{data[1].name}
					</Text>
					<Text className="font-semibold text-white">
						{data[1].point.score_trash} point
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
							pathname: `/profileRanking/${data[1].id}`,
							params: {
								img:
									data[0].img ||
									"https://picsum.photos/200/300",
								name: data[0].name,
								point: data[0].point.score_trash,
								point_tree: data[0].point.score_tree,
								point_carbon: data[0].point.score_carbon,
							},
						});
					}}
				>
					<View jc={"center"} ai={"center"} mb={10}>
						<Avatar als={"center"} circular size={"$7"}>
							<Avatar.Image
								accessibilityLabel="Cam"
								src={data[0].img}
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
					<Text className="text-base font-bold text-white">
						{data[0].name}
					</Text>
					<Text className="font-semibold text-white">
						{data[0].point.score_trash} point
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
							pathname: `/profileRanking/${data[1].id}`,
							params: {
								img:
									data[2].img ||
									"https://picsum.photos/200/300",
								name: data[2].name,
								point: data[2].point.score_trash,
								point_tree: data[2].point.score_tree,
								point_carbon: data[2].point.score_carbon,
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
					<Text className="text-base font-bold text-white">
						{data[2].name}
					</Text>
					<Text className="font-semibold text-white">
						{data[2].point.score_trash} point
					</Text>
				</Stack>
			</View>
			<FlatList
				showsVerticalScrollIndicator={false}
				style={{ width: "100%", height: "60%", paddingHorizontal: 10 }}
				data={data.filter((val, i) => {
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

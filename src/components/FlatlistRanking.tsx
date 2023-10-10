import { FlatList } from "react-native";
import React from "react";
import { Stack, YStack, Text, View, Avatar } from "tamagui";
import { DATARank } from "./../app/(tabs)/scoreRanking";
import RankingUser, { RankingUserProps } from "./RankingUser";
import { colors } from "@/constants/Colors";

type Props = {};

const renderRankingUser = (item: RankingUserProps) => {
	return <RankingUser {...item} />;
};

const FlatlistRanking = ({ data }: { data: RankingUserProps[] }) => {
	return (
		<YStack jc={"center"} ai={"center"} bc={"$green5Light"}>
			<View h={"40%"} fd={"row"} space={"$2"}>
				<Stack
					bg={colors.green3}
					als={"flex-end"}
					h={"$12"}
					w={"$11"}
					p={10}
					jc={"center"}
					ai={"center"}
					br={15}
				>
					<View jc={"center"} ai={"center"}>
						<Avatar als={"center"} circular size={"$7"}>
							<Avatar.Image
								accessibilityLabel="Cam"
								src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
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
					<Text className="text-lg font-bold text-white">
						username
					</Text>
					<Text className="font-semibold text-white">9999 point</Text>
				</Stack>
				<Stack
					bg={colors.green3}
					h={"$12"}
					als={"center"}
					w={"$11"}
					p={10}
					jc={"center"}
					ai={"center"}
					br={15}
				>
					<View jc={"center"} ai={"center"}>
						<Avatar als={"center"} circular size={"$7"}>
							<Avatar.Image
								accessibilityLabel="Cam"
								src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
							/>

							<Avatar.Fallback backgroundColor="$blue10" />
						</Avatar>
						<Text
							className="rounded-xl w-[25px] h-[25px] text-center text-white font-bold absolute bottom-[-10]"
							bg={"red"}
						>
							1
						</Text>
					</View>
					<Text className="text-lg font-bold text-white">
						username
					</Text>
					<Text className="font-semibold text-white">9999 point</Text>
				</Stack>
				<Stack
					bg={colors.green3}
					h={"$12"}
					als={"flex-end"}
					w={"$11"}
					jc={"center"}
					ai={"center"}
					br={15}
				>
					<View jc={"center"} ai={"center"}>
						<Avatar als={"center"} circular size={"$7"}>
							<Avatar.Image
								accessibilityLabel="Cam"
								src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
							/>

							<Avatar.Fallback backgroundColor="$blue10" />
						</Avatar>
						<Text
							className="rounded-xl w-[25px] h-[25px] text-center text-white font-bold absolute bottom-[-10]"
							bg={"red"}
						>
							3
						</Text>
					</View>
					<Text className="text-lg font-bold text-white">
						username
					</Text>
					<Text className="font-semibold text-white">9999 point</Text>
				</Stack>
			</View>
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

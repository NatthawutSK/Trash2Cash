import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import {
	View,
	H1,
	H2,
	Stack,
	YStack,
	H3,
	Avatar,
	H5,
	XStack,
	Square,
	Text,
	Image,
} from "tamagui";
import { DATARank } from "./../(tabs)/scoreRanking";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Leaf, Trash, Trees, Users } from "@tamagui/lucide-icons";
import StatsUser from "@/components/StatsUser";

type Props = {};
const detailProfile = (props: Props) => {
	const { id, img, name, point, point_tree, point_carbon } =
		useLocalSearchParams();
	const user = DATARank.find((user) => user.id === Number(id));
	return (
		<YStack jc={"center"} padding={"$4"} marginTop={"$11"} space={"$4"}>
			<Stack ai={"center"}>
				<Image source={{ uri: String(img) }} w={150} h={150} br={100} />
				<Text className="text-4xl mt-3">{name}</Text>
				<Text className="text-2xl mt-3">{point}</Text>
			</Stack>
			<StatsUser
				tree={Number(point_tree)}
				trash={Number(point)}
				co2={Number(point_carbon)}
			/>
		</YStack>
	);
};

export default detailProfile;

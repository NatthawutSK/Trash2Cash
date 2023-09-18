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
} from "tamagui";
import { DATA } from "./../(tabs)/scoreRanking";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Leaf, Trash, Trees, Users } from "@tamagui/lucide-icons";
type Props = {};
const detailProfile = (props: Props) => {
	const { id } = useLocalSearchParams();
	const user = DATA.find((user) => user.id === Number(id));
	return (
		<YStack jc={"center"} als={"center"} ai={"center"} space={30} mt={50}>
			<Stack
				fd={"row"}
				space={10}
				bc={"green"}
				br={20}
				p={10}
				jc={"space-between"}
			>
				<View space={10} fd={"row"}>
					<Avatar circular size={"$6"}>
						<Avatar.Image
							accessibilityLabel="Cam"
							src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
						/>
						<Avatar.Fallback backgroundColor="$blue10" />
					</Avatar>
					<H5 color={"white"} alignSelf="center">
						สถิติของคุณ {user?.name}
					</H5>
				</View>
			</Stack>
			<XStack space={"$4"}>
				<YStack space="$4">
					<Square w={160} h={180} br={20} backgroundColor="#a3cc41">
						<YStack space={"$3"}>
							<Text>ลด co2 ไปแล้ว</Text>
							<Text ta={"center"} fos={"$5"}>
								90709{"     "}
								<Text fos={"$2"} color={"#d6e898"}>
									kCO2e
								</Text>
							</Text>
							{/* <MaterialCommunityIcons
								name="molecule-co2"
								size={48}
								color="black"
							/> */}
							<Leaf size={40}></Leaf>
							{/* <Image source={{ uri: co2 }} /> */}
						</YStack>
					</Square>
					<Square w={160} h={130} br={20} bg={"#a3cc41"}>
						<YStack space={"$1"}>
							<Text>เทียบเท่าปลูกต้นไม้</Text>
							<Text ta={"center"} fos={"$5"}>
								9070{"     "}
								<Text fos={"$2"} color={"$gray10Light"}>
									ต้น
								</Text>
							</Text>
							{/* <MaterialCommunityIcons
								name="molecule-co2"
								size={48}
								color="black"
							/> */}
							<Trees size={40}></Trees>
							{/* <Image source={{ uri: co2 }} /> */}
						</YStack>
					</Square>
				</YStack>

				<YStack space={"$4"}>
					<Square w={140} h={130} br={20} bg={"#a3cc41"}>
						<YStack space={"$2"}>
							<Text>ลดขยะ</Text>
							<Text ta={"center"} fos={"$5"}>
								9070{"     "}
								<Text fos={"$2"} color={"$gray10Light"}>
									กก.
								</Text>
							</Text>
							<Trash size={40}></Trash>
						</YStack>
					</Square>
					<Square w={140} h={180} br={20} bg={"#a3cc41"}>
						<YStack space={"$2"}>
							<Text>ผู้เข้าร่วมช่วยโลก</Text>
							<Text ta={"center"} fos={"$5"}>
								922{"     "}
								<Text fos={"$2"} color={"$gray10Light"}>
									คน
								</Text>
							</Text>
							<Users size={40}></Users>
						</YStack>
					</Square>
				</YStack>
			</XStack>
		</YStack>
	);
};

export default detailProfile;

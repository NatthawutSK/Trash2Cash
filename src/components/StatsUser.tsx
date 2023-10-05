import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Trees } from "@tamagui/lucide-icons";
import { Button, XStack, YStack } from "tamagui";
import { IconProps } from "@tamagui/helpers-icon";
import { Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/constants/Colors";
type Props = {
	tree: number;
	trash: number;
	co2: number;
};

const StatsUser = (props: Props) => {
	return (
		<YStack jc={"center"} ai={"center"} space={"$4"}>
			<View className=" space-x-3  flex-row justify-center content-center">
				<View className="rounded-xl  bg-[#3C6255] space-x-3 flex-1   content-center flex-row items-center px-3 py-3">
					<MaterialCommunityIcons
						name="molecule-co2"
						color={"white"}
						size={40}
					/>
					<View>
						<Text className="text-white text-xs font-bold text-center">
							ลด Co2 ไปแล้ว
						</Text>
						<Text className="text-white text-base font-semibold text-center">
							{props.co2} KCo2e
						</Text>
					</View>
				</View>
				<View className="rounded-xl bg-[#3C6255] space-x-3 flex-1   content-center flex-row items-center px-3 py-3">
					<Foundation name="trash" color={"white"} size={40} />
					<View>
						<Text className="text-white text-xs  font-bold text-center">
							ลดปริมาณขยะ
						</Text>
						<Text className="text-white font-semibold text-base">
							{props.co2} KCo2e
						</Text>
					</View>
				</View>
			</View>
			<View className="bg-[#3C6255] w-[100%] flex-row px-3 py-3 rounded-xl justify-center space-x-8 content-center">
				<Foundation name="trees" color={"white"} size={40} />
				<View>
					<Text className="text-white text-xs  font-bold text-center">
						เทียบเท่าปลูกต้นไม้
					</Text>
					<Text className="text-white font-semibold text-base">
						{props.co2} KCo2e
					</Text>
				</View>
			</View>
		</YStack>
	);
};

export default StatsUser;

import { View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Star, Store } from "@tamagui/lucide-icons";
import { YStack, XStack, Avatar, Separator, Text } from "tamagui";

export type StoreProps = { name: string; mat: string[]; star: number };

const StoreItem = ({ name, mat, star }: StoreProps) => (
	<YStack w={"100%"}>
		<XStack
			alignItems="center"
			space="$6"
			p={10}
			bc={"$green5Dark"}
			jc={"space-between"}
			w={"100%"}
		>
			<XStack ai={"center"} ac={"center"} space={"$4"}>
				<Avatar circular size="$6">
					<Avatar.Image src="http://placekitten.com/200/300" />
					<Avatar.Fallback bc="red" />
				</Avatar>
				<YStack space={"$1"}>
					<Text fow={"800"} color={"$green10Dark"}>
						{name}
					</Text>
					<Text>วัสดุที่รับ</Text>
					<XStack space={"$2"}>
						{mat.map((m) => {
							return <FontAwesome5 name={m} size={18} />;
						})}
					</XStack>
				</YStack>
			</XStack>
			<YStack ai={"center"} space={"$1"}>
				<Text>
					{star} {""} <Star size={18} />
				</Text>
				<Store size={24} />
			</YStack>
		</XStack>
		<Separator alignSelf="stretch" />
	</YStack>
);

export default StoreItem;

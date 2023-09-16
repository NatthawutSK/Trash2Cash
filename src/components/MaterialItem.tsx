import { View } from "react-native";
import React from "react";
import { YStack, XStack, Avatar, Separator, Text } from "tamagui";

export type MatProps = { img?: string; name: string; description: string };
const MaterialItem = (item: MatProps) => {
	return (
		<YStack w={"100%"}>
			<XStack
				alignItems="center"
				space="$6"
				p={10}
				bg={"$green10Light"}
				w={"100%"}
			>
				<Avatar circular size="$6">
					<Avatar.Image src="http://placekitten.com/200/300" />
					<Avatar.Fallback bc="red" />
				</Avatar>
				<YStack>
					<Text fow={"800"} color={"white"}>
						{item.name}
					</Text>
					<Text>{item.description}</Text>
				</YStack>
			</XStack>
			<Separator alignSelf="stretch" />
		</YStack>
	);
};

export default MaterialItem;

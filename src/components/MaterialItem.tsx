import { Pressable, View } from "react-native";
import React from "react";
import { YStack, XStack, Avatar, Separator, Text } from "tamagui";
import { router } from "expo-router";

export type MatProps = { img?: string; name: string; description: string, iconmain: string[], picture: string[], id: string, typeM: string, reduce: number, avgprice: number, submat: string[]};
// export type MatProps = { img?: string; name: string; description: string };
const MaterialItem = (item: MatProps) => {
	return (
		<Pressable onPress={() => router.push({pathname:`/detailTrash/${item.id}`, params: item } )}>
			<YStack w={"100%"}>
				<XStack
					alignItems="center"
					space="$6"
					p={10}
					// bg={"$green8Light"}
					bc={"$green2Light"}
          			borderWidth={2}
          			borderColor={"$green8Dark"}
					w={"100%"}
					br={20}
				>
					<Avatar circular size="$6">
						<Avatar.Image src={item.iconmain[0]} />
						<Avatar.Fallback bc="red" />
					</Avatar>
					<YStack>
						<Text fow={"800"}>
							{item.name}
							
						</Text>
						<Text>{item.description}</Text>
					</YStack>
				</XStack>
				{/* <Separator alignSelf="stretch" bw={"$1.5"} /> */}
			</YStack>
		</Pressable>
	);
};

export default MaterialItem;

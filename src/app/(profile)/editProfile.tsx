import { View, Text } from "react-native";
import React from "react";
import {
	Avatar,
	Button,
	H6,
	Input,
	Label,
	Stack,
	TextArea,
	XStack,
	YStack,
	ZStack,
} from "tamagui";
import { H4 } from "tamagui";

type Props = {};

const editProfile = (props: Props) => {
	return (
		<YStack jc={"center"} ai={"center"} padding={"$4"} space={"$3"}>
			<Avatar br={20} size="$11">
				<Avatar.Image src="http://placekitten.com/200/300" />
				<Avatar.Fallback bc="red" />
			</Avatar>
			<Button>อัพโหลด</Button>

			<XStack jc={"space-evenly"} ai={"center"} space={"$3"}>
				<Input flex={1} h={"$4"} placeholder="ชื่อ" />
				<Input flex={1} h={"$4"} placeholder="นามสกุล" />
			</XStack>

			<Input w={"100%"} h={"$4"} placeholder="เบอร์โทรศัพท์" />
			<Input w={"100%"} h={"$4"} placeholder="อีเมล" />
			<TextArea w={"100%"} h={"$10"} placeholder="ที่อยู่"></TextArea>
			<Button w={"100%"}>บันทึก</Button>
		</YStack>
	);
};

export default editProfile;

import { View, Text } from "react-native";
import React from "react";
import { YStack, Avatar, XStack, Input, TextArea, Button } from "tamagui";

type Props = {};

const changePassword = (props: Props) => {
	return (
		<YStack padding={"$4"}>
			<Input flex={1} h={"$1"} w={"$1"} placeholder="ชื่อ" />
			<Input flex={1} h={"$1"} w={"$1"} placeholder="นามสกุล" />

			<Button w={"100%"}>บันทึก</Button>
		</YStack>
	);
};

export default changePassword;

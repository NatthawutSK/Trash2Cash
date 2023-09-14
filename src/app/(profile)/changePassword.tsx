import { View, Text } from "react-native";
import React from "react";
import { YStack, Avatar, XStack, Input, TextArea, Button, H3 } from "tamagui";

type Props = {};

const changePassword = (props: Props) => {
	return (
		<YStack
			flex={1}
			padding={"$4"}
			space="$6"
			ac={"center"}
			alignSelf="center"
			w={"100%"}
		>
			<H3 ta={"center"}>เปลี่ยนรหัสผ่าน</H3>
			<Input placeholder="รหัสผ่านเดิม"></Input>
			<Input placeholder="รหัสผ่านใหม่"></Input>
			<Input placeholder="ยืนยันรหัสผ่าน"></Input>
			<Button>เปลี่ยนรหัสผ่าน</Button>
		</YStack>
	);
};

export default changePassword;

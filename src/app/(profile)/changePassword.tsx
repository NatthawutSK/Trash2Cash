import { View, Text } from "react-native";
import React from "react";
import { YStack, Avatar, XStack, Input, TextArea, Button, H3 } from "tamagui";
import { colors } from "@/constants/Colors";

type Props = {};

const changePassword = (props: Props) => {
	return (
		<YStack
			padding={"$4"}
			space="$6"
			ac={"center"}
			alignSelf="center"
			w={"100%"}
		>
			<H3 ta={"center"} color={"black"}>
				เปลี่ยนรหัสผ่าน
			</H3>
			<Input
				placeholder="รหัสผ่านเดิม"
				br={20}
				className="border-2 rounded-lg border-[#3C6255] px-3 py-3"
			></Input>
			<Input
				placeholder="รหัสผ่านใหม่"
				className="border-2 rounded-lg border-[#3C6255] px-3 py-3"
			></Input>
			<Input
				placeholder="ยืนยันรหัสผ่าน"
				br={20}
				className="border-2 rounded-lg border-[#3C6255] px-3 py-3"
			></Input>
			<Button w={"100%"} bc={colors.green3} color={"white"}>
				เปลี่ยนรหัสผ่าน
			</Button>
		</YStack>
	);
};

export default changePassword;

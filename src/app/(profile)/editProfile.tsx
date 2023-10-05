import {
	View,
	Text,
	TextInput,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
} from "react-native";
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
import { colors } from "@/constants/Colors";
import PickerImg from "@/components/MyImagePicker";
type Props = {};

const editProfile = (props: Props) => {
	return (
		<ScrollView>
			<KeyboardAvoidingView
				style={{ flex: 1, padding: 15 }}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<YStack jc={"center"} ai={"center"} padding={"$4"} space={"$3"}>
					<PickerImg />

					<XStack
						w={"100%"}
						space={"$5"}
						marginTop={15}
						ac={"center"}
						ai={"center"}
					>
						<TextInput
							className="border-2 rounded-lg border-[#3C6255] flex-auto h-[50px] px-3 py-3"
							placeholder="ชื่อ"
						></TextInput>

						<TextInput
							className="border-2 rounded-lg border-[#3C6255] flex-auto h-[50px] px-3 py-3"
							placeholder="นามสกุล"
						></TextInput>
					</XStack>
					<TextInput
						className="border-2 rounded-lg border-[#3C6255] w-[100%] h-[50px] px-3 py-3"
						placeholder="เบอร์โทรศัพท์"
					></TextInput>

					<TextArea
						w={"100%"}
						className="border-2 rounded-lg border-[#3C6255] w-[100%] h-[150px] px-3 py-3"
						placeholder="ที่อยู่"
						style={{ textAlignVertical: "top" }}
					></TextArea>
					<Button w={"50%"} bc={colors.green3} color={"white"}>
						บันทึก
					</Button>
				</YStack>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default editProfile;

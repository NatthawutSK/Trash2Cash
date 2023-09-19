import React from "react";
import { MySafeAreaView } from "@/components/MySafeAreaView";
import {
	Button,
	H4,
	Input,
	Label,
	Stack,
	Text,
	TextArea,
	XStack,
	YStack,
} from "tamagui";
import { useRouter } from "expo-router";

type Props = {};

const formSeller = (props: Props) => {
	const router = useRouter();
	return (
		<MySafeAreaView>
			<YStack
				jc={"center"}
				ai={"center"}
				padding={"$4"}
				space={"$4"}
				f={1}
			>
				<H4 className="text-2xl">เพิ่มข้อมูลส่วนตัว</H4>
				<XStack jc={"space-evenly"} ai={"center"} space={"$3"}>
					<Input flex={1} h={"$4"} placeholder="ชื่อ" />
					<Input flex={1} h={"$4"} placeholder="นามสกุล" />
				</XStack>

				<Input w={"100%"} h={"$4"} placeholder="เบอร์โทรศัพท์" />
				<Input w={"100%"} h={"$4"} placeholder="อีเมล" />
				<TextArea w={"100%"} h={"$10"} placeholder="ที่อยู่"></TextArea>
				<Button w={"100%"} onPress={() => router.push("/")}>
					บันทึก
				</Button>
			</YStack>
		</MySafeAreaView>
	);
};

export default formSeller;

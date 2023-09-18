import {
	Github,
	Leaf,
	Trash,
	Twitter,
	User,
	Cloudy,
	ChevronRight,
	Map,
	Lock,
	LogOut,
} from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import type { IconProps } from "@tamagui/helpers-icon";
import { ButtonIcon, H6, ScrollView } from "tamagui";
import { Avatar, H2, H3, H4, H5, Stack, XStack, ZStack } from "tamagui";
import {
	Button,
	H1,
	ListItem,
	Paragraph,
	Separator,
	YGroup,
	YStack,
} from "tamagui";

import { MyStack } from "@/components/MyStack";
import { Icon, IconButtonProps } from "@expo/vector-icons/build/createIconSet";
export default function three() {
	const router = useRouter();

	type notBtnProp = {
		icon: any;
		text1: string;
		text2: string;
	};
	const NotBtn = (props: notBtnProp) => {
		return (
			<>
				<YStack
					maw={"$12"}
					justifyContent="center"
					ac={"center"}
					ai={"center"}
					alignSelf="center"
					space={"$2"}
				>
					<Button icon={props.icon} size="$7" mx={10}></Button>
					<H5 size={"$5"}>{props.text1}</H5>
					<H5 size={"$3"}>{props.text2}</H5>
				</YStack>
			</>
		);
	};
	return (
		<YStack flex={1} padding="$4" space={"$3"}>
			<Avatar size="$10" br={10}>
				<Avatar.Image src="http://placekitten.com/200/300" />
				<Avatar.Fallback bc="gray" />
			</Avatar>
			<H2 fow="900">Name Surname</H2>
			<XStack jc={"space-evenly"} space={"$2"}>
				<NotBtn
					icon={Cloudy}
					text1="10 kCO2e"
					text2="ลด Co2 ไปแล้ว"
				></NotBtn>
				<NotBtn
					icon={Leaf}
					text1="10000 ต้น"
					text2="เท่ากับปลูกต้นไม้"
				></NotBtn>
				<NotBtn icon={Leaf} text1="10000 กก." text2="ลดขยะ"></NotBtn>
			</XStack>
			<H5>ข้อมูลส่วนตัว</H5>

			<Button
				jc={"space-between"}
				icon={<User size="$2" />}
				iconAfter={<ChevronRight size="$2" />}
				onPress={() => {
					router.push("/editProfile");
				}}
			>
				แก้ไขข้อมูลส่วนตัว
			</Button>

			<Button
				jc={"space-between"}
				icon={<Lock size="$2" />}
				iconAfter={<ChevronRight size="$2" />}
				onPress={() => router.push("/changePassword")}
			>
				เปลี่ยนรหัสผ่าน
			</Button>

			<Button
				jc={"space-between"}
				icon={<LogOut size="$2" />}
				iconAfter={<ChevronRight size="$2" />}
				bc={"#b23b3b"}
			>
				ล็อกเอาท์
			</Button>
			<Button
				jc={"space-between"}
				icon={<Lock size="$2" />}
				iconAfter={<ChevronRight size="$2" />}
				onPress={() => router.push("/(profile)/history")}
			>
				Histiry
			</Button>
		</YStack>
	);
}

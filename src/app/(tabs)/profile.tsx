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
import { Link, useNavigation, useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import type { IconProps } from "@tamagui/helpers-icon";
import { ButtonIcon, H6, ScrollView, Text, View } from "tamagui";
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
import StatsUser from "@/components/StatsUser";
import { colors } from "@/constants/Colors";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { userdata } from "@/MockData/data";
import { useAuth } from "@clerk/clerk-expo";
import { useUserContext } from "@/provider/UserContext";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useState, useEffect } from "react";
import { storage } from "../../../firebase";
import React from "react";
import { useFocus } from "@/components/UseFocus";
import { RefreshControl } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

export default function Profile() {
	const router = useRouter();
	const { dbUser, loading, reloadDbUser }: any = useUserContext();
	const [imgUrl, setImgUrl] = useState(
		"https://icons.veryicon.com/png/o/business/middle-stage-background-icon/account-number.png"
	);
	const { focusCount, isFocused } = useFocus();
	// useEffect(() => {
	// 	(async () => {
	// 		setImgUrl(
	// 			await getDownloadURL(
	// 				ref(storage, `Profile/${dbUser.auth_id}/avatar.png`)
	// 			)
	// 		);
	// 		console.log("async");
	// 	})();
	// 	console.log("useEffect");
	// });
	// useFocusEffect(
	// 	React.useCallback(() => {
	// 		(async () => {
	// 			setImgUrl(
	// 				await getDownloadURL(
	// 					ref(storage, `Profile/${dbUser.auth_id}/avatar.png`)
	// 				)
	// 			);
	// 		})();
	// 		// return () => {
	// 		// Clear the students state when the component is unfocused
	// 		// setImgUrl("");
	// 		// };
	// 	}, [imgUrl])
	// );

	useEffect(() => {
		if (focusCount === 1 && isFocused) {
			// this is the first time focus => init screen here
			(async () => {
				try {
					setImgUrl(
						await getDownloadURL(
							ref(storage, `Profile/${dbUser.auth_id}.png`)
						)
					);
					console.log("async");
				} catch (e) {
					setImgUrl(
						"https://icons.veryicon.com/png/o/business/middle-stage-background-icon/account-number.png"
					);
					console.log(e);
				}
			})();
		}
	});

	useEffect(() => {
		if (focusCount > 1 && isFocused) {
			// trigger when you navigate back from another screen
			// you can background reload data here ...
			(async () => {
				setImgUrl(
					await getDownloadURL(
						ref(storage, `Profile/${dbUser.auth_id}.png`)
					)
				);
				console.log("async");
			})();
		}
	});
	const { signOut } = useAuth();
	console.log(typeof dbUser);
	type notBtnProp = {
		icon: any;
		text1: string;
		text2: string;
	};

	return (
		<ScrollView
			style={{ flex: 1 }}
			refreshControl={
				<RefreshControl refreshing={loading} onRefresh={reloadDbUser} />
			}
		>
			<YStack padding={"$4"} marginTop={"$6"} space={"$4"}>
				<XStack jc={"space-around"} w={"100%"} space={"$4"} mb={"$2"}>
					<Avatar br={20} size="$12">
						<Avatar.Image src={imgUrl} />
						<Avatar.Fallback bc="red" />
					</Avatar>
					<Stack
						jc={"center"}
						ai={"center"}
						br={20}
						bc={colors.green4}
						px={20}
						h={"$9"}
						als={"center"}
					>
						<Text
							color={"white"}
							maw={"$14"}
							fontSize={22}
							ww={"break-word"}
							className="text-center font-bold max-h-30 min-w-[100px] max-w-[150px] px-1"
							numberOfLines={1}
						>
							{dbUser.user_name}
						</Text>
					</Stack>
				</XStack>
				<StatsUser
					tree={dbUser.score[0].score_tree}
					trash={dbUser.score[0].score_trash}
					co2={dbUser.score[0].score_carbon}
				/>

				<Button
					bg={colors.green4}
					icon={() => (
						<FontAwesome name="user" color={"white"} size={40} />
					)}
					iconAfter={<ChevronRight size="$2" color={"white"} />}
					h={"$6"}
					jc={"space-between"}
					onPress={() =>
						router.push({
							pathname: "/(profile)/editProfile",
							params: { url: imgUrl },
						})
					}
				>
					<Text color={"white"} fos={20}>
						แก้ไขข้อมูลส่วนตัว
					</Text>
				</Button>
				{/* <Button
				bg={colors.green4}
				icon={() => (
					<FontAwesome name="lock" color={"white"} size={40} />
					)}
					iconAfter={<ChevronRight size="$2" color={"white"} />}
					h={"$6"}
					jc={"space-between"}
					onPress={() => router.push("/(profile)/changePassword")}
					>
					<Text color={"white"} fos={20}>
					เปลี่ยนรหัสผ่าน
				</Text>
			</Button> */}
				<Button
					bg={colors.green4}
					icon={() => (
						<FontAwesome name="history" color={"white"} size={40} />
					)}
					iconAfter={<ChevronRight size="$2" color={"white"} />}
					h={"$6"}
					jc={"space-between"}
					onPress={() => router.push("/(profile)/history")}
				>
					<Text color={"white"} fos={20}>
						ประวัติการซื้อขาย
					</Text>
				</Button>
				<Button
					onPress={() => signOut()}
					bg={colors.green4}
					icon={() => (
						<MaterialIcons
							name="logout"
							color={"white"}
							size={40}
						/>
					)}
					iconAfter={<ChevronRight size="$2" color={"white"} />}
					h={"$6"}
					jc={"space-between"}
				>
					<Text color={"white"} fos={20}>
						ออกจากระบบ
					</Text>
				</Button>
			</YStack>
		</ScrollView>
	);
}

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
import { useUserContext } from "@/provider/UserContext";
import { uploadImage } from "@/utils/util";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../firebase";
import { gql, useMutation } from "@apollo/client";
import { useLocalSearchParams } from "expo-router";
type Props = {};

const editProfile = (props: Props) => {
	const { dbUser, reloadDbUser }: any = useUserContext();
	const [username, setUsername] = React.useState(dbUser.user_name);
	const { url } = useLocalSearchParams();
	const [image, setImage] = React.useState<string | undefined>(
		url.toString()
	);
	const updateUserQuery = gql`
		mutation MyMutation($auth_id: String!, $user_name: String!) {
			updateUsers(auth_id: $auth_id, user_name: $user_name) {
				auth_id
			}
		}
	`;
	const [handleMutation, { loading }] = useMutation(updateUserQuery);
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [16, 9],
			quality: 1,
		});
		//to remove warning
		// delete result.canceled;

		if (!result.canceled) {
			setImage(result.assets[0].uri);

			// reloadDbUser();
		}
	};
	const SaveProfile = async () => {
		try {
			await handleMutation({
				variables: {
					auth_id: dbUser.auth_id,
					user_name: username,
				},
			});
			// uploadImage(image, `Profile/${dbUser.auth_id}/avatar.png`);
			reloadDbUser();
		} catch (e) {
			console.log(e);
		}
		if (image) {
			uploadImage(image, `Profile/${dbUser.auth_id}/avatar.png`);
		} else {
			console.log("no image");
		}
	};

	return (
		<ScrollView>
			<KeyboardAvoidingView
				style={{ flex: 1, padding: 15 }}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<YStack
					jc={"center"}
					ai={"center"}
					mt={100}
					padding={"$4"}
					space={"$3"}
				>
					<Avatar
						size="$14"
						style={{ borderColor: colors.green4 }}
						className="rounded-lg  border-8"
					>
						<Avatar.Image src={image} />
						<Avatar.Fallback bc="red" />
					</Avatar>

					<Button
						bc={"#66b55d"}
						color={"$green5Light"}
						className="font-bold"
						onPress={pickImage}
					>
						เลือกรูป
					</Button>

					<XStack
						w={"100%"}
						space={"$5"}
						marginTop={15}
						ac={"center"}
						ai={"center"}
					>
						<TextInput
							className="border-2 rounded-lg border-[#3C6255] flex-auto h-[50px] px-3 py-3"
							placeholder="ชื่อผู้ใช้"
							value={username}
							onChangeText={(text) => setUsername(text)}
						></TextInput>
					</XStack>

					<Button
						w={"50%"}
						bc={colors.green3}
						color={"white"}
						onPress={() => SaveProfile()}
					>
						{loading ? "กำลังบันทึก..." : "บันทึก"}
					</Button>
				</YStack>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default editProfile;

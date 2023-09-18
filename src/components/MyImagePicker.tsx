import React, { useState } from "react";
import { Sheet, YStack, Image, Button, View, Text } from "tamagui";
import * as ImagePicker from "expo-image-picker";
type Props = {};

const PickerImg = () => {
	const [image, setImage] = useState<string | undefined>(
		"https://vectips.com/wp-content/uploads/2018/12/tutorial-preview-large-1.png"
	);
	const [open, setOpen] = useState(false);
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: false,
			aspect: [16, 9],
			quality: 1,
		});
		//to remove warning
		delete result.cancelled;

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<View ac={"center"} ai={"center"}>
			{image && (
				<Image
					source={{ uri: image }}
					style={{ width: 200, height: 200 }}
					resizeMode="contain"
					m={10}
					onPress={() => {
						setOpen(!open);
					}}
				/>
			)}
			<Button
				bc={"#66b55d"}
				color={"$green5Light"}
				fow={800}
				onPress={pickImage}
			>
				เลือกรูปหลักฐาน
			</Button>
			<Sheet
				modal
				open={open}
				onOpenChange={setOpen}
				animation={"bouncy"}
			>
				<Sheet.Overlay
					animation={"bouncy"}
					enterStyle={{ opacity: 0 }}
					exitStyle={{ opacity: 0 }}
				/>
				<Sheet.Handle />
				<Sheet.Frame
					flex={1}
					justifyContent="center"
					alignItems="center"
					space="$5"
				>
					<YStack p="$5" gap="$8">
						{image && (
							<Image
								source={{ uri: image }}
								w={500}
								h={500}
								resizeMode="contain"
								m={10}
							/>
						)}
					</YStack>
				</Sheet.Frame>
			</Sheet>
		</View>
	);
};

export default PickerImg;

import { FlatList, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, H4, Image, Text } from "tamagui";
import { MockImg } from "@/MockData/data";
import { colors } from "@/constants/Colors";
import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";
import {
	listAll,
	ref,
	getStorage,
	getDownloadURL,
	deleteObject,
} from "firebase/storage";
import { useUserContext } from "@/provider/UserContext";
import "react-native-get-random-values";
import { fetchImages, uploadImage } from "@/utils/util";
import * as ImagePicker from "expo-image-picker";
import { v4 as uuidv4 } from "uuid";
type Props = {};

const renderImg = (
	item: { name: string; url: string },
	auth_id: string,
	setImg: (allimg: { name: string; url: string }[]) => void
) => {
	return (
		<View
			className="bg-white self-center"
			style={{
				borderColor: colors.green4,
				borderWidth: 2,
				width: "80%",
				height: 140,
				borderRadius: 10,
			}}
		>
			<Image
				resizeMode="stretch"
				source={{ uri: item.url }}
				// className="rounded-l-lg "
				style={{
					width: "80%",
					height: "100%",
					borderTopLeftRadius: 8,
					borderBottomLeftRadius: 8,
				}}
			/>
			<Button
				className="absolute top-0 right-0 h-[100%] rounded-lg"
				bg={"$red9Light"}
				onPress={() => {
					deleteObject(ref(getStorage(), item.name))
						.then(() => {
							// File deleted successfully
							fetchImages(auth_id, setImg);
						})
						.catch((error) => {
							// Uh-oh, an error occurred!
							console.log(error);
						});
				}}
				style={{
					borderTopLeftRadius: 0,
					borderBottomLeftRadius: 0,
					width: "20%",
				}}
			>
				<FontAwesome name="trash" size={30} color="white" />
			</Button>
		</View>
	);
};

// <Image w={50} h={50} source={{ uri: item }} />

const editImageStore = (props: Props) => {
	const [image, setImage] = useState<string | null>(null);
	useEffect(() => {
		fetchImages(dbUser.auth_id, setStoreimg);
	}, []);

	const [storeimg, setStoreimg] = useState<{ name: string; url: string }[]>(
		[]
	);

	const { dbUser }: any = useUserContext();
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 0.5,
		});

		if (!result.canceled) {
			const uri = result.assets[0].uri;
			setImage(result.assets[0].uri);
			if (storeimg.length < 3) {
				const upload = await Promise.resolve(
					uploadImage(uri, `Store/${dbUser.auth_id}/${uuidv4()}.png`)
				);
				fetchImages(dbUser.auth_id, setStoreimg);
				console.log("wok");
			}
		}
	};
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={storeimg}
				renderItem={({ item }) =>
					renderImg(item, dbUser.auth_id, setStoreimg)
				}
				contentContainerStyle={{ gap: 20 }}
				ListHeaderComponent={
					<H4 className="self-center py-5 font-bold">
						รูปร้านค้า{storeimg.length}
					</H4>
				}
			/>
			<TouchableOpacity
				onPress={pickImage}
				style={{
					borderWidth: 1,
					alignItems: "center",
					justifyContent: "center",
					width: 65,
					position: "absolute",
					alignSelf: "flex-end",
					bottom: 30,
					right: 30,
					height: 65,
					backgroundColor: colors.green4,
					borderRadius: 100,
				}}
			>
				<Ionicons name="images-outline" size={30} color="white" />
			</TouchableOpacity>
		</View>
	);
};

export default editImageStore;

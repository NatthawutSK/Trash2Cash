import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import QRCode from "react-native-qrcode-svg";
import { Button } from "tamagui";

type Props = {};

const ShowQr = (props: Props) => {
	const { material, username, auth_id, date, score } = useLocalSearchParams();
	console.log(material, "qr");
	const materialString = JSON.stringify(material);
	return (
		<View className="justify-center items-center flex-1">
			<Text>
				{JSON.stringify({
					material: material,
					name: username,
					auth_id: auth_id,
					date: date,
					score: score,
				})}
			</Text>
			<View className=" rounded-lg ">
				<QRCode
					value={JSON.stringify({
						material: material,
						name: username,
						auth_id: auth_id,
						date: date,
						score: score,
					})}
					size={300}
				/>
			</View>
			<Button
				className="mt-10 bg-[#3C6255]  rounded-xl px-10"
				onPress={() => {
					router.back();
				}}
			>
				<Text className="text-white text-lg">กลับสู่หน้าหลัก</Text>
			</Button>
		</View>
	);
};

export default ShowQr;

const styles = StyleSheet.create({});

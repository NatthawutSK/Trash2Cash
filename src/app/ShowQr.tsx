import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import QRCode from "react-native-qrcode-svg";
import { Button } from "tamagui";

type Props = {};

const ShowQr = (props: Props) => {
	const { list, username, userimg, date } = useLocalSearchParams();
	console.log(list, "qr");
	const listString = JSON.stringify(list);
	return (
		<View className="justify-center items-center flex-1">
			<Text>{listString}</Text>
			<View className=" rounded-lg ">
				<QRCode
					value={JSON.stringify({
						list: list,
						name: username,
						img: userimg,
						date: date,
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

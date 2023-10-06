import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Label } from "tamagui";

type Props = {};

const qrCode = (props: Props) => {
	return (
		<View className=" items-center content-center mt-20 bg-red-300 flex-1">
			<View className="w-[90%] mt-10 justify-center content-center px-10">
				<Label className="text-lg">Seller ID:</Label>
				<TextInput placeholder="Enter your name" className="border-4" />
			</View>
		</View>
	);
};

export default qrCode;

const styles = StyleSheet.create({});

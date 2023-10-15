import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button } from "tamagui";
import { router } from "expo-router";

const ApprovePageAdmin = () => {
	const truncateText = (text: string, maxLength: number) => {
		if (text.length <= maxLength) {
			return text;
		} else {
			return text.substring(0, maxLength) + "...";
		}
	};

	let p = 5;

	return (
		<View
			style={{
				padding: 40,
				backgroundColor: "#8ECDDD",
				margin: 15,
				flex: 0,
				flexDirection: "column",
				borderRadius: 12,
			}}
		>
			<TouchableOpacity style={{ flexDirection: "row" }}>
				<Image
					style={styles.tinyLogo}
					source={{
						uri: "https://reactnative.dev/img/tiny_logo.png",
					}}
				/>
				<View
					style={{
						flexDirection: "column",
						justifyContent: "center",
						marginLeft: 15,
					}}
				>
					<Text style={{ fontSize: 15 }}>
						Name : {truncateText("p", 10)}
					</Text>
					<Text style={{ fontSize: 15 }}>Date : 01/01/0001</Text>
				</View>
			</TouchableOpacity>
			<View style={{ position: "relative", left: "80%" }}>
				<Button
					size="$3"
					width="$8"
					height="$5"
					theme="active"
					borderRadius="$10"
					p={10}
					// onPress={() => router.push("/(admin)/ApproveMain")}
				>
					Approve
				</Button>
			</View>
		</View>
	);
};

export default ApprovePageAdmin;

const styles = StyleSheet.create({
	tinyLogo: {
		width: 70,
		height: 70,
	},
	hr: {
		borderBottomColor: "black", // Change color as needed
		borderBottomWidth: 1, // Change thickness as needed
		marginVertical: 10, // Adjust spacing as needed
	},
});

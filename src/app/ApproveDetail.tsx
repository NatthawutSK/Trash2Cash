import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Button, Stack, XStack, YStack, Image } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import { X } from "@tamagui/lucide-icons";
import { useHeaderHeight } from "@react-navigation/elements";

type Props = {};
const price = [
	{ name: "ขวดแก้ว", price: 1 },
	{ name: "กระดาษลัง", price: 2 },
	{ name: "ขวด PET ใส", price: 3 },
	{ name: "ถุง/ฟิล์ม PE", price: 4 },
	{ name: "กระป๋องอลูมิเนียม", price: 5 },
	{ name: "กระดาษขาวดำ", price: 6 },
];
type approveDetail = {
	name: string;
	img?: string;
	date: string;
	list: string;
};
const ApproveDetail = (props: Props) => {
	const { list } = useLocalSearchParams();

	const ListOBj: approveDetail = JSON.parse(list as string);

	const sellList = JSON.parse(ListOBj.list);
	console.log(ListOBj);
	const header = useHeaderHeight();
	return (
		<YStack ai={"center"} f={1} mt={header}>
			<View className=" bg-[#3C6255] w-[70%]  rounded-2xl content-center p-5 space-y-5 items-center">
				<View className="flex-row justify-between content-center w-[100%]">
					<View>
						<FontAwesome
							name="user-circle"
							size={60}
							color={"white"}
						/>
					</View>
					<Text className="text-2xl self-center text-white">
						{ListOBj.name}
					</Text>
				</View>
				<View className="flex-row justify-between content-center w-[100%]">
					<View>
						<FontAwesome
							name="calendar"
							size={60}
							color={"white"}
						/>
					</View>
					<Text className="text-2xl self-center text-white">
						{ListOBj.date}
					</Text>
				</View>
			</View>
			<View className="bg-[#3C6255] w-[90%] rounded-lg p-5 mt-10">
				<Text className="text-white text-center text-2xl">
					รายละเอียด
				</Text>
				{sellList.map((item: any, i: number) => {
					const priceone =
						price.find((val) => val.name === item.name)?.price !==
						undefined
							? price.find((val) => val.name === item.name)
									?.price! * item.weight
							: 0;
					return (
						<View
							key={i}
							className="flex-row justify-between items-center bg-[#3C6255] rounded-lg px-5 py-3 mt-2"
						>
							<Text className="text-white">{item.name}</Text>
							<Text className="text-white">
								{item.weight} กก.
							</Text>
							<Text className="text-white">{priceone}฿</Text>
						</View>
					);
				})}
				<Text className="text-white text-center">
					ราคารวม{" "}
					{sellList.reduce((val1: any, val2: any) => {
						const priceone =
							price.find((val) => val.name === val2.name)
								?.price || 0;
						return val1 + val2.weight * priceone;
					}, 0)}
				</Text>
			</View>
			<Stack w={"70%"} mt={10} space={10}>
				<Button
					className="bg-green-500 "
					color={"white"}
					onPress={() => router.push("/(tabs)/")}
				>
					ยืนยันการซื้อขาย
				</Button>
				<Button
					className="bg-red-500"
					color={"white"}
					onPress={() => {
						router.push("/qrCodeBuyer");
					}}
				>
					ยกเลิก
				</Button>
			</Stack>
			{/* <Image
				source={{
					uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAKklEQVQ4T2NkoAFgpIGZDKOGUj9UR8N0NEypHAKjSYrKAQo0bjRMqR+mAFOsABZTBcj2AAAAAElFTkSuQmCC",
				}}
			/> */}
		</YStack>
	);
};

export default ApproveDetail;

const styles = StyleSheet.create({});

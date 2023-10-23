import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Button, Stack, XStack, YStack, Image } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import { X } from "@tamagui/lucide-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { useUserContext } from "@/provider/UserContext";
import { gql, useMutation, useQuery } from "@apollo/client";

import { set } from "react-hook-form";
import Spinner from "react-native-loading-spinner-overlay";
import { TypeTrashMaterial, Score } from "@/MockData/types";

type Props = {};
const price = [
	{ name: "ขวดแก้ว", price: 1 },
	{ name: "กระดาษลัง", price: 2 },
	{ name: "ขวด PET ใส", price: 3 },
	{ name: "ถุง/ฟิล์ม ยืด", price: 4 },
	{ name: "กระป๋องอลูมิเนียม", price: 5 },
	{ name: "กระดาษขาวดำ", price: 6 },
];
const co23 = [
	{ name: "ขวดแก้ว", co2: 0.28 },
	{ name: "กระดาษลัง", co2: 3.14 },
	{ name: "ขวด PET ใส", co2: 1.04 },
	{ name: "ถุง/ฟิล์ม ยืด", co2: 0.25 },
	{ name: "กระป๋องอลูมิเนียม", co2: 9.13 },
	{ name: "กระดาษขาวดำ", co2: 2.86 },
];
type approveDetail = {
	name: string;
	auth_id: string;
	date: string;
	score: string;
	material: string;
};
const getMaterialQuery = gql`
	query StoreQuery($auth_id: String!) {
		usersUsingStore_auth_id_fkey(auth_id: $auth_id) {
			store {
				store_detail
			}
		}
	}
`;

const createOrderMutation = gql`
	mutation OrderMutation(
		$buyer_id: String
		$seller_id: String
		$detail: String
		$score_id: ID!
		$score_tree: ID
		$score_trash: ID
		$score_carbon: ID
	) {
		insertOrders(
			current_user_id: $buyer_id
			order_detail: $detail
			trade_user_id: $seller_id
		) {
			order_id
		}
		updateScore(
			score_id: $score_id
			score_trash: $score_trash
			score_tree: $score_tree
			score_carbon: $score_carbon
		) {
			score_tree
		}
	}
`; //

const ApproveDetail = (props: Props) => {
	const { material } = useLocalSearchParams();
	const { dbUser, authUser }: any = useUserContext();
	const orderData: approveDetail = JSON.parse(material as string);
	const scoreData: Score = JSON.parse(orderData.score);
	const sellmaterial = JSON.parse(orderData.material);
	const sumWeight = sellmaterial.reduce((val1: any, val2: any) => {
		return val1 + val2.weight;
	}, 0);
	const sumCarbon = sellmaterial.reduce((val1: any, val2: any) => {
		const co2 = co23.find((val) => val.name === val2.name)?.co2 || 0;
		return val1 + val2.weight * Number(co2);
	}, 0);
	const sumTree = sumCarbon / 10;
	console.log(Number(scoreData.score_tree + sumTree));
	const [handleOrderMutation, { loading: mutationLoad }] =
		useMutation(createOrderMutation);
	const {
		data,
		loading: queryLoad,
		refetch,
		error,
	} = useQuery(getMaterialQuery, {
		variables: { auth_id: authUser?.id },
	});

	const allscore = [
		Number(scoreData.score_id),
		Number(Math.floor(Number(scoreData.score_tree) + sumTree)),
		Number(Number(scoreData.score_trash) + sumWeight),
		Number(Math.floor(Number(scoreData.score_carbon) + sumCarbon)),
	];

	const approveOrder = async () => {
		console.log(orderData);
		try {
			console.log(allscore[0]);
			await handleOrderMutation({
				variables: {
					buyer_id: dbUser.auth_id,
					seller_id: orderData.auth_id,
					detail: JSON.stringify(orderData),
					score_id: allscore[0],
					score_tree: allscore[1],
					score_trash: allscore[2],
					score_carbon: allscore[3],
				},
			});
		} catch (e) {
			console.log(e);
		}
	};

	const header = useHeaderHeight();
	const materialData: TypeTrashMaterial[] = JSON.parse(
		dbUser.store[0].store_detail
	);
	return (
		<YStack ai={"center"} f={1} mt={header - 10}>
			<View className=" bg-[#3C6255] w-[70%]  rounded-2xl content-center p-5 space-y-5 items-center">
				<View className="flex-row justify-between content-center w-[100%]">
					<View>
						<FontAwesome
							name="user-circle"
							size={60}
							color={"white"}
						/>
					</View>
					<Text
						className="text-2xl self-center text-white  min-w-[100px] max-w-[150px]"
						numberOfLines={1}
					>
						{orderData.name}
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
						{orderData.date}
					</Text>
				</View>
			</View>
			<View className="bg-[#3C6255] w-[90%] rounded-lg p-5 px-7 mt-10 max-h-80">
				<Text className="text-white text-center font-bold text-2xl mb-2">
					รายละเอียด
				</Text>
				<FlatList
					data={sellmaterial}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item, index }) => {
						console.log(item.name);
						const priceone =
							materialData.find(
								(val) => val.materialName == item.name
							)?.price !== undefined
								? Number(
										materialData.find(
											(val) =>
												val.materialName === item.name
										)?.price
								  )! * Number(item.weight)
								: 0;
						console.log(priceone);
						return (
							<View
								key={index}
								style={{
									backgroundColor: "#61876E",
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									padding: 10,
									margin: 5,
									borderRadius: 8,
								}}
							>
								<Text
									style={{
										color: "white",
										fontWeight: "bold",
									}}
								>
									{item.name}
								</Text>
								<Text style={{ color: "white" }}>
									{item.weight} กก.
								</Text>
								<Text style={{ color: "white" }}>
									{priceone}฿
								</Text>
							</View>
						);
					}}
				/>
				<View className="b mt-3 py-2 bg-[#61876E] rounded-lg">
					<Text className="text-white text-center text-base font-bold">
						ราคารวม{" "}
						{sellmaterial.reduce((val1: any, val2: any) => {
							const priceone =
								materialData.find(
									(val) => val.materialName === val2.name
								)?.price || 0;
							return val1 + val2.weight * Number(priceone);
						}, 0)}
						฿
					</Text>
				</View>
			</View>
			<Stack w={"70%"} mt={10} space={10}>
				<Button
					className="bg-green-500 "
					color={"white"}
					onPress={() => {
						approveOrder();
						router.push("/(tabs)/");
					}}
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

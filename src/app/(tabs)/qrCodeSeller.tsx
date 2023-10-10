import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import {
	Adapt,
	Button,
	Fieldset,
	Label,
	ScrollView,
	Select,
	Sheet,
	YStack,
} from "tamagui";
import { ChevronDown, ChevronUp, Check, Cross, X } from "@tamagui/lucide-icons";
import { colors } from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import { router } from "expo-router";
import SellingFlatList from "@/components/SellingFlatList";
export type Detail = {
	name: string;
	weight: number;
};
type Props = {};

const userdata = {
	name: "Kitty Cat",
	img: "https://cataas.com/cat",
};

const qrCode = (props: Props) => {
	const [TypeTrash, setTypeTrash] = useState("");
	const [weight, setWeight] = useState("");
	const [list, setList] = useState<Detail[] | []>([]);
	const [idBuyer, setIdBuyer] = useState("");
	const headerheight = useHeaderHeight();
	const category = [
		{ name: "ขวดแก้ว" },
		{ name: "กระดาษลัง" },
		{ name: "ขวด PET ใส" },
		{ name: "ถุง/ฟิล์ม PE" },
		{ name: "กระป๋องอลูมิเนียม" },
		{ name: "กระดาษขาวดำ" },
	];
	const [matte, setMatte] = useState(category);
	const removeItem = (index: number) => {
		setList(
			list.filter((val, i) => {
				return i != index;
			})
		);
	};

	return (
		<ScrollView>
			<View className=" items-center content-center   flex-1 ">
				<View
					className="w-[95%] justify-center content-center px-10 mb-5   space-y-5"
					style={{ marginTop: headerheight + 20 }}
				>
					<Label className="text-lg font-bold">ไอดีของผู้ขาย:</Label>
					<TextInput
						placeholder="Enter your name"
						value={idBuyer}
						onChangeText={(text) => setIdBuyer(text)}
						className="border-2 p-3 rounded-2xl mt-2 text-[#61876E] border-[#61876E]"
					/>
					<Fieldset>
						<Label
							htmlFor="type"
							mb={15}
							className="font-bold text-lg"
						>
							เลือกวัสดุ
						</Label>
						<Select
							id="type"
							value={TypeTrash}
							onValueChange={setTypeTrash}
						>
							<Select.Trigger
								id="type"
								iconAfter={ChevronDown}
								className="border-2 p-3 rounded-2xl mt-2 text-[#61876E] border-[#61876E]"
							>
								<Select.Value placeholder="เลือกวัสดุที่ขาย" />
							</Select.Trigger>

							<Adapt when="sm" platform="touch">
								<Sheet modal dismissOnSnapToBottom>
									<Sheet.Frame>
										<Sheet.ScrollView>
											<Adapt.Contents />
										</Sheet.ScrollView>
									</Sheet.Frame>
									<Sheet.Overlay />
								</Sheet>
							</Adapt>

							<Select.Content zIndex={200000}>
								<Select.ScrollUpButton
									ai="center"
									jc="center"
									pos="relative"
									w="100%"
									h="$3"
								>
									<YStack zi={10}>
										<ChevronUp size={20} />
									</YStack>
								</Select.ScrollUpButton>

								<Select.Viewport minWidth={200}>
									<Select.Group>
										<Select.Label>ว้สดุ</Select.Label>
										{category.map((item, i) => {
											return (
												<Select.Item
													index={i}
													key={item.name}
													value={item.name}
												>
													<Select.ItemText color="$color">
														{item.name}
													</Select.ItemText>
													<Select.ItemIndicator ml="auto">
														<Check size={16} />
													</Select.ItemIndicator>
												</Select.Item>
											);
										})}
									</Select.Group>
								</Select.Viewport>

								<Select.ScrollDownButton
									ai="center"
									jc="center"
									pos="relative"
									w="100%"
									h="$3"
								>
									<YStack zi={10}>
										<ChevronDown size={20} />
									</YStack>
								</Select.ScrollDownButton>
							</Select.Content>
						</Select>
					</Fieldset>
					<Label className="text-lg font-bold">น้ำหนัก:</Label>
					<View className="flex-row justify-between items-center">
						<TextInput
							placeholder="น้ำหนักของวัสดุ"
							value={weight}
							onChangeText={(text) => setWeight(text)}
							className="border-2 p-3 rounded-2xl w-[80%] text-[#61876E] border-[#61876E]"
						/>
						<Text className="text-lg font-bold">กก.</Text>
					</View>
					<Button
						color={"white"}
						className="bg-[#3C6255]"
						onPress={() => {
							setList([
								...list,
								{ name: TypeTrash, weight: Number(weight) },
							]);
							setTypeTrash("");
							setWeight("0");
						}}
					>
						เพิ่มรายการ
					</Button>
					<View className=" bg-[#61876E] text-white rounded-lg px-3 py-3 w-[100%]">
						<Text className="text-lg font-bold text-white">
							รายการที่เพิ่ม
						</Text>
						{list.length > 0 ? (
							list.map((item, i) => {
								return (
									<View
										key={i}
										className="flex-row justify-between items-center bg-[#3C6255] rounded-lg px-5 py-3 mt-2"
									>
										<Text className="text-white">
											{item.name}
										</Text>
										<Text className="text-white">
											{item.weight} กก.
										</Text>
										<Button
											icon={X}
											color={"white"}
											size={"$3"}
											className="bg-[#3C6255]"
											onPress={() => {
												console.log("pressss");

												setList(
													list.filter(
														(val, index) => {
															return index != i;
														}
													)
												);
											}}
										></Button>
									</View>
								);
							})
						) : (
							// SellingFlatList({ list, removeItem })
							<Text className="text-base text-white">
								ไม่มีรายการ
							</Text>
						)}
					</View>

					<Button
						bg={colors.green3}
						color={"white"}
						onPress={() => {
							router.push({
								pathname: "/ShowQr",
								params: {
									username: userdata.name,
									userimg: userdata.img,
									date: new Date().toLocaleDateString(),
									list: JSON.stringify(list),
								},
							});
							console.log({
								id: idBuyer,
								list: JSON.stringify(list),
							});
						}}
					>
						สร้าง QR Code
					</Button>
				</View>
			</View>
		</ScrollView>
	);
};

export default qrCode;

const styles = StyleSheet.create({});

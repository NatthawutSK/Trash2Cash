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
import { useUserContext } from "@/provider/UserContext";
import { Controller, useForm } from "react-hook-form";
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
	const [material, setMaterial] = useState<Detail[] | []>([]);
	const [idBuyer, setIdBuyer] = useState("");
	const headerheight = useHeaderHeight();
	const { dbUser }: any = useUserContext();
	const category = [
		{ name: "ขวดแก้ว" },
		{ name: "กระดาษลัง" },
		{ name: "ขวด PET ใส" },
		{ name: "ถุง/ฟิล์ม PE" },
		{ name: "กระป๋องอลูมิเนียม" },
		{ name: "กระดาษขาวดำ" },
	];
	type FormValues = {
		name: string;
		weight: string;
	};
	const [matte, setMatte] = useState(category);
	const removeItem = (index: number) => {
		setMaterial(
			material.filter((val, i) => {
				return i != index;
			})
		);
	};
	const {
		getValues,
		control,
		trigger,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<FormValues>({
		mode: "onChange",
		defaultValues: {
			name: "",
			weight: "",
		},
	});
	const AddMaterial = async () => {
		if (await trigger(["name", "weight"])) {
			setMaterial((prev) => [
				...prev,
				{
					name: getValues("name"),
					weight: Number(getValues("weight")),
				},
			]);
			setMatte(matte.filter((val) => val.name != getValues("name")));
			setValue("name", "");
			setValue("weight", "");
		}
	};
	return (
		<ScrollView>
			<View className=" items-center content-center   flex-1 ">
				<View
					className="w-[95%] justify-center  content-center px-10 mb-5 p-4   space-y-5"
					style={{ marginTop: headerheight }}
				>
					<Controller
						control={control}
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<>
								<Label
									htmlFor="type"
									mb={15}
									className="font-bold text-lg"
								>
									เลือกวัสดุ
								</Label>
								<Select
									id="type"
									value={value}
									onValueChange={onChange}
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
												<Select.Label>
													ว้สดุ
												</Select.Label>
												{matte.map((item, i) => {
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
																<Check
																	size={16}
																/>
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
							</>
						)}
						name="name"
					/>
					{errors.name && (
						<Text className="text-red-600">This is required.</Text>
					)}
					<Controller
						control={control}
						rules={{
							required: {
								value: true,
								message: "กรุณากรอกน้ำหนัก",
							},

							pattern: {
								value: /^[0-9]*$/,
								message: "กรอกน้ำหนักให้ถูกต้อง",
							},
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<>
								<Label className="text-lg font-bold mt-5 mb-5">
									น้ำหนัก:
								</Label>
								<View className="flex-row justify-between items-center">
									<TextInput
										placeholder="น้ำหนักของวัสดุ"
										value={value}
										onChangeText={onChange}
										className="border-2 p-3 rounded-2xl w-[80%] text-[#61876E] border-[#61876E]"
									/>
									<Text className="text-lg font-bold">
										กก.
									</Text>
								</View>
							</>
						)}
						name="weight"
					/>
					{errors.weight && (
						<Text className="text-red-600">
							{errors.weight.message}
						</Text>
					)}
					<Button
						color={"white"}
						className="bg-[#3C6255]"
						onPress={() => {
							AddMaterial();
						}}
					>
						เพิ่มรายการ
					</Button>
					<View className=" bg-[#61876E] text-white rounded-lg px-3 py-3 w-[100%]">
						<Text className="text-lg font-bold text-white">
							รายการที่เพิ่ม
						</Text>
						{material.length > 0 ? (
							material.map((item, i) => {
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

												setMaterial(
													material.filter(
														(val, index) => {
															return index != i;
														}
													)
												);
												setMatte([
													...matte,
													{ name: item.name },
												]);
											}}
										></Button>
									</View>
								);
							})
						) : (
							// SellingFlatmaterial({ material, removeItem })
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
									username: dbUser.user_name,
									auth_id: dbUser.auth_id,
									score: JSON.stringify(dbUser.score[0]),
									date: new Date().toLocaleDateString(),
									material: JSON.stringify(material),
								},
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

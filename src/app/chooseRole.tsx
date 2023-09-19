import { MySafeAreaView } from "@/components/MySafeAreaView";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, H4, Stack, Text, XStack } from "tamagui";

type Props = {};

const chooseRole = (props: Props) => {
	const router = useRouter();
	return (
		<SafeAreaView style={{ flex: 1, justifyContent: "center", gap: 20 }}>
			<H4 ta={"center"} className="font-black text-2xl">
				คุณเป็นใคร ?
			</H4>
			<XStack ai={"center"} jc={"center"} space={"$6"}>
				<Button
					size={"$6"}
					color={"$green1Light"}
					bg={"$green10Light"}
					onPress={() => router.push("/formStore")}
				>
					ร้านรับซื้อ
				</Button>
				<Button
					size={"$6"}
					color={"$green1Light"}
					bg={"$green10Light"}
					onPress={() => router.push("/formSeller")}
				>
					คนขาย
				</Button>
			</XStack>
		</SafeAreaView>
	);
};

export default chooseRole;

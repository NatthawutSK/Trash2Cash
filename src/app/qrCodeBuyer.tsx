import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useHeaderHeight } from "@react-navigation/elements";
import { StatusBar } from "expo-status-bar";
import { colors } from "@/constants/Colors";
import { router } from "expo-router";
import { Button } from "tamagui";
import { useIsFocused } from "@react-navigation/native";

export default function App() {
	const [hasPermission, setHasPermission] = useState<boolean | null>(null);
	const [scanned, setScanned] = useState(false);
	const isFocused = useIsFocused();
	const header = useHeaderHeight();
	console.log(scanned);
	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === "granted");
		};

		getBarCodeScannerPermissions();
	}, []);

	const handleBarCodeScanned = ({
		type,
		data,
	}: {
		type: string;
		data: string;
	}) => {
		setScanned(true);
		alert(data);
		try {
			const dataJson = JSON.parse(data);
			router.push({
				pathname: "/ApproveDetail",
				params: { list: data },
			});
		} catch (err) {
			alert("ไม่สามารถอ่าน QR code ได้");
		}
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={styles.container}>
			<View style={styles.barcode}>
				{isFocused && (
					<BarCodeScanner
						onBarCodeScanned={
							scanned ? undefined : handleBarCodeScanned
						}
						style={{
							height: 600,
							width: 600,
							flexDirection: "column",
							flex: 1,
						}}
					>
						<Text
							style={{
								fontSize: 20,
								width: "100%",
								textAlign: "center",
								color: "white",
							}}
						>
							Scan your QR code
						</Text>
						<View></View>
					</BarCodeScanner>
				)}
			</View>

			{scanned && (
				<Button
					bg={colors.green3}
					color={"white"}
					onPress={() => setScanned(false)}
				>
					แสกนอีกครั้ง
				</Button>
			)}
		</View>
	);
}

const { width } = Dimensions.get("window");
const qrSize = width * 0.7;
const opacity = "rgba(0, 0, 0, .6)";
const styles = StyleSheet.create({
	container: {
		height: "100%",
		paddingHorizontal: 10,
		justifyContent: "center",
		alignContent: "center",
	},
	barcode: {
		borderRadius: 10,
		borderColor: colors.green4,
		borderWidth: 10,
		marginBottom: 20,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: 600,
		overflow: "hidden",
	},
	layerTop: {
		flex: 2,
		backgroundColor: opacity,
	},
	layerCenter: {
		flex: 5,
		flexDirection: "row",
	},
	layerLeft: {
		flex: 1,
		backgroundColor: opacity,
	},
	focused: {
		flex: 10,
	},
	layerRight: {
		flex: 1,
		backgroundColor: opacity,
	},
	layerBottom: {
		flex: 2,
		backgroundColor: opacity,
	},
	qr: {
		marginTop: "20%",
		marginBottom: "20%",
		width: qrSize,
		height: qrSize,
	},
});

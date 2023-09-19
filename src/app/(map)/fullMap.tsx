import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import DialogDemo from "@/components/DialogDemo";
import SpinnerDemo from "@/components/SpinnerDemo";
import MapViewComponent from "@/components/MapComponent";
import { SafeAreaView } from "react-native-safe-area-context";

export default function fullMap() {
	return (
		<SafeAreaView>
			{/* <Text style={styles.title}>Full Map</Text> */}
			{/* <DialogDemo />
      <SpinnerDemo /> */}
			{/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
			<MapViewComponent />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});

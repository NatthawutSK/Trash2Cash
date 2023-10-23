import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FlatList } from "react-native-gesture-handler";

import FlatListMaterial from "./FlatListMaterial";
import FlatListStore from "./FlatListStore";
import FlatlistRanking from "./FlatlistRanking";
import { DATARank } from "@/app/(tabs)/scoreRanking";
import { RankingUserProps } from "./RankingUser";
import { View } from "tamagui";

const Tab = createMaterialTopTabNavigator();

function RankTabs({ data }: { data: RankingUserProps[] }) {
	return (
		<View>
			<FlatlistRanking data={data} />
		</View>
	);
}
export default RankTabs;

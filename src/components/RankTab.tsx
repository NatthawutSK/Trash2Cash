import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FlatList } from "react-native-gesture-handler";

import FlatListMaterial from "./FlatListMaterial";
import FlatListStore from "./FlatListStore";
import FlatlistRanking from "./FlatlistRanking";
import { DATARank } from "@/app/(tabs)/scoreRanking";
import { RankingUserProps } from "./RankingUser";

const Tab = createMaterialTopTabNavigator();

function RankTabs({ data }: { data: RankingUserProps[] }) {
	return (
		<Tab.Navigator initialRouteName="ฮีโร่" screenOptions={{}}>
			<Tab.Screen
				name="รวมทั้งหมด"
				children={() => <FlatlistRanking data={data} />}
			/>
			<Tab.Screen
				name="ภายในเดือนนี้"
				children={() => (
					<FlatlistRanking
						data={data.filter((val) => {
							return val.id < 5;
						})}
					/>
				)}
			/>
		</Tab.Navigator>
	);
}
export default RankTabs;

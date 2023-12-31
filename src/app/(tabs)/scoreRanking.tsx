import React, { useEffect, useState } from "react";
import {
	H5,
	Separator,
	SizableText,
	Tabs,
	YStack,
	TabsContentProps,
	Avatar,
	Stack,
	SizeTokens,
	Text,
	H4,
	View,
	Button,
	XStack,
	ColorTokens,
	validPseudoKeys,
} from "tamagui";
import { FlatList, RefreshControl } from "react-native";
import { router } from "expo-router";
import RankingUser from "./../../components/RankingUser";
import FlatlistRanking from "@/components/FlatlistRanking";
import RankTabs from "@/components/RankTab";
import { useHeaderHeight } from "@react-navigation/elements";
import { colors } from "@/constants/Colors";
import { gql, useQuery } from "@apollo/client";
import Spinner from "react-native-loading-spinner-overlay";
import { Score } from "@/types";
import { useUserContext } from "@/provider/UserContext";
import { fetchImgPro, fetchProfile } from "@/utils/util";
import { UserRankType } from "@/MockData/types";
import { ScrollView } from "react-native-virtualized-view";
import { useFocus } from "@/components/UseFocus";
type Props = {};
// type UserScore :
export const DATARank: any[] = [
	{
		id: 1,
		name: "test1 surr1",
		img: "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=0",
		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 2,
		name: "test2 surr2",
		img: "https://picsum.photos/200",
		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 3,
		name: "test3 surr3",

		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 4,
		name: "test4",

		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 5,
		name: "Aaaaaaa Gggggg",
		img: "https://picsum.photos/300",
		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 6,
		name: "test5 surr5",

		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 7,
		name: "test6",

		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 8,
		name: "test7 surr7",

		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 9,
		name: "tes8 surr8",

		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
	{
		id: 10,
		name: "test9",

		point: {
			score_trash: 500,
			score_carbon: 500,
			score_tree: 500,
		},
	},
];
const userPaginatedList = gql`
	query usersList {
		usersSellerList(first: 10) {
			auth_id
			roles
			user_name
			score {
				score_trash
				score_carbon
				score_tree
			}
		}
	}
`;
const Ranking = (props: Props) => {
	const { data, loading, refetch, error } = useQuery(userPaginatedList);
	const { dbUser }: any = useUserContext();
	const [img, setImg] = useState<{ name: string; url: string }[]>([]);
	const { focusCount, isFocused } = useFocus();
	// useEffect(() => {
	// 	// trigger when you navigate back from another screen
	// 	// you can background reload data here ...
	// 	fetchProfile(setImg);
	// }, []);
	// console.log(img, "img");
	useEffect(() => {
		if (focusCount === 1 && isFocused) {
			// this is the first time focus => init screen here
			fetchProfile(setImg);
			refetch();
		}
	}, [isFocused]);

	useEffect(() => {
		if (focusCount > 1 && isFocused) {
			// trigger when you navigate back from another screen
			// you can background reload data here ...
			fetchProfile(setImg);
			refetch();
		}
	}, [isFocused]);

	if (loading) {
		return (
			<Spinner
				animation="fade"
				visible={true}
				textContent={"Loading..."}
				textStyle={{ color: "#FFF" }}
			/>
		);
	}
	console.log(error);
	if (error) return <Text>Something went wrong</Text>;
	//   const DATA: UserRankType[] = data?.usersSellerList
	//     .slice() // Make a shallow copy of the array
	//     .sort(
	//       (a: UserRankType, b: UserRankType) =>
	//         b.score[0].score_trash - a.score[0].score_trash
	//     );

	//   const DATAID = DATA.map((val) => val.auth_id);

	//   fetchImgPro(DATAID)
	//     .then((img: string[]) => {
	//       DATA.forEach((val, index) => {
	//         val.img = img[index];
	//       });
	//       // Now that `DATA` is updated with `img` data, you can work with it here.
	//       console.log(DATA);
	//     })
	//     .catch((error) => {
	//       console.error("Error fetching images:", error);
	//     });
	let DATA: any = data?.usersSellerList
		.map((val: any) => {
			const authId = val.auth_id;
			const foundImg = img.find((val2) =>
				val2.name.includes(`${authId}.png`)
			);

			return {
				...val,
				img: foundImg?.url,
			};
		})
		.sort(
			(a: any, b: any) => b.score[0].score_trash - a.score[0].score_trash
		);
	let myImg = img.find((val) =>
		val.name.includes(`Profile/${dbUser.auth_id}.png`)
	);

	// console.log(DATA[0], "DATA");
	return (
		// <ScrollView
		// 	style={{ flex: 1 }}
		// 	refreshControl={
		// 		<RefreshControl refreshing={loading} onRefresh={refetch} />
		// 	}
		// >
		<YStack bg={"green"} flex={1} jc={"center"} mt={50}>
			{/* <XStack pt={30} ac={"center"} ai={"center"} jc={"space-evenly"}>
				<Button
				bc={"#1cb60e"}
				color={"#daffd6"}
				br={20}
					onPress={() => setNow(DATA)}
					>
					All Time
					</Button>
					<Button br={20} onPress={() => setNow(DATA2)}>
					This Month
					</Button>
					</XStack>
					<YStack flex={1} jc={"center"} ai={"center"} ac={"center"} p={20}>
					<FlatList
					showsVerticalScrollIndicator={false}
					data={isNow}
					renderItem={({ item, index }) =>
					renderRankingUser({ ...item, index: index + 1 })
				}
				keyExtractor={(item, index) => index.toString()}
				// Performance settings
				removeClippedSubviews={true} // Unmount components when outside of window
				initialNumToRender={1} // Reduce initial render amount
				maxToRenderPerBatch={1} // Reduce number in each render batch
				windowSize={2} // Reduce the window size
			/> */}
			{/* <Stack
				h={dbUser.roles === "Seller" ? "90%" : "100%"}
				mt={10}
				mb={15}
			>/ */}
			{/* <ScrollView
				style={{ flex: 1 }}
				refreshControl={
					<RefreshControl refreshing={loading} onRefresh={refetch} />
				}
			> */}
			<Stack h={dbUser.roles === "Seller" ? "90%" : "105%"} mt={10}>
				<FlatlistRanking data={DATA} />
			</Stack>
			{/* </Stack> */}
			{dbUser.roles === "Seller" && (
				<Stack
					className="rounded-t-2xl"
					mt={-30}
					bg={colors.green3}
					mb={20}
					pb={20}
					// borderRadius={"$10"}
					pt={"$2"}
					// mt={"$5"}
				>
					<RankingUser
						img={myImg?.url}
						isMe={true}
						auth_id={dbUser.auth_id}
						roles={dbUser.roles}
						score={dbUser.score}
						user_name={dbUser.user_name}
					/>
				</Stack>
			)}
			{/* </ScrollView> */}

			{/* </YStack> */}
		</YStack>
		// </ScrollView>
	);
};

export default Ranking;

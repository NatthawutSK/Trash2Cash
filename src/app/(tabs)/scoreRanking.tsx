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
import { FlatList } from "react-native";
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
  useEffect(() => {
    // trigger when you navigate back from another screen
    // you can background reload data here ...
    fetchProfile(setImg);
  }, []);
  console.log(img, "img");

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
  const DATA: UserRankType[] = data?.usersSellerList
    .slice() // Make a shallow copy of the array
    .sort(
      (a: UserRankType, b: UserRankType) =>
        b.score[0].score_trash - a.score[0].score_trash
    );

  const DATAID = DATA.map((val) => val.auth_id);

  fetchImgPro(DATAID)
    .then((img: string[]) => {
      DATA.forEach((val, index) => {
        val.img = img[index];
      });
      // Now that `DATA` is updated with `img` data, you can work with it here.
      console.log(DATA);
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });

  // console.log(DATA[0], "DATA");
  return (
    <YStack bg={"green"} flex={1}>
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
      <Stack h={dbUser.roles === "Seller" ? "90%" : "100%"} mt={10} mb={15}>
        <FlatlistRanking data={DATA} />
      </Stack>
      {dbUser.role === "Seller" && (
        <Stack mt={-35} bg={colors.green3} mb={20} pb={20}>
          <RankingUser {...dbUser} isMe={true} />
        </Stack>
      )}

      {/* </YStack> */}
    </YStack>
  );
};

export default Ranking;

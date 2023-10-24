import { SafeAreaView, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
// import SearchBar from "@/components/SearchBar";
import DetailPurchaseComponent from "@/components/DetailPurchaseComponent";
import FlatListHistory from "@/components/FlatListHistory";
import { Stack, Text } from "tamagui";
import { ScrollView } from "react-native-virtualized-view";
import { gql, useQuery } from "@apollo/client";
import { useUserContext } from "@/provider/UserContext";
import Spinner from "react-native-loading-spinner-overlay";

type Props = {};
const DATA = [
  {
    img: "https://picsum.photos/200",
    name: "ร้าน รี",
    date: "01/02/2575",
    info: [
      ["box", "1"],
      ["bottle", "2"],
    ],
  },
  {
    img: "https://picsum.photos/203",
    name: "ร้าน รีไซ",
    date: "01/02/2575",
    info: [
      ["box", "1"],
      ["bottle", "2"],
    ],
  },
  {
    img: "https://picsum.photos/204",
    name: "ร้าน รีเคิลเคิลเคิลเคิลเคิลเติลเต",
    date: "01/02/2575",
    info: [
      ["box", "1"],
      ["bottle", "2"],
    ],
  },
];

const historyStoreQuery = gql`
  query MyQuery($auth_id: String!) {
    ordersUsingOrders_current_user_id_fkey(auth_id: $auth_id) {
      order_id
      order_detail
      usersUsingOrders_trade_user_id_fkey {
        user_name
      }
    }
  }
`;

const historySellerQuery = gql`
  query MyQuery($auth_id: String!) {
    ordersUsingOrders_trade_user_id_fkey(auth_id: $auth_id) {
      order_id
      order_detail
      usersUsingOrders_current_user_id_fkey {
        user_name
      }
    }
  }
`;

export default function history() {
  const { dbUser, authUser }: any = useUserContext();
  const { data, loading, refetch } = useQuery(
    dbUser.roles === "Buyer" ? historyStoreQuery : historySellerQuery,
    {
      variables: { auth_id: authUser?.id },
    }
  );

  console.log(data);

  // console.log(data.ordersUsingOrders_trade_user_id_fkey);

  // console.log("za1", data?.ordersUsingOrders_current_user_id_fkey);

  // console.log(" kuy", dataRaw);
  let transformedData: any = [];
  if (!loading) {
    const dataRaw =
      dbUser.roles === "Buyer"
        ? data?.ordersUsingOrders_current_user_id_fkey
        : data?.ordersUsingOrders_trade_user_id_fkey;
    transformedData = dataRaw.map((item: any) => {
      const orderDetail = JSON.parse(item.order_detail);
      // const material = JSON.parse(orderDetail.material);

      return {
        name:
          dbUser.roles === "Buyer"
            ? item.usersUsingOrders_trade_user_id_fkey.user_name
            : item.usersUsingOrders_current_user_id_fkey.user_name,
        date: orderDetail.date,
        infoOrder: JSON.parse(orderDetail.material),
      };
    });
  }

  // console.log("za2", transformedData);
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
  // console.log("555", authUser.id);

  return (
    // <Stack ac={"center"}>
    <ScrollView style={{ flex: 1 }}>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      {/* <Text style={styles.title}>Tab One</Text>
      <Button alignSelf="center" size="$6">
        Large
      </Button>
      <SearchBar placeholder={""} onSearch={function (text: string): void {
        throw new Error("Function not implemented.");
      } } />
      <SwitchDemo /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <FlatListHistory data={transformedData} />
    </ScrollView>
    // </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 15,
    width: "100%",
  },
});

import { StyleSheet, Image } from "react-native";

import { Text, View } from "@/components/Themed";
import { router } from "expo-router";
import { Button, ScrollView } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import FlatListNearbyStore from "@/components/FlatListNearbyStore";
import { Stack, XStack, YStack } from "tamagui";
import { gql, useQuery } from "@apollo/client";
import { convertDistance, getDistance, orderByDistance } from "geolib";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import Spinner from "react-native-loading-spinner-overlay";
type Props = {};

const LocationQuery = gql`
  query MyQuery {
    location_storeList {
      auth_id
      latitude
      location_id
      longtitude
      users {
        user_name
        phone_number
      }
    }
  }
`;

export default function nearbyRanking() {
  const { data, loading } = useQuery(LocationQuery);

  const [location, setLocation] = useState<Location.LocationObject>({
    coords: {
      latitude: 0,
      longitude: 0,
      altitude: null,
      accuracy: null,
      altitudeAccuracy: null,
      heading: null,
      speed: null,
    },
    timestamp: 0,
    mocked: false,
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // console.log(data?.location_storeList);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  // console.log(loading);
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

  let NearbyData = [];

  if (!loading) {
    const resultArray = data?.location_storeList.map((item: any) => ({
      latitude: parseFloat(item.latitude),
      longitude: parseFloat(item.longtitude),
    }));

    const orderByDis = orderByDistance(
      {
        latitude: location?.coords.latitude!,
        longitude: location?.coords.longitude!,
      },
      resultArray
    );

    NearbyData = resultArray?.map((item1: any) => {
      const match = data?.location_storeList.find(
        (item2: any) =>
          parseFloat(item2.latitude) === item1.latitude &&
          parseFloat(item2.longtitude) === item1.longitude
      );
      return {
        ...item1,
        user_name: match ? match?.users?.user_name : undefined,
        auth_id: match ? match?.auth_id : undefined,
        distance: match
          ? convertDistance(
              getDistance(
                {
                  latitude: parseFloat(item1.latitude),
                  longitude: parseFloat(item1.longitude),
                },
                {
                  latitude: location?.coords.latitude!,
                  longitude: location?.coords.longitude!,
                }
              ),
              "m"
            )
          : undefined,
      };
    });
    console.log("resultArray", resultArray);
    console.log("orderByDis", orderByDis);
  }

  console.log("NearbyData", NearbyData);

  return (
    <>
      <View className="bg-white h-full w-full">
        <Image
          className="h-full w-full absolute"
          source={require("../../../assets/images/background4.png")}
        />
        <Stack p={15} justifyContent="center">
          <YStack mt={20} p={20} h={"97%"} className="bg-transparent">
            <FlatListNearbyStore data={NearbyData} />
            <Button
              className="bg-inherit bg-[#61876e] "
              onPress={() => router.push("/(map)/fullMap")}
              p={10}
              mt={20}
              color={"$yellow1"}
            >
              Go Full Map
            </Button>
          </YStack>
        </Stack>
      </View>
    </>
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

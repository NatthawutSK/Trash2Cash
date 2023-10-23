import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { getDistance, convertDistance, orderByDistance } from "geolib";
// import { useLocation } from "@/provider/LocationProvider";
import { Stack, XStack } from "tamagui";
import { gql, useQuery } from "@apollo/client";
type Props = {};

const locationQuery = gql`
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

const MiniMap = (props: Props) => {
  const { data, loading } = useQuery(locationQuery);
  // console.log(data?.location_storeList);

  // const { location } = useLocation();
  //   const customMarker = (
  //     <Image
  //       source={require("../../assets/images/icons8-recycle-64.png")}
  //       style={{ width: 40, height: 40 }}
  //     />
  //   );

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
  return (
    <>
      {/* <XStack ai={"center"} jc={"center"}> */}
      <MapView
        style={{ width: "100%", height: 250 }}
        region={{
          latitude: location?.coords.latitude!,
          longitude: location?.coords.longitude!,
          latitudeDelta: 0.0002,
          longitudeDelta: 0.0121,
        }}
        zoomEnabled={true}
        rotateEnabled={true}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
      >
        {data?.location_storeList.map((item: any) => (
          <Marker
            key={item.location_id}
            coordinate={{
              latitude: parseFloat(item.latitude),
              longitude: parseFloat(item.longtitude),
            }}
            title={item.users.user_name}
            description="รับหมดไม่สนขยะไหน"
          >
            <Image
              source={require("../../assets/images/icons8-recycle-64.png")}
              style={{ width: 40, height: 40 }}
            />
          </Marker>
        ))}
      </MapView>
      {/* </XStack> */}
    </>
  );
};

export default MiniMap;

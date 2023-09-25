import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { getDistance, convertDistance, orderByDistance } from "geolib";
import { useLocation } from "@/provider/LocationProvider";
import { Stack, XStack } from "tamagui";
type Props = {};

const MiniMap = (props: Props) => {
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
        <Marker
          coordinate={{
            latitude: location?.coords.latitude! - 0.002,
            longitude: location?.coords.longitude! - 0.0005,
          }}
          title="ร้านพานิช"
          description="รับหมดไม่สนขยะไหน"
        >
          <Image
            source={require("../../assets/images/icons8-recycle-64.png")}
            style={{ width: 40, height: 40 }}
          />
        </Marker>
        <Marker
          coordinate={{
            latitude: location?.coords.latitude! + 0.001,
            longitude: location?.coords.longitude! + 0.0005,
          }}
          title="Marker Title"
          description="Marker Description"
        >
          <Image
            source={require("../../assets/images/icons8-recycle-64.png")}
            style={{ width: 40, height: 40 }}
          />
        </Marker>
        <Marker
          coordinate={{
            latitude: location?.coords.latitude! - 0.00005,
            longitude: location?.coords.longitude! - 0.001,
          }}
          title="Marker Title"
          description="Marker Description"
        >
          <Image
            source={require("../../assets/images/icons8-recycle-64.png")}
            style={{ width: 40, height: 40 }}
          />
        </Marker>
      </MapView>
      {/* </XStack> */}
    </>
  );
};

export default MiniMap;

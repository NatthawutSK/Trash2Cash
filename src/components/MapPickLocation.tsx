import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { getDistance, convertDistance, orderByDistance } from "geolib";
// import { useLocation } from "@/provider/LocationProvider";
import { Button, Image } from "tamagui";
import { useRouter } from "expo-router";
import { MySafeAreaView } from "./MySafeAreaView";
import { SafeAreaView } from "react-native-safe-area-context";
import { set } from "react-hook-form";
type Location = {
  latitude: number;
  longitude: number;
};
type Props = {
  addLocation: (location: Location) => void;
};

const MapPickLocation = ({ addLocation }: Props) => {
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

  const [sendLo, setSendLo] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });

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
  // const { location } = useLocation();
  const router = useRouter();
  return (
    // <SafeAreaView className=" justify-center items-center">
    <View
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <View>
        <MapView
          style={{ width: "100%", height: "100%" }}
          region={{
            latitude: location?.coords.latitude!,
            longitude: location?.coords.longitude!,
            latitudeDelta: 0.0211,
            longitudeDelta: 0.0121,
          }}
          zoomEnabled={true}
          rotateEnabled={true}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
        >
          <Marker
            draggable={true}
            coordinate={{
              latitude: location?.coords.latitude!,
              longitude: location?.coords.longitude!,
            }}
            title="Marker Title"
            description="Marker Description"
            onDragEnd={(e) => {
              console.log(e.nativeEvent.coordinate);
              setSendLo({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          />
        </MapView>
      </View>
      <Button
        bg={"$green10Light"}
        color={"$green1Light"}
        w={"80%"}
        alignSelf={"center"}
        style={{ position: "absolute", bottom: 25 }}
        onPress={() => {
          if (sendLo.latitude === 0 && sendLo.longitude === 0) {
            addLocation({
              latitude: location?.coords.latitude!,
              longitude: location?.coords.longitude!,
            });
          } else {
            addLocation(sendLo);
          }
        }}
      >
        ใช้ตำแหน่งนี้
      </Button>
      {/* <Text>
        {convertDistance(
          getDistance(
            { latitude: 13.756331, longitude: 100.501762 },
            {
              latitude: location?.coords.latitude!,
              longitude: location?.coords.longitude!,
            }
          ),
          "km"
        )}
      </Text>
      <Text>
        {JSON.stringify(
          orderByDistance(
            {
              latitude: location?.coords.latitude!,
              longitude: location?.coords.longitude!,
            },
            [
              { latitude: 13.756331, longitude: 100.501762 },
              { latitude: 13.361143, longitude: 100.984673 },
              { latitude: 13.70038, longitude: 100.72752 },
            ]
            )
            )}
          </Text> */}
    </View>
    // </SafeAreaView>
  );
};

export default MapPickLocation;

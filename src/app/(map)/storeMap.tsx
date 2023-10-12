import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
// import { Text, View } from "@/components/Themed";
import DialogDemo from "@/components/DialogDemo";
import SpinnerDemo from "@/components/SpinnerDemo";
import MapViewComponent from "@/components/MapComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import { useLocation } from "@/provider/LocationProvider";
import { useRouter } from "expo-router";
import { Button, Image } from "tamagui";
export default function storeMap() {
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
  // const { location } = useLocation();
  const router = useRouter();
  return (
    // <SafeAreaView >
    <View
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
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
          }}
        />
        <Marker
          coordinate={{
            latitude: location?.coords.latitude! - 0.002,
            longitude: location?.coords.longitude! - 0.0005,
          }}
          title="ร้านพานิช"
          description="รับหมดไม่สนขยะไหน"
        >
          <Image
            source={require("../../../assets/images/icons8-recycle-64.png")}
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
            source={require("../../../assets/images/icons8-recycle-64.png")}
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
            source={require("../../../assets/images/icons8-recycle-64.png")}
            style={{ width: 40, height: 40 }}
          />
        </Marker>
      </MapView>
      <Button
        bg={"$green10Light"}
        color={"$green1Light"}
        w={"80%"}
        alignSelf={"center"}
        style={{ position: "absolute", bottom: 25 }}
        onPress={() => router.back()}
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

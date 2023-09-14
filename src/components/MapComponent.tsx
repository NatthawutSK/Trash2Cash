import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { getDistance, convertDistance, orderByDistance } from "geolib";
type Props = {};

const MapViewComponent = (props: Props) => {
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
  const origin = { latitude: 37.3318456, longitude: -122.0296002 };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
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

  let text: Location.LocationObject | null = null;
  if (errorMsg) {
    console.log(errorMsg);
  } else if (location) {
    text = location;
  }
  return (
    <>
      <MapView
        style={{ width: "85%", height: "85%", alignItems: "center" }}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
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
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title="Marker Title"
          description="Marker Description"
          onDragEnd={(e) => {
            console.log({ x: e.nativeEvent.coordinate });
          }}
        />
      </MapView>
      <Text>
        {convertDistance(
          getDistance(
            { latitude: 13.756331, longitude: 100.501762 },
            {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }
          ),
          "km"
        )}
      </Text>
      <Text>
        {JSON.stringify(
          orderByDistance(
            {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            },
            [
              { latitude: 13.756331, longitude: 100.501762 },
              { latitude: 13.361143, longitude: 100.984673 },
              { latitude: 13.70038, longitude: 100.72752 },
            ]
          )
        )}
      </Text>
    </>
  );
};

export default MapViewComponent;

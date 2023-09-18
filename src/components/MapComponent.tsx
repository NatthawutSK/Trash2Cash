import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { getDistance, convertDistance, orderByDistance } from "geolib";
import { useLocation } from "@/provider/LocationProvider";
type Props = {};

const MapViewComponent = (props: Props) => {
  const { location } = useLocation();
  return (
    <>
      <MapView
        style={{
          width: "85%",
          height: "85%",
          alignItems: "center",
          borderRadius: 20,
        }}
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
      </MapView>
      <Text>
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
      </Text>
    </>
  );
};

export default MapViewComponent;

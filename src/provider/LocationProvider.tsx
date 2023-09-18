import * as Location from "expo-location";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type typeContext = {
  location: Location.LocationObject;
  errorMsg: string | null;
};

export const LocationContext = createContext<Partial<typeContext>>({});

export function useLocation() {
  return useContext(LocationContext);
}

export const LocationProvider = ({ children }: PropsWithChildren) => {
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

  const value = {
    location,
    errorMsg,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { Suspense, useEffect } from "react";
import { useColorScheme } from "react-native";
import { TamaguiProvider, Text, Theme } from "tamagui";
import config from "../../tamagui.config";
import { MySafeAreaView } from "../components/MySafeAreaView";
// import { LocationProvider } from "@/provider/LocationProvider";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          {/* <LocationProvider> */}
          {/* <MySafeAreaView> */}
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/* <Stack.Screen name="(admin)" options={{ headerShown: false }} /> */}
            {/* <Stack.Screen
                  name="(thirds)"
                  options={{ headerShown: false }}
                /> */}
            {/* <Stack.Screen
                name="(thirds)/adminApprove"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="(thirds)/history"
                options={{ headerShown: false }}
              /> */}

            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
            <Stack.Screen
              name="(auth)/login"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(auth)/signup"
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="(map)/fullMap"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(map)/nearbyRanking"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="formStore" options={{ headerShown: false }} />
            <Stack.Screen name="formSeller" options={{ headerShown: false }} />
            <Stack.Screen name="chooseRole" options={{ headerShown: false }} />
            <Stack.Screen
              name="detailStore/[id]"
              options={{ title: "Detail Store" }}
            />
            <Stack.Screen
              name="detailTrash/[id]"
              options={{ title: "Detail Trash" }}
            />
            <Stack.Screen
              name="(profile)/editProfile"
              options={{ title: "Edit Profile" }}
            />
            <Stack.Screen
              name="(profile)/changePassword"
              options={{ title: "Change Password" }}
            />
            <Stack.Screen
              name="(profile)/history"
              options={{ title: "History" }}
            />
            <Stack.Screen
              name="profileRanking/[id]"
              options={{ title: "User Stat" }}
            />
          </Stack>
          {/* </MySafeAreaView> */}
          {/* </LocationProvider> */}
        </ThemeProvider>
      </Theme>
    </TamaguiProvider>
  );
}

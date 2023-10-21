import client from "@/apollo/Client";
import AuthScreen from "@/components/auth/AuthScreen";
import { ApolloProvider } from "@apollo/client";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";

import { SplashScreen, Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { ActivityIndicator, useColorScheme } from "react-native";
import { TamaguiProvider, Theme } from "tamagui";

// import { Link, SplashScreen, Stack } from "expo-router";
// import React, { Suspense, useEffect } from "react";
import { Pressable } from "react-native";
// import {
//   Input,
//   TamaguiProvider,
//   Text,
//   Theme,
//   Stack as TamaStack,
// } from "tamagui";

import config from "../../tamagui.config";
import UserContextProvider, { useUserContext } from "@/provider/UserContext";
import ChooseRole from "@/components/auth/ChooseRole";
import Spinner from "react-native-loading-spinner-overlay";
import MaterialContextProvider from "@/provider/MaterialContext";
// import { LocationProvider } from "@/provider/LocationProvider";
const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
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

  return <RootLayoutNavWithProviders />;
}

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

function RootLayoutNavWithProviders() {
  const colorScheme = useColorScheme();

  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <ApolloProvider client={client}>
        <UserContextProvider>
          {/* <MaterialContextProvider> */}
          <TamaguiProvider config={config}>
            <Theme name={colorScheme}>
              <ThemeProvider
                value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
              >
                <RootLayoutNav />
              </ThemeProvider>
            </Theme>
          </TamaguiProvider>
          {/* </MaterialContextProvider> */}
        </UserContextProvider>
      </ApolloProvider>
    </ClerkProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { authUser, dbUser, loading }: any = useUserContext();
  console.log(authUser?.id);
  // console.log(dbUser);

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

  return (
    <>
      <SignedIn>
        {!dbUser ? (
          <ChooseRole />
        ) : (
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
            <Stack.Screen
              name="(map)/fullMap"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(map)/nearbyRanking"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="search"
              options={{ title: "ค้นหา", headerShown: false }}
            />

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
            <Stack.Screen
              name="qrCodeBuyer"
              options={{ title: "แสกน QR Code คนขาย" }}
            ></Stack.Screen>
            <Stack.Screen
              name="ApproveDetail"
              options={{ title: "XD" }}
            ></Stack.Screen>
            <Stack.Screen
              name="(store)/editImageStore"
              options={{ title: "แก้ไขรูปร้านค้า" }}
            />
            <Stack.Screen
              name="(store)/editMaterialStore/[id]"
              options={{ title: "แก้ไขวัสดุที่รับ" }}
            />
          </Stack>
        )}
      </SignedIn>
      <SignedOut>
        <AuthScreen />
      </SignedOut>
    </>
  );
}

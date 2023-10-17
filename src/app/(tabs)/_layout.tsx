import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View, useColorScheme } from "react-native";

import Colors, { colors } from "@/constants/Colors";
import { Input, Stack, Text } from "tamagui";
import {
  MaterialIcons,
  SimpleLineIcons,
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";
import { useUserContext } from "@/provider/UserContext";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { dbUser }: any = useUserContext();
  //   console.log(dbUser.roles);

  //   let role = "seller";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.green2,
        tabBarInactiveTintColor: "white",
        tabBarLabelStyle: { fontSize: 12, top: -5 },
        // tabBarBadgeStyle: { backgroundColor: colors.green1 },
        tabBarStyle: { backgroundColor: colors.green3, height: 60 },
        headerTransparent: true,
        headerRight: () => (
          <Stack f={1} flexDirection="row" ai={"center"} space={"$3"}>
            <Link href="/search" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Input
                    placeholder="หาวิธีจัดการขยะ"
                    editable={false}
                    width={"$20"}
                  />
                )}
              </Pressable>
            </Link>
            <Link href="/(map)/fullMap" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="map-marker"
                    size={28}
                    // color="green"
                    style={{
                      marginRight: 20,
                      opacity: pressed ? 0.5 : 1,
                      color: colors.green4,
                    }}
                  />
                )}
              </Pressable>
            </Link>
          </Stack>
        ),
        headerTitle(props) {
          return (
            <Link href="/" asChild>
              <FontAwesome
                name="recycle"
                size={20}
                style={{
                  marginRight: 20,
                  color: colors.green4,
                }}
              />
            </Link>
          );
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Fontisto name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="scoreRanking"
        options={{
          // tabBarLabelStyle: { right: 6 },
          title: "Rank",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="medal" size={24} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="qrCode"
        options={{
          title: "qrCode",
          tabBarButton: () => (
            <Link href="/qrCode" asChild>
              <Pressable
                className="-mt-6 rounded-full w-16 h-16 items-center justify-center"
                style={{ backgroundColor: colors.green2 }}
              >
                <MaterialIcons name="qr-code-scanner" size={35} color="white" />
              </Pressable>
            </Link>
          ),
        }}
      /> */}
      <Tabs.Screen
        name="qrCodeSeller"
        options={{
          title: "qrCode",
          tabBarButton: () => (
            <Link
              href={dbUser.roles === "store" ? "/qrCodeBuyer" : "/qrCodeSeller"}
              asChild
            >
              <Pressable
                className="-mt-6 rounded-full w-16 h-16 items-center justify-center"
                style={{ backgroundColor: colors.green2 }}
              >
                <MaterialIcons name="qr-code-scanner" size={35} color="white" />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="pie-chart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="storeProfile"
        options={{
          href: dbUser.roles === "Buyer" ? "/(tabs)/storeProfile" : null,

          title: "Store",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="store" size={35} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          href: dbUser.roles === "Buyer" ? null : "/(tabs)/profile",

          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}

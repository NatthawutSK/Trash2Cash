import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "@/constants/Colors";
import { Input, Stack, Text } from "tamagui";

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

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
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
              <Link href="/(map)/nearbyRanking" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="map-marker"
                      size={28}
                      color="gray"
                      style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            </Stack>
          ),
          headerTitle(props) {
            return (
              <FontAwesome
                name="leaf"
                size={20}
                color="gray"
                style={{ marginRight: 20 }}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="scoreRanking"
        options={{
          title: "Ranking",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}

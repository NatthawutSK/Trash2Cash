// import React from "react";
// import { Button, Input, Paragraph, Stack, Text, View } from "tamagui";
// import { Link } from "expo-router";
// import { Animated, TextInput, TouchableOpacity } from "react-native";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import { useRouter } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";

type Props = {
  toggle: () => void;
};

const LoginScreen = ({ toggle }: Props) => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      console.log(err);
    }
  };
  // const router = useRouter();
  return (
    <View className="bg-white h-full w-full">
      {/* <StatusBar style="light" /> */}
      <Image
        className="h-full w-full absolute"
        source={require("../../../assets/images/background.png")}
      />

      {/* lights */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={require("../../../assets/images/light.png")}
          className="h-[225] w-[90]"
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          source={require("../../../assets/images/light.png")}
          className="h-[160] w-[65] opacity-75"
        />
      </View>

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-4xl"
          >
            เข้าสู่ระบบ
          </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-5 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput
              placeholder="อีเมลล์"
              placeholderTextColor={"gray"}
              onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
              keyboardType="email-address"
              autoCapitalize="none"
              value={emailAddress}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full mb-3"
          >
            <TextInput
              placeholder="รหัสผ่าน"
              placeholderTextColor={"gray"}
              value={password}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </Animated.View>

          <Animated.View
            className="w-full"
            entering={FadeInDown.delay(400).duration(1000).springify()}
          >
            <TouchableOpacity
              onPress={() => onSignInPress()}
              className="w-full bg-sky-400 p-3 rounded-2xl mb-3"
            >
              <Text className="text-xl font-bold text-white text-center">
                เข้าสู่ระบบ
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center"
          >
            <Text>ไม่มีบัญชีใช่ไหม? </Text>
            <TouchableOpacity onPress={() => toggle()}>
              <Text className="text-sky-600 underline">สมัครบัญชี</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

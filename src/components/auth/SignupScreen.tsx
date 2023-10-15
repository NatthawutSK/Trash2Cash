// import React from "react";
import { Link, useRouter } from "expo-router";
// import { Button, Input, Paragraph, Stack, Text } from "tamagui";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import { useSignUp } from "@clerk/clerk-expo";

type Props = {
  toggle: () => void;
};

const SignupScreen = ({ toggle }: Props) => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");
  // const router = useRouter();

  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
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
      <View className="h-full w-full flex justify-around pt-48">
        {/* title */}

        {/* form */}
        {!pendingVerification ? (
          <>
            <View className="flex items-center">
              <Animated.Text
                entering={FadeInUp.duration(1000).springify()}
                className="text-white font-bold tracking-wider text-4xl"
              >
                สมัครบัญชี
              </Animated.Text>
            </View>

            <View className="flex items-center mx-5 space-y-4">
              <Animated.View
                entering={FadeInDown.delay(200).duration(1000).springify()}
                className="bg-black/5 p-5 rounded-2xl w-full"
              >
                <TextInput
                  autoCapitalize="none"
                  value={emailAddress}
                  placeholder="อีเมลล์"
                  placeholderTextColor={"gray"}
                  onChangeText={(email) => setEmailAddress(email)}
                  keyboardType="email-address"
                />
              </Animated.View>
              <Animated.View
                entering={FadeInDown.delay(400).duration(1000).springify()}
                className="bg-black/5 p-5 rounded-2xl w-full mb-3"
              >
                <TextInput
                  value={password}
                  placeholder="รหัสผ่าน"
                  placeholderTextColor={"gray"}
                  secureTextEntry={true}
                  onChangeText={(password) => setPassword(password)}
                />
              </Animated.View>

              <Animated.View
                className="w-full"
                entering={FadeInDown.delay(600).duration(1000).springify()}
              >
                <TouchableOpacity
                  className="w-full bg-sky-400 p-3 rounded-2xl mb-3"
                  onPress={() => onSignUpPress()}
                >
                  <Text className="text-xl font-bold text-white text-center">
                    สมัครบัญชี
                  </Text>
                </TouchableOpacity>
              </Animated.View>

              <Animated.View
                entering={FadeInDown.delay(800).duration(1000).springify()}
                className="flex-row justify-center"
              >
                <Text>มีบัญชีอยู่แล้วใช่ไหม? </Text>
                <TouchableOpacity onPress={() => toggle()}>
                  <Text className="text-sky-600 underline">เข้าสู่ระบบ</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </>
        ) : (
          <>
            <View className="flex items-center ">
              <Animated.Text
                entering={FadeInUp.duration(1000).springify()}
                className="text-white font-bold tracking-wider text-4xl"
              >
                ยืนยันตัวตน
              </Animated.Text>
            </View>

            <View className="flex items-center mx-5 space-y-4 pb-36">
              <Animated.View
                entering={FadeInDown.delay(400).duration(1000).springify()}
                className="bg-black/5 p-5 rounded-2xl w-full mb-3"
              >
                <TextInput
                  value={code}
                  placeholder="Code..."
                  placeholderTextColor={"gray"}
                  // secureTextEntry={true}
                  onChangeText={(code) => setCode(code)}
                />
              </Animated.View>

              <Animated.View
                className="w-full"
                entering={FadeInDown.delay(600).duration(1000).springify()}
              >
                <TouchableOpacity
                  className="w-full bg-sky-400 p-3 rounded-2xl mb-3"
                  onPress={() => onPressVerify()}
                >
                  <Text className="text-xl font-bold text-white text-center">
                    ยืนยัน
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default SignupScreen;

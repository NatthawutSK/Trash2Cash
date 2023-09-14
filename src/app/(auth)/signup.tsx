import React from "react";
import { Link } from "expo-router";
import { Button, Input, Paragraph, Stack, Text } from "tamagui";

type Props = {};

const signup = (props: Props) => {
  return (
    <Stack jc={"center"} f={1} pt={"$15"}>
      <Stack ai={"center"} px={"$5"} space={"$2"}>
        <Input w={"100%"} placeholder="อีเมลล์" />
        <Input w={"100%"} placeholder="รหัสผ่าน" secureTextEntry={true} />
        <Button
          mt={"$5"}
          alignSelf="center"
          w={"100%"}
          h={"$5"}
          br={"$10"}
          bg={"$blue10Dark"}
          color={"$red1Light"}
        >
          สมัครบัญชี
        </Button>

        <Paragraph color={"$gray10Light"} mt={"$1"}>
          มีบัญชีอยู่แล้วใช่ไหม ?{" "}
          <Link href={"/(auth)/login"}>
            <Text textDecorationLine="underline">เข้าสู่ระบบ</Text>
          </Link>
        </Paragraph>
      </Stack>
    </Stack>
  );
};

export default signup;

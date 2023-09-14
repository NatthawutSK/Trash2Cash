import React from "react";
import { Button, Input, Paragraph, Stack, Text } from "tamagui";
import { Link } from "expo-router";

type Props = {};

const login = (props: Props) => {
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
          เข้าสู่ระบบ
        </Button>
        <Paragraph color={"$gray10Light"} mt={"$1"}>
          ไม่มีบัญชีใช่ไหม ?{" "}
          <Link href={"/(auth)/signup"}>
            <Text textDecorationLine="underline">สมัครบัญชี</Text>
          </Link>
        </Paragraph>
      </Stack>
    </Stack>
  );
};

export default login;

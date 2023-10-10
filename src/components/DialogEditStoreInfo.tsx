import React from "react";
import { colors } from "@/constants/Colors";
import { X } from "@tamagui/lucide-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Dialog,
  Adapt,
  Sheet,
  Separator,
  Fieldset,
  Label,
  Input,
  TextArea,
  YStack,
  Unspaced,
  Button,
  Text,
  Stack,
} from "tamagui";
import { KeyboardAvoidingView } from "react-native";
import { TypeStore } from "@/MockData/types";

type Props = {
  info: TypeStore;
};

const DialogEditStoreInfo = ({ info }: Props) => {
  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <Button
          alignSelf="center"
          w={"90%"}
          style={{ backgroundColor: colors.green4 }}
        >
          <Text fos={"$5"} className="font-bold" color={"$green1Light"}>
            แก้ไขข้อมูลร้านค้า
          </Text>
        </Button>
      </Dialog.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" space>
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          o={0.5}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          space
        >
          <KeyboardAwareScrollView>
            <Dialog.Title fos={"$7"} className="font-bold" alignSelf="center">
              แก้ไขข้อมูลร้านค้า
            </Dialog.Title>
            <Separator
              borderColor={colors.green4}
              w={"100%"}
              marginVertical={"$4"}
            />

            <Stack flexDirection="column" gap={"$3"}>
              <Fieldset>
                <Label htmlFor="name">ชื่อร้าน</Label>
                <Input id="name" defaultValue={info.name} />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="phone">เบอร์โทร</Label>
                <Input id="phone" defaultValue={info.phone} />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="line">ไลน์ไอดี</Label>
                <Input id="line" defaultValue={info.line} />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="address">เบอร์โทร</Label>
                <TextArea id="address" defaultValue={info.address} />
              </Fieldset>
            </Stack>

            <YStack alignItems="flex-end" marginTop="$2">
              <Dialog.Close displayWhenAdapted asChild>
                <Button
                  onPress={() => console.log("save")}
                  mt={"$4"}
                  aria-label="Close"
                  alignSelf="center"
                  w={"100%"}
                  style={{ backgroundColor: colors.green4 }}
                >
                  <Text fos={"$5"} className="font-bold" color={"$green1Light"}>
                    ยืนยันการแก้ไข
                  </Text>
                </Button>
              </Dialog.Close>
            </YStack>

            <Unspaced>
              <Dialog.Close displayWhenAdapted asChild>
                <Button
                  pos="absolute"
                  top="$1"
                  right="$1"
                  size="$3"
                  circular
                  icon={X}
                  color="white"
                  bg={colors.green3}
                />
              </Dialog.Close>
            </Unspaced>
          </KeyboardAwareScrollView>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};

export default DialogEditStoreInfo;

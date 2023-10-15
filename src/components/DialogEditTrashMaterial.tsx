import { colors } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { X } from "@tamagui/lucide-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Separator,
  Sheet,
  Stack,
  Text,
  Unspaced,
  YStack,
} from "tamagui";
import SelectReceiveTrash from "./SelectReceiveTrash";
import SelectTrashMaterial from "./SelectTrashMaterial";
import { TypeTrashMaterial } from "@/MockData/types";

type Props = {
  item: TypeTrashMaterial;
};

const DialogEditTrashMaterial = ({ item }: Props) => {
  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <Button
          color={"white"}
          bg={"$blue9Light"}
          style={{
            width: 80,
            height: 40,
          }}
        >
          แก้ไข
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
              แก้ไขข้อมูลวัสดุที่รับ
            </Dialog.Title>
            <Separator
              borderColor={colors.green4}
              w={"100%"}
              marginVertical={"$4"}
            />

            <Stack flexDirection="column" gap={"$3"}>
              <Fieldset>
                <Label htmlFor="name">ชื่อวัสดุ</Label>
                <Input
                  id="name"
                  defaultValue={item.name}
                  editable={false}
                  bg={"$gray5Light"}
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="price">ราคาที่รับ</Label>
                <Input id="price" defaultValue={item.price.toString()} />
              </Fieldset>
              <SelectReceiveTrash amount={item.recieveAmount} />
            </Stack>

            <YStack alignItems="flex-end" marginTop="$2">
              <Dialog.Close displayWhenAdapted asChild>
                <Button
                  onPress={() => console.log("save edit")}
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

export default DialogEditTrashMaterial;

import { colors } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { Check, ChevronDown, ChevronUp, X } from "@tamagui/lucide-icons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Select,
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
import { gql, useMutation } from "@apollo/client";
import { LinearGradient } from "tamagui/linear-gradient";
import { recieveAmount } from "@/MockData/data";
import { useUserContext } from "@/provider/UserContext";

type Props = {
  item: TypeTrashMaterial;
  materialData: TypeTrashMaterial[];
  setMaterialData: (materialData: TypeTrashMaterial[]) => void;
};

const updateDetailStore = gql`
  mutation MyMutation(
    $auth_id: String
    $store_detail: String
    $store_user_id: ID!
  ) {
    updateStore(
      auth_id: $auth_id
      store_detail: $store_detail
      store_user_id: $store_user_id
    ) {
      auth_id
    }
  }
`;

const DialogEditTrashMaterial = ({
  item,
  materialData,
  setMaterialData,
}: Props) => {
  const [handleMutation, { loading }] = useMutation(updateDetailStore);
  const { authUser, reloadDbUser, dbUser }: any = useUserContext();

  const [materialName, setMaterialName] = useState(item.materialName);
  const [price, setPrice] = useState(item.price);
  const [receive, setReceive] = useState(item.receive);
  const onSubmit = async () => {
    try {
      // console.log("data edit", );
      const editData: TypeTrashMaterial[] = materialData.map((data) => {
        if (data.materialName === materialName) {
          return {
            ...data,
            materialName: materialName,
            price: price,
            receive: receive as TypeTrashMaterial["receive"],
          };
        }
        return data;
      });
      setMaterialData(editData);
      // console.log("XD", dbUser.store[0].store_user_id);

      // console.log("editData", editData);
      // console.log("materialData", materialData);

      // const newData = [...materialData, data];
      // setMaterialData(newData);
      await handleMutation({
        variables: {
          auth_id: authUser?.id,
          store_user_id: dbUser.store[0].store_user_id,
          store_detail: JSON.stringify(editData),
        },
      });
      reloadDbUser();
      // console.log("data", JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };

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
                <Label>ชื่อวัสดุ</Label>
                <Input
                  id="name"
                  value={materialName}
                  editable={false}
                  bg={"$gray5Light"}
                />
              </Fieldset>
              <Fieldset>
                <Label>ราคาที่รับ</Label>
                <Input
                  id="price"
                  value={price.toString()}
                  onChangeText={(text) => {
                    const parsedPrice = parseInt(text);
                    if (!isNaN(parsedPrice)) {
                      setPrice(parsedPrice);
                    } else {
                      // Handle the case where the input is not a valid integer, e.g., set to a default value or an empty string.
                      setPrice(0); // or setPrice(0) or any other default value you prefer
                    }
                  }}
                />
              </Fieldset>
              <Fieldset>
                <Label>จำนวนที่รับ</Label>
                <Select
                  id="amount"
                  value={receive}
                  onValueChange={(
                    value:
                      | "น้อยกว่า 10 กก."
                      | "10 - 20 กก."
                      | "20 - 30 กก."
                      | "30 - 40 กก."
                      | "40 - 50 กก."
                      | "50 - 60 กก."
                      | "60 - 70 กก."
                      | "70 - 80 กก."
                      | "80 - 90 กก."
                      | "90 - 100 กก."
                      | "ไม่จำกัด"
                  ) => setReceive(value)}
                >
                  <Select.Trigger id="amount" iconAfter={ChevronDown}>
                    <Select.Value placeholder="Something" />
                  </Select.Trigger>

                  <Adapt when="sm" platform="touch">
                    <Sheet modal dismissOnSnapToBottom>
                      <Sheet.Frame>
                        <Sheet.ScrollView>
                          <Adapt.Contents />
                        </Sheet.ScrollView>
                      </Sheet.Frame>
                      <Sheet.Overlay />
                    </Sheet>
                  </Adapt>

                  <Select.Content zIndex={200000}>
                    <Select.ScrollUpButton
                      ai="center"
                      jc="center"
                      pos="relative"
                      w="100%"
                      h="$3"
                    >
                      <YStack zi={10}>
                        <ChevronUp size={20} />
                      </YStack>
                      <LinearGradient
                        start={[0, 0]}
                        end={[0, 1]}
                        fullscreen
                        colors={["$background", "$backgroundTransparent"]}
                        br="$4"
                      />
                    </Select.ScrollUpButton>

                    <Select.Viewport minWidth={200}>
                      <Select.Group>
                        <Select.Label>จำนวนที่รับ</Select.Label>
                        {recieveAmount.map((item, i) => {
                          return (
                            <Select.Item index={i} key={item} value={item}>
                              <Select.ItemText color="$color">
                                {item}
                              </Select.ItemText>
                              <Select.ItemIndicator ml="auto">
                                <Check size={16} />
                              </Select.ItemIndicator>
                            </Select.Item>
                          );
                        })}
                      </Select.Group>
                    </Select.Viewport>

                    <Select.ScrollDownButton
                      ai="center"
                      jc="center"
                      pos="relative"
                      w="100%"
                      h="$3"
                    >
                      <YStack zi={10}>
                        <ChevronDown size={20} />
                      </YStack>
                      <LinearGradient
                        start={[0, 0]}
                        end={[0, 1]}
                        fullscreen
                        colors={["$backgroundTransparent", "$background"]}
                        br="$4"
                      />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select>
              </Fieldset>
            </Stack>

            <YStack alignItems="flex-end" marginTop="$2">
              <Dialog.Close displayWhenAdapted asChild>
                <Button
                  onPress={() => onSubmit()}
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

import { colors } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { Check, ChevronDown, ChevronUp, X } from "@tamagui/lucide-icons";
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
import { gql, useMutation } from "@apollo/client";
import { useUserContext } from "@/provider/UserContext";
import { Controller, useForm } from "react-hook-form";
import { TrashMaterial, recieveAmount } from "@/MockData/data";
import { LinearGradient } from "tamagui/linear-gradient";

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

type FormValues = {
  materialName: string;
  price: string;
  receive: string;
};

type Props = {
  storeId: string;
  setMaterialData: (data: any) => void;
  materialData: any;
};
const DialogAddTrashMaterial = ({
  storeId,
  setMaterialData,
  materialData,
}: Props) => {
  const [handleMutation, { loading }] = useMutation(updateDetailStore);
  const { authUser, reloadDbUser }: any = useUserContext();

  const {
    getValues,
    control,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      materialName: "",
      price: "",
      receive: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      console.log("data form", data);
      const newData = [...materialData, data];
      setMaterialData(newData);

      await handleMutation({
        variables: {
          auth_id: authUser?.id,
          store_user_id: storeId,
          store_detail: JSON.stringify(newData),
        },
      });
      reloadDbUser();
      // console.log("data", JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };

  function getUniqueValues(arr1: any, arr2: any, property: any) {
    const uniqueValues: any = [];

    arr1.forEach((item1: any) => {
      const valueToCheck = item1[property];
      if (!arr2.some((item2: any) => item2[property] === valueToCheck)) {
        uniqueValues.push(valueToCheck);
      }
    });

    return uniqueValues;
  }

  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <TouchableOpacity
          // onPress={() => console.log("press")}
          style={{
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            width: 65,
            position: "absolute",
            alignSelf: "flex-end",
            bottom: 30,
            right: 30,
            height: 65,
            backgroundColor: colors.green4,
            borderRadius: 100,
          }}
        >
          <Entypo name="plus" size={30} color="white" />
        </TouchableOpacity>
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
              เพิ่มวัสดุที่รับ {storeId}
            </Dialog.Title>
            <Separator
              borderColor={colors.green4}
              w={"100%"}
              marginVertical={"$4"}
            />

            <Stack flexDirection="column" gap={"$3"}>
              <Stack>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Label>เลือกวัสดุ</Label>
                      <Select id="trash" value={value} onValueChange={onChange}>
                        <Select.Trigger id="trash" iconAfter={ChevronDown}>
                          <Select.Value placeholder="เลือกวัสดุที่รับ" />
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
                              <Select.Label>วัสดุ</Select.Label>
                              {getUniqueValues(
                                TrashMaterial,
                                materialData,
                                "materialName"
                              ).map((item: any, i: any) => {
                                return (
                                  <Select.Item
                                    index={i}
                                    key={item}
                                    value={item}
                                  >
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
                    </>
                  )}
                  name="materialName"
                />
                {errors.materialName && (
                  <Text className="text-red-600">This is required.</Text>
                )}
              </Stack>
              {/* --------------------------- */}
              <Stack>
                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Price is required",
                    },
                    pattern: {
                      value: /^[0-9]*[1-9][0-9]*$/,
                      message: "Input must be a number greater than 0.",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Label width={100}>ราคาที่รับ</Label>
                      <Input
                        placeholder="price"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value.toString()}
                      />
                    </>
                  )}
                  name="price"
                />
                {errors.price && (
                  <Text className="text-red-600">{errors.price.message}</Text>
                )}
              </Stack>
              {/* ----------------------------- */}
              <Stack>
                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Receive is required",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Label>จำนวนที่รับ</Label>
                      <Select
                        id="amount"
                        value={value}
                        onValueChange={onChange}
                      >
                        <Select.Trigger id="amount" iconAfter={ChevronDown}>
                          <Select.Value placeholder="จำนวนที่รับ" />
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
                                  <Select.Item
                                    index={i}
                                    key={item}
                                    value={item}
                                  >
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
                    </>
                  )}
                  name="receive"
                />
                {errors.receive && (
                  <Text className="text-red-600">{errors.receive.message}</Text>
                )}
              </Stack>

              {/* --------------------------------- */}
            </Stack>

            <YStack alignItems="flex-end" marginTop="$2">
              {!isValid ? (
                <Button
                  onPress={handleSubmit(onSubmit)}
                  mt={"$4"}
                  aria-label="Close"
                  alignSelf="center"
                  w={"100%"}
                  style={{ backgroundColor: colors.green4 }}
                >
                  <Text fos={"$5"} className="font-bold" color={"$green1Light"}>
                    เพิ่มวัสดุที่รับ
                  </Text>
                </Button>
              ) : (
                <Dialog.Close displayWhenAdapted asChild>
                  <Button
                    onPress={handleSubmit(onSubmit)}
                    mt={"$4"}
                    aria-label="Close"
                    alignSelf="center"
                    w={"100%"}
                    style={{ backgroundColor: colors.green4 }}
                  >
                    <Text
                      fos={"$5"}
                      className="font-bold"
                      color={"$green1Light"}
                    >
                      เพิ่มวัสดุที่รับ
                    </Text>
                  </Button>
                </Dialog.Close>
              )}
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

export default DialogAddTrashMaterial;

import React, { useState } from "react";
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
  Spinner,
} from "tamagui";
import { KeyboardAvoidingView } from "react-native";
import { TypeStore } from "@/MockData/types";
import { gql, useMutation } from "@apollo/client";
import { useUserContext } from "@/provider/UserContext";
import { useForm, Controller } from "react-hook-form";

const EditStoreMutation = gql`
  mutation UpdateUserMutation(
    $auth_id: String!
    $line_id: String
    $address: String
    $phone_number: String
    $user_name: String
  ) {
    updateUsers(
      auth_id: $auth_id
      line_id: $line_id
      phone_number: $phone_number
      user_name: $user_name
      address: $address
    ) {
      auth_id
    }
  }
`;

type Props = {
  info: TypeStore;
};

type FormValues = {
  name: string;
  phone: string;
  line: string;
  address: string;
};

const DialogEditStoreInfo = ({ info }: Props) => {
  const [handleMutation] = useMutation(EditStoreMutation);
  const { authUser, reloadDbUser, loading }: any = useUserContext();

  const onSubmit = async (data: FormValues) => {
    console.log(data);

    try {
      await handleMutation({
        variables: {
          auth_id: authUser?.id,
          line_id: data.line,
          phone_number: data.phone,
          user_name: data.name,
          address: data.address,
        },
      });
      reloadDbUser();
      // console.log("data", JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };

  const {
    getValues,
    control,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      name: info.user_name,
      phone: info.phone_number,
      line: info.line_id,
      address: info.address,
    },
  });

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
              แก้ไขข้อมูลร้านค้า{JSON.stringify(loading)}
            </Dialog.Title>
            <Separator
              borderColor={colors.green4}
              w={"100%"}
              marginVertical={"$4"}
            />

            <Stack flexDirection="column" gap={"$3"}>
              <Fieldset>
                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Label width={100} htmlFor="name">
                        ชื่อร้าน
                      </Label>
                      <Input
                        placeholder="ชื่อร้านค้า"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="name"
                />
                {errors.name && (
                  <Text className="text-red-600">{errors.name.message}</Text>
                )}
              </Fieldset>
              <Fieldset>
                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Phone number is required",
                    },
                    pattern: {
                      value: /^[0-9]{10}$/, // Adjust the regex pattern for your specific phone number format
                      message: "Invalid phone number",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Label width={100} htmlFor="phone">
                        เบอร์โทรศัพท์
                      </Label>
                      <Input
                        placeholder="เบอร์โทรศัพท์"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="phone"
                />
                {errors.phone && (
                  <Text className="text-red-600">{errors.phone.message}</Text>
                )}
              </Fieldset>
              <Fieldset>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Label width={100} htmlFor="line">
                        ไลน์ไอดี
                      </Label>
                      <Input
                        placeholder="ไลน์ไอดี"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="line"
                />
                {errors.line && (
                  <Text className="text-red-600">This is required.</Text>
                )}
              </Fieldset>
              <Fieldset>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Label width={100} htmlFor="address">
                        ที่อยู่ร้านค้า
                      </Label>
                      <TextArea
                        placeholder="ที่อยู่ร้านค้า"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="address"
                />
                {errors.address && (
                  <Text className="text-red-600">This is required.</Text>
                )}
              </Fieldset>
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
                    ยืนยันการแก้ไข
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
                      ยืนยันการแก้ไข
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

export default DialogEditStoreInfo;

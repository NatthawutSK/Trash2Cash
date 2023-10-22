import { TrashMaterial, recieveAmount } from "@/MockData/data";
import { MySafeAreaView } from "@/components/MySafeAreaView";
import { MyStack } from "@/components/MyStack";
import { ChevronDown, ChevronUp, Check } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Adapt,
  Button,
  Checkbox,
  Fieldset,
  H4,
  Input,
  Label,
  Select,
  Sheet,
  Stack,
  Text,
  TextArea,
  XStack,
  YStack,
} from "tamagui";
import SelectTrashMaterial from "../SelectTrashMaterial";
import SelectReceiveTrash from "../SelectReceiveTrash";
import { LinearGradient } from "tamagui/linear-gradient";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { gql, useMutation } from "@apollo/client";
import { useUserContext } from "@/provider/UserContext";
import MapPickLocation from "../MapPickLocation";

type Props = {};

type TrashMaterial = {
  materialName: string;
  price: string;
  receive: string;
};

type FormValues = {
  name: string;
  phone: string;
  line: string;
  address: string;
  material: string;
  price: string;
  receive: string;
};

const createBuyerMutation = gql`
  mutation CreateBuyer(
    $auth_id: String!
    $line_id: String!
    $user_name: String!
    $address: String!
    $phone_number: String!
    $store_detail: String!
    $roles: String!
    $latitude: String!
    $longtitude: String!
  ) {
    insertUsers(
      auth_id: $auth_id
      line_id: $line_id
      phone_number: $phone_number
      roles: $roles
      user_name: $user_name
      address: $address
    ) {
      auth_id
      user_name
    }
    insertStore(auth_id: $auth_id, store_detail: $store_detail) {
      auth_id
    }
    insertLocation_store(
      auth_id: $auth_id
      latitude: $latitude
      longtitude: $longtitude
    ) {
      auth_id
    }
  }
`;

type Location = {
  latitude: number;
  longitude: number;
};

const FormStore = (props: Props) => {
  // const [trash, setTrash] = useState("");
  const router = useRouter();
  const [next, setNext] = useState(false);
  const [allMaterial, setAllMaterial] = useState<TrashMaterial[]>([]);
  const [showMap, setShowMap] = useState(false);
  const [location, setLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });
  const [handleMutation, { loading }] = useMutation(createBuyerMutation);
  const { authUser, reloadDbUser }: any = useUserContext();

  const {
    getValues,
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      line: "",
      address: "",
      material: "",
      price: "",
      receive: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // console.log(data);
    const { name, phone, line, address } = data;
    console.log("data", name, phone, line, address);
    console.log("auth_id", authUser?.id);
    console.log("allMterail", JSON.stringify(allMaterial));

    // const store = {
    //   material: JSON.stringify(allMaterial),
    // };
    // console.log(store);
    try {
      await handleMutation({
        variables: {
          user_name: name,
          auth_id: authUser?.id,
          roles: "Buyer",
          address: address,
          phone_number: phone,
          line_id: line,
          store_detail: JSON.stringify(allMaterial),
          latitude: location.latitude.toString(),
          longtitude: location.longitude.toString(),
        },
      });
      reloadDbUser();
      // console.log("data", JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };

  const checkForm = async () => {
    // if (await trigger(["name", "phone", "line", "address"])) {
    setNext((prev) => !prev);
    // }
  };

  const AddMaterial = async () => {
    if (await trigger(["price", "material", "receive"])) {
      setAllMaterial((prev) => [
        ...prev,
        {
          materialName: getValues("material"),
          price: getValues("price"),
          receive: getValues("receive"),
        },
      ]);
    }
  };

  const addLocation = (location: Location) => {
    setLocation(location);
    setShowMap(false);
  };

  return (
    <MySafeAreaView>
      {showMap ? (
        <MapPickLocation addLocation={addLocation} />
      ) : (
        <KeyboardAwareScrollView>
          {!next ? (
            <Stack paddingHorizontal={"$5"} space={"$4"} jc={"center"} f={1}>
              <H4 ta={"center"}>เพิ่มร้านค้า</H4>
              <Stack>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Label width={100}>ชื่อร้านค้า</Label>
                      <Input
                        placeholder="name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="name"
                />
                {errors.name && (
                  <Text className="text-red-600">This is required.</Text>
                )}
              </Stack>
              <Stack>
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
                      <Label width={100}>เบอร์โทรศัพท์</Label>
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
              </Stack>
              <Stack>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Label width={100}>ไลน์ไอดี</Label>
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
              </Stack>
              <Stack>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Label width={100}>ที่อยู่ร้านค้า</Label>
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
              </Stack>
              <Button onPress={() => checkForm()}>ถัดไป</Button>
            </Stack>
          ) : (
            <Stack paddingHorizontal={"$5"} space={"$4"} jc={"center"} f={1}>
              <Stack flexDirection="column" gap={"$3"}>
                {/* selct material */}
                <Stack>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <>
                        <Label>เลือกวัสดุ</Label>
                        <Select
                          id="trash"
                          value={value}
                          onValueChange={onChange}
                        >
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
                                colors={[
                                  "$background",
                                  "$backgroundTransparent",
                                ]}
                                br="$4"
                              />
                            </Select.ScrollUpButton>

                            <Select.Viewport minWidth={200}>
                              <Select.Group>
                                <Select.Label>วัสดุ</Select.Label>
                                {TrashMaterial.map((item, i) => {
                                  return (
                                    <Select.Item
                                      index={i}
                                      key={item.materialName}
                                      value={item.materialName}
                                    >
                                      <Select.ItemText color="$color">
                                        {item.materialName}
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
                                colors={[
                                  "$backgroundTransparent",
                                  "$background",
                                ]}
                                br="$4"
                              />
                            </Select.ScrollDownButton>
                          </Select.Content>
                        </Select>
                      </>
                    )}
                    name="material"
                  />
                  {errors.material && (
                    <Text className="text-red-600">This is required.</Text>
                  )}
                </Stack>

                {/* ................... */}

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
                                colors={[
                                  "$background",
                                  "$backgroundTransparent",
                                ]}
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
                                colors={[
                                  "$backgroundTransparent",
                                  "$background",
                                ]}
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
                    <Text className="text-red-600">
                      {errors.receive.message}
                    </Text>
                  )}
                </Stack>
              </Stack>
              <Button onPress={() => AddMaterial()}>เพิ่มวัสดุที่รับ</Button>

              <Stack bg={"$blue10Light"} w={"100%"} h={"$10"}>
                <Text>{JSON.stringify(allMaterial)}</Text>
              </Stack>

              {/* <XStack jc={"space-around"}>
                <Label>latitude</Label>
                <Label>longtitude</Label>
              </XStack> */}

              <XStack jc={"space-around"}>
                <Stack width={"48%"}>
                  <Label>latitude</Label>
                  <Input
                    placeholder="latitude"
                    width={"100%"}
                    editable={false}
                    bg={"$blue1Light"}
                    value={location.latitude.toString()}
                  />
                </Stack>
                <Stack width={"48%"}>
                  <Label>longtitude</Label>
                  <Input
                    placeholder="longtitude"
                    width={"100%"}
                    editable={false}
                    bg={"$blue1Light"}
                    value={location.longitude.toString()}
                  />
                </Stack>
              </XStack>

              <Button onPress={() => setShowMap(true)}>
                เพิ่มตำแหน่งที่ตั้ง {location.latitude.toString()}
              </Button>
              <Button onPress={handleSubmit(onSubmit)}>
                {loading ? "กำลังบันทึก..." : "บันทึก"}
              </Button>
            </Stack>
          )}
        </KeyboardAwareScrollView>
      )}
    </MySafeAreaView>
  );
};

export default FormStore;

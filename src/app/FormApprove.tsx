import React, { useState } from "react";

import {
  Text,
  Stack,
  YStack,
  Input,
  Button,
  Label,
  XStack,
  Select,
  Sheet,
  ScrollView,
  H2,
  Adapt,
  Fieldset,
  Square,
} from "tamagui";

import { styled } from "nativewind";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import PickerImg from "@/components/MyImagePicker";
import { LinearGradient } from "tamagui/linear-gradient";

const StyledY = styled(YStack);
const StyledS = styled(Stack);
const StyledText = styled(Text);
type Props = {};
type Detail = {
  name: string;
  weight: number;
};
const FormApprove = (props: Props) => {
  const [list, setList] = useState<Detail[] | []>([]);
  const [weight, setWeight] = useState("");
  const [select, setSelect] = useState("");
  const category = [
    { name: "ถุง/ฟิล์ม PE" },
    { name: "ขวดแก้วขาว" },
    { name: "กระป๋องเหล็กสังกะสี" },
    { name: "กระป๋องอลูมิเนียม" },
    { name: "กระดาษลัง" },
  ];
  return (
    <ScrollView bc={"$green10Light"}>
      <StyledY flex={1} space={"$7"} pt={30} px={20}>
        <Label ta={"left"} fow={"800"} fos={"$6"} color={"$green5Light"}>
          ไอดีของผู้ขาย
        </Label>
        <Input placeholder={"กรอกไอดีของผู้ขาย"} w={"100%"} />
        <PickerImg />
        <YStack
          flex={1}
          jc={"space-around"}
          ac={"center"}
          ai={"center"}
          w={"100%"}
          space={"$4"}
        >
          {/* From Select Demo lazy send prop pai ma */}
          <Stack als={"center"} jc={"center"} ai={"center"} w={"50%"}>
            <Fieldset als={"center"} ac={"center"} fd={"row"} space={"$8"}>
              <Label als={"center"} fow={"800"} color={"$green5Light"}>
                เลือกหมวดหมู่
              </Label>
              <Select value={select} onValueChange={setSelect}>
                <Select.Trigger iconAfter={ChevronDown}>
                  <Select.Value placeholder={"(เลือกหมวดหมู่)"} />
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
                      <Select.Label>หมวดหมู่</Select.Label>

                      {category.map((item: any, i: number) => {
                        return (
                          <Select.Item
                            index={i}
                            key={item.name}
                            value={item.name.toLowerCase()}
                          >
                            <Select.ItemText color="$color">
                              {item.name}
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
          <XStack ac={"center"} jc={"space-around"} w={"90%"} space={"$2"}>
            <Text als="center" fow={"800"} color={"$green5Light"}>
              น้ำหนัก
            </Text>
            <Input
              keyboardType="numeric"
              als={"center"}
              w={"50%"}
              placeholder={"กรอกน้ำหนัก"}
              value={weight}
              onChangeText={setWeight}
            />
            <Text als={"center"} fow={"800"} color={"$green5Light"}>
              กก.
            </Text>
          </XStack>
        </YStack>
        <Stack marginBottom={"10%"} jc={"center"} ai={"center"}>
          <Button
            bc={"#66b55d"}
            color={"$green5Light"}
            // fow={800}
            w={"50%"}
            onPress={() => {
              setList([...list, { name: select, weight: parseFloat(weight) }]);
              setSelect("");
              setWeight("");
            }}
          >
            เพิ่มรายการ
          </Button>
        </Stack>
        <StyledY
          space={"$3"}
          w={"100%"}
          flex={1}
          jc={"center"}
          ac={"center"}
          ai={"center"}
          className=""
          paddingBottom={20}
        >
          {/* <H2>{JSON.stringify(list)}</H2> */}
          <Stack p={20} px={30} bc={"#66b55d"} br={20}>
            <H2 color={"white"}>Detail</H2>
          </Stack>
          <Stack bc={"$green8Dark"} p={20} px={40} br={20} space>
            {list.length != 0 ? (
              list.map((item: Detail, i: number) => {
                return (
                  <XStack key={i} space={"$2"} jc={"space-between"}>
                    <Text als={"center"} color={"white"}>
                      {item.name}
                    </Text>
                    <Text als={"center"} color={"white"}>
                      {item.weight} กก.
                    </Text>
                    <Button
                      bc={"red"}
                      color={"white"}
                      onPress={() => {
                        setList(
                          list.filter((val, index) => {
                            return index != i;
                          })
                        );
                      }}
                    >
                      Del
                    </Button>
                  </XStack>
                );
              })
            ) : (
              <Text color={"white"} fos={"$4"}>
                ไม่มีข้อมูล
              </Text>
            )}
          </Stack>
        </StyledY>
        <Stack flex={1} w={"50%"} als={"center"} pb={"$4"}>
          <Button size={"$4"}>ส่ง</Button>
        </Stack>
      </StyledY>
    </ScrollView>
  );
};

export default FormApprove;

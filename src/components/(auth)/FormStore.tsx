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
  YStack,
} from "tamagui";

type Props = {};

const trashItem = [
  {
    name: "หมวดกระดาษ",
    sub: ["กระดาษกล่องลัง", "หนังสือพิมพ์", "กระดาษขาวดำ"],
  },
  { name: "หมวดพลาสติก", sub: ["ขวดพลาสติก", "ถุงพลาสติก"] },
  { name: "หมวดโลหะ", sub: ["ขวดโลหะ", "กระป๋อง"] },
  { name: "หมวดแก้ว", sub: ["ขวดแก้ว", "แก้ว"] },
];

type listTrash = {
  trash: string;
  type: string;
};

const FormStore = (props: Props) => {
  const [TypeTrash, setTypeTrash] = useState("");
  const [trash, setTrash] = useState("");
  const [listTrash, setListTrash] = useState<listTrash[]>([]);
  const router = useRouter();

  function addListTrash() {
    setListTrash((listTrash) => [
      ...listTrash,
      { trash: trash, type: TypeTrash },
    ]);
    // listTrash.push({ trash: trash, type: TypeTrash });
    // console.log(listTrash);
  }
  //   const id = `checkbox-${"$3".toString().slice(1)}`;
  return (
    <MySafeAreaView>
      <Stack paddingHorizontal={"$5"} space={"$4"} jc={"center"} f={1}>
        <H4 ta={"center"}>เพิ่มร้านค้า</H4>
        <Stack>
          <Label width={100} htmlFor="name">
            ชื่อร้านค้า
          </Label>

          <Input id="name" placeholder="ชื่อร้านค้า" />
        </Stack>
        <Stack>
          <Label width={100} htmlFor="address">
            ที่อยู่ร้านค้า
          </Label>
          <TextArea id="address" placeholder="ที่อยู่ร้านค้า" />
        </Stack>
        <Fieldset>
          <Label htmlFor="type">เลือกประเภทวัสดุ</Label>
          <Select id="type" value={TypeTrash} onValueChange={setTypeTrash}>
            <Select.Trigger id="type" iconAfter={ChevronDown}>
              <Select.Value placeholder="เลือกหมวดวัสดุที่รับซื้อ" />
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
              </Select.ScrollUpButton>

              <Select.Viewport minWidth={200}>
                <Select.Group>
                  <Select.Label>ว้สดุ</Select.Label>
                  {trashItem.map((item, i) => {
                    return (
                      <Select.Item index={i} key={item.name} value={item.name}>
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
              </Select.ScrollDownButton>
            </Select.Content>
          </Select>
        </Fieldset>

        <Fieldset>
          <Label htmlFor="type">ประเภทวัสดุ</Label>
          <Select id="type" value={trash} onValueChange={setTrash}>
            <Select.Trigger id="type" iconAfter={ChevronDown}>
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
              </Select.ScrollUpButton>

              <Select.Viewport minWidth={200}>
                <Select.Group>
                  <Select.Label>วัสดุ</Select.Label>
                  {TypeTrash &&
                    trashItem
                      .find((item) => item.name === TypeTrash)
                      ?.sub.map((item, i) => (
                        <Select.Item index={i} key={item} value={item}>
                          <Select.ItemText color="$color">
                            {item}
                          </Select.ItemText>
                          <Select.ItemIndicator ml="auto">
                            <Check size={16} />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ))}
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
              </Select.ScrollDownButton>
            </Select.Content>
          </Select>
        </Fieldset>

        <Button onPress={() => addListTrash()}>เพิ่มวัสดุที่รับ</Button>

        {listTrash.length !== 0 &&
          listTrash.map((item, i) => (
            <Text key={i}>
              {item.trash} {item.type}
            </Text>
          ))}

        <Button onPress={() => router.push("/fullMap")}>
          เพิ่มตำแหน่งที่ตั้ง
        </Button>
        <Button onPress={() => router.push("/")}>ยืนยันข้อมูล</Button>
      </Stack>
    </MySafeAreaView>
  );
};

export default FormStore;

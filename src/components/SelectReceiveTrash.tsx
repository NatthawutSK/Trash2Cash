import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Adapt, Fieldset, Label, Select, Sheet, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import { TrashMaterial, recieveAmount } from "@/MockData/data";

export default function SelectReceiveTrash() {
  const [val, setVal] = useState("น้อยกว่า 10 กก.");

  return (
    <Fieldset>
      <Label htmlFor="amount">จำนวนที่รับ</Label>
      <Select id="amount" value={val} onValueChange={setVal}>
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
                    <Select.ItemText color="$color">{item}</Select.ItemText>
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
  );
}

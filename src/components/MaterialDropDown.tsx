import { View, Text, FlatList } from "react-native";
import React from "react";
import { ChevronDown } from "@tamagui/lucide-icons";
import { Accordion, XStack, H4, Square } from "tamagui";

type Props = {};

const MaterialDropDown = ({ data, renderFunc }: any) => {
  return (
    <Accordion overflow="hidden" width="90%" type="multiple">
      <Accordion.Item value="a2">
        <Accordion.Trigger flexDirection="row" justifyContent="space-between">
          {({ open }: any) => (
            <XStack jc={"space-between"} f={1}>
              <H4 ml={"$2"} className="font-bold">
                วัสดุที่รับทั้งหมด
              </H4>
              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </XStack>
          )}
        </Accordion.Trigger>
        <Accordion.Content>
          <View>
            <FlatList
              style={{ gap: 20 }}
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({ item }) => renderFunc(item)}
            />
          </View>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

export default MaterialDropDown;

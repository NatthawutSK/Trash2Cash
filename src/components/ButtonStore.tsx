import React from "react";
import { Button, Text } from "tamagui";
import { colors } from "@/constants/Colors";

type Props = {
  title: string;
  func?: () => void;
};

const ButtonStore = ({ title, func }: Props) => {
  return (
    <Button
      onPress={func}
      alignSelf="center"
      w={"90%"}
      style={{ backgroundColor: colors.green4 }}
    >
      <Text fos={"$5"} className="font-bold" color={"$green1Light"}>
        {title}
      </Text>
    </Button>
  );
};

export default ButtonStore;

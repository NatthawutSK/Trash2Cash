import React from "react";
import { useLocalSearchParams } from "expo-router";
import {
  Avatar,
  Image,
  Square,
  Stack,
  XStack,
  YStack,
  Text,
  ScrollView,
  H4,
  Accordion,
  Paragraph,
} from "tamagui";
import { Store, Phone, ChevronDown, Newspaper } from "@tamagui/lucide-icons";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = {};
type TypeStore = {
  img: string;
  name: string;
  address: string;
  contact: {
    phone: string;
    email?: string;
    line?: string;
  };
};

const Mockstore: TypeStore[] = [
  {
    img: "https://xn--12c7bzakgbj6bza1cbe6b3jwh.com/upload/about/1735775123198501.webp",
    name: "บ้านเลขที่ 1",
    address: "ถนน 1",
    contact: {
      phone: "0812345678",
      email: "",
    },
  },
  {
    img: "http://www.thealami.com/upfile/wongranit1.jpg",
    name: "บ้านเลขที่ 2",
    address: "ถนน 2",
    contact: {
      phone: "0812345678",
      email: "",
    },
  },
];

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
};

const exampleTrash = (
  typeTrash: string,
  img: string,
  recieveAmount: string
) => {
  return (
    <Stack>
      <Text fos={"$1"}>{truncateText(typeTrash, 8)}</Text>
      <Image
        w={50}
        h={50}
        br={10}
        source={{
          uri: img,
        }}
      />
      <Text color={"$green8Dark"}>{recieveAmount}</Text>
    </Stack>
  );
};

const detailStore = (props: Props) => {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView>
      <Image width={500} h={250} source={{ uri: Mockstore[0].img }} />
      <YStack ai={"center"}>
        <Square bg="$green5Light" w={370} h={90} br={25} mt={20}>
          <XStack f={1} ai={"center"} m={10} space={"$3"}>
            <Avatar circular size="$5">
              <Avatar.Image
                accessibilityLabel="Cam"
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
              />
              <Avatar.Fallback backgroundColor="$blue10" />
            </Avatar>
            <YStack>
              <Text className="font-bold" color={"$green8Dark"} fos={"$6"}>
                ร้านโชคชัย
              </Text>
              <XStack ai={"center"} space={"$2"}>
                <Store size={"$2"} color="green" />
                <Text color={"$green10Light"}>ร้านรับซื้อ</Text>
              </XStack>
            </YStack>
          </XStack>
        </Square>
        <Square bg="$green5Light" w={370} h={60} br={25} mt={10}>
          <XStack ai={"center"} space={"$3"}>
            <Phone size={"$2"} color="green" />
            <Text color={"$green8Dark"}>โทร : 0944215180</Text>
          </XStack>
        </Square>
        <Square bg="$green5Light" w={370} h={60} br={25} mt={10}>
          <XStack ai={"center"} space={"$3"}>
            <FontAwesome5 name="line" size={24} color="green" />
            <Text color={"$green8Dark"}>Natthawut_Sornkhiew</Text>
          </XStack>
        </Square>
        <Square bg="$green5Light" w={370} h={90} br={25} mt={10}>
          <XStack ai={"center"} space={"$3"}>
            <FontAwesome5 name="map" size={24} color="green" />
            <Text color={"$green8Dark"} wordWrap="break-word" w={280}>
              ซอยรามคำแหง 159/1 ถนนรามคำแหง เขตสะพานสูง แขวงราษฎร์พัฒนา
              กรุงเทพมหานคร 10240
            </Text>
          </XStack>
        </Square>
      </YStack>

      <YStack ai={"center"} pt={"$5"} space={"$4"}>
        <H4 className="font-bold">วัสดุที่รับ</H4>
        <Accordion overflow="hidden" width="90%" type="multiple" br={"$8"}>
          <Accordion.Item value="a1">
            <Accordion.Trigger
              flexDirection="row"
              justifyContent="space-between"
            >
              {({ open }: any) => (
                <>
                  <Newspaper size={"$2"} color="green" />
                  <H4>หมวดกระดาษ</H4>
                  <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                    <ChevronDown size="$1" />
                  </Square>
                </>
              )}
            </Accordion.Trigger>
            <Accordion.Content>
              <XStack
                ai={"center"}
                jc={"center"}
                // space={"$2"}
                rowGap={"$3"}
                columnGap={"$3"}
                w={300}
                display="flex"
                flexWrap="wrap"
                // className="flex flex-wrap "
              >
                {exampleTrash(
                  "กล่องกระดาษลัง",
                  "https://www.fastboxs.com/wp-content/uploads/2017/12/corrugated.jpg",
                  "ไม่จำกัด"
                )}
                {exampleTrash(
                  "กล่องกระดาษลัง",
                  "https://www.fastboxs.com/wp-content/uploads/2017/12/corrugated.jpg",
                  "ไม่จำกัด"
                )}
                {exampleTrash(
                  "กล่องกระดาษลัง",
                  "https://www.fastboxs.com/wp-content/uploads/2017/12/corrugated.jpg",
                  "ไม่จำกัด"
                )}
                {exampleTrash(
                  "กล่องกระดาษลัง",
                  "https://www.fastboxs.com/wp-content/uploads/2017/12/corrugated.jpg",
                  "ไม่จำกัด"
                )}
                {exampleTrash(
                  "หนังสือพิมพ์เก่า",
                  "https://cx.lnwfile.com/_/cx/_raw/ub/7u/av.jpg",
                  "ไม่จำกัด"
                )}
                {exampleTrash(
                  "หนังสือพิมพ์เก่า",
                  "https://cx.lnwfile.com/_/cx/_raw/ub/7u/av.jpg",
                  "ไม่จำกัด"
                )}
                {exampleTrash(
                  "หนังสือพิมพ์เก่า",
                  "https://cx.lnwfile.com/_/cx/_raw/ub/7u/av.jpg",
                  "ไม่จำกัด"
                )}
                {exampleTrash(
                  "หนังสือพิมพ์เก่า",
                  "https://cx.lnwfile.com/_/cx/_raw/ub/7u/av.jpg",
                  "ไม่จำกัด"
                )}
              </XStack>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="a2">
            <Accordion.Trigger
              flexDirection="row"
              justifyContent="space-between"
            >
              {({ open }: any) => (
                <>
                  <FontAwesome5 name="wine-bottle" size={24} color="green" />
                  <H4>หมวดขวดพลาสติก</H4>
                  <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                    <ChevronDown size="$1" />
                  </Square>
                </>
              )}
            </Accordion.Trigger>
            <Accordion.Content>
              <XStack
                ai={"center"}
                jc={"center"}
                // space={"$2"}
                rowGap={"$3"}
                columnGap={"$3"}
                w={300}
                display="flex"
                flexWrap="wrap"
                // className="flex flex-wrap "
              >
                {exampleTrash(
                  "กล่องกระดาษลัง",
                  "https://www.fastboxs.com/wp-content/uploads/2017/12/corrugated.jpg",
                  "ไม่จำกัด"
                )}
                {exampleTrash(
                  "กล่องกระดาษลัง",
                  "https://www.fastboxs.com/wp-content/uploads/2017/12/corrugated.jpg",
                  "ไม่จำกัด"
                )}
                {exampleTrash(
                  "กล่องกระดาษลัง",
                  "https://www.fastboxs.com/wp-content/uploads/2017/12/corrugated.jpg",
                  "ไม่จำกัด"
                )}
                {exampleTrash(
                  "กล่องกระดาษลัง",
                  "https://www.fastboxs.com/wp-content/uploads/2017/12/corrugated.jpg",
                  "ไม่จำกัด"
                )}
                {exampleTrash(
                  "หนังสือพิมพ์เก่า",
                  "https://cx.lnwfile.com/_/cx/_raw/ub/7u/av.jpg",
                  "ไม่จำกัด"
                )}
                {exampleTrash(
                  "หนังสือพิมพ์เก่า",
                  "https://cx.lnwfile.com/_/cx/_raw/ub/7u/av.jpg",
                  "ไม่จำกัด"
                )}
                {exampleTrash(
                  "หนังสือพิมพ์เก่า",
                  "https://cx.lnwfile.com/_/cx/_raw/ub/7u/av.jpg",
                  "ไม่จำกัด"
                )}
                {exampleTrash(
                  "หนังสือพิมพ์เก่า",
                  "https://cx.lnwfile.com/_/cx/_raw/ub/7u/av.jpg",
                  "ไม่จำกัด"
                )}
              </XStack>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </YStack>
    </ScrollView>
  );
};

export default detailStore;

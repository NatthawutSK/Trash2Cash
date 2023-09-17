import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";

import { useEffect, useMemo, useRef, useState } from "react";
import ImagePicker, {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from "react-native-image-picker";
import { MediaType } from "react-native-image-picker";
import axios from "axios";
import {
  Adapt,
  Input,
  Label,
  Select,
  SelectProps,
  Sheet,
  Switch,
  XStack,
  YStack,
  getFontSize,
  Button as TamaButton,
} from "tamagui";
import DatePicker from "react-native-date-picker";
// import { DatePickerIOS } from "react-native";
import { Bold, Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { LinearGradient } from "tamagui/linear-gradient";
import { router } from "expo-router";

const images = [
  { id: "1", source: require("../../assets/images/t.jpg") },
  // Add more images as needed
];

const TypeTrash = [
  { name: "Plastic" },
  { name: "Bottle" },
  { name: "Glass" },
  { name: "Cans" },
  { name: "Batteries" },
  { name: "Box" },
];

export function SelectDemoItem(props: SelectProps) {
  const [val, setVal] = useState("");

  return (
    <Select id="food" value={val} onValueChange={setVal} {...props}>
      <Select.Trigger width={160} iconAfter={ChevronDown}>
        <Select.Value placeholder="Select Type" />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet
          native={!!props.native}
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: "spring",
            damping: 20,
            mass: 1.2,
            stiffness: 250,
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="60%"
          height="$2"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={["$background", "$backgroundTransparent"]}
            borderRadius="$4"
          />
        </Select.ScrollUpButton>

        <Select.Viewport minWidth={100}>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            {/* for longer lists memoizing these is useful */}
            {useMemo(
              () =>
                TypeTrash.map((item, i) => {
                  return (
                    <Select.Item
                      index={i}
                      key={item.name}
                      value={item.name.toLowerCase()}
                    >
                      <Select.ItemText>{item.name}</Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto"></Select.ItemIndicator>
                    </Select.Item>
                  );
                }),
              [TypeTrash]
            )}
          </Select.Group>
          {/* Native gets an extra icon */}
          {props.native && (
            <YStack
              position="absolute"
              right={0}
              top={0}
              bottom={0}
              alignItems="center"
              justifyContent="center"
              width={"$3"}
              pointerEvents="none"
            >
              <ChevronDown size={getFontSize((props.size ?? "$true") as any)} />
            </YStack>
          )}
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="60%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={["$backgroundTransparent", "$background"]}
            borderRadius="$4"
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
}

export default function ApproveBuyer() {
  let [currentIndex, setCurrentIndex] = useState(0);

  const [showDetails, setShowDetails] = useState(false);

  const [date, setDate] = useState(new Date());
  //   const [open, setOpen] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const [selectedImage, setSelectedImage] =
    useState<null | ImagePickerResponse>(null); // const flatListRef = useRef(null);
  console.log(currentIndex);

  // const openImagePicker = () => {
  //     const options = {
  //         mediaType: 'mixed',
  //       includeBase64: false,
  //       maxHeight: 2000,
  //       maxWidth: 2000,
  //     };

  //     launchImageLibrary(options, (response) => {
  //         if (response.didCancel) {
  //           console.log('User cancelled image picker');
  //         } else if (response.errorCode) {
  //           console.log('Image picker error: ', response.errorCode);
  //         } else {
  //           let imageUri = response.assets?.[0]?.uri;
  //           setSelectedImage(imageUri);
  //         }
  //       });
  //   };
  //   const uploadImage = async (imageData) => {
  //     try {
  //       const formData = new FormData();
  //       formData.append('image', {
  //         uri: imageData.uri,
  //         type: imageData.type,
  //         name: imageData.fileName,
  //       });

  //       const response = await axios.post('YOUR_UPLOAD_URL', formData);
  //       console.log('Image uploaded successfully:', response.data);
  //     } catch (error) {
  //       console.error('Error uploading image:', error);
  //     }
  //   };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + "...";
    }
  };

  const incrementIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const renderItemCircle = () => {
    const circleStyle = {
      ...styles.circlemini,
    };

    return <View style={circleStyle} />;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        
        <View style={{ padding: 20, margin: 15, backgroundColor: "white" }}>
        <View style={[styles.container]}>
        <YStack padding="$3" minWidth={300} space="$4">
        <XStack alignItems="center" space="$5">
                <Label width={120} fontSize={20} htmlFor="nametopic" fontWeight="bold">
                  Topic Name :
                </Label>
                <Input flex={1} width={10} id="nametopic" placeholder="Name" />
              </XStack>
        </YStack>
            </View>
          <View style={[styles.container, { margin: 30 }]}>
            <Image
              source={require("../../assets/images/t.jpg")}
              style={{ height: 250, width: 320 }}
            ></Image>
          </View>

          {selectedImage && (
            <Image
              source={{ uri: selectedImage?.assets?.[0].uri }}
              style={{ width: 200, height: 200 }}
            />
          )}
          <Button title="Select Image" />

          <View style={styles.container}>
            <YStack padding="$3" minWidth={300} space="$4">
              <XStack alignItems="center" space="$5">
                <Label width={90} fontSize={14} htmlFor="namebuyer">
                  Name Buyer :
                </Label>
                <Input flex={1} width={20} id="namebuyer" placeholder="Name" />
              </XStack>

              <XStack alignItems="center" space="$5">
                <Label width={90} fontSize={14} htmlFor="namesell">
                  Name Seller :
                </Label>
                <Input flex={1} width={20} id="namesell" placeholder="Name" />
              </XStack>
              <XStack alignItems="center" space="$5">
                <Label width={90} fontSize={14} htmlFor="idsell">
                  ID Seller :
                </Label>
                <Input flex={1} width={20} id="idsell" placeholder="ID" />
              </XStack>
              {/* <DatePicker date={date} onDateChange={setDate} /> */}
              <XStack alignItems="center" space="$5">
                <Label width={90} fontSize={14} htmlFor="date">
                  Date :
                </Label>
                <Input flex={1} width={20} id="date" placeholder="00/00/0000" />
              </XStack>

              <View style={styles.hr}></View>

              <XStack ai="center" space>
                <Label f={1} fb={0}>
                  Custom :
                </Label>
                <SelectDemoItem native />
              </XStack>
              <XStack ai="center" space>
                <Label width={90} fontSize={14} htmlFor="weight">
                  Weight :
                </Label>
                <Input flex={1} width={20} id="weight" placeholder="- KG" />
              </XStack>
              <XStack justifyContent="center">
                <TamaButton size="$4" backgroundColor="$blue7">
                  Add{" "}
                </TamaButton>
              </XStack>
            </YStack>
          </View>
          <View style={styles.hr}></View>
          <View
            style={{
              padding: 20,
              backgroundColor: "#8ECDDD",
              margin: 15,
              flex: 0,
              flexDirection: "column",
              borderRadius: 12,
            }}
          >
            <View style={{ position: "relative", alignItems: "center" }}>
              <TamaButton
                size={100}
                width={270}
                height="$4"
                theme="active"
                onPress={toggleDetails}
                justifyContent="center"
              >
                Detail
              </TamaButton>
            </View>
            {showDetails && (
              <View>
                <View style={styles.hr}></View>
                <Text style={{ fontSize: 10 }}>
                  Additional details go here.
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    รายการ
                  </Text>
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    น้ำหนัก
                  </Text>
                  {/* <View style={styles.hr}></View> */}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>- ขวดน้ำ</Text>
                  <Text>8 kg</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>- ขวดน้ำ</Text>
                  <Text>8 kg</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>- ขวดน้ำ</Text>
                  <Text>8 kg</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>- ขวดน้ำ</Text>
                  <Text>8 kg</Text>
                </View>
              </View>
            )}
          </View>
          <View style={[styles.container, { alignItems: "flex-end" }]}>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <TamaButton
                style={{
                  color: "white",
                  marginRight: 10,
                  backgroundColor: "green",
                }}
                size="$4"
                theme="active"
                onPress={() => router.push("/(tabs)/")}
              >
                Send
              </TamaButton>
              <TamaButton
                style={{ color: "white", backgroundColor: "red" }}
                size="$4"
                theme="active"
                onPress={() => router.push("/(tabs)/")}
              >
                Cancel
              </TamaButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  circlemini: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginLeft: 10,
    backgroundColor: "red",
  },
  hr: {
    borderBottomColor: "white", // Change color as needed
    borderBottomWidth: 1, // Change thickness as needed
    marginVertical: 10,
    margin: 40, // Adjust spacing as needed
  },
  miniimage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
  },
});

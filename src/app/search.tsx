import { View, Text } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button } from "tamagui";
import { router, useNavigation, useRouter } from "expo-router";

type Props = {};

const search = (props: Props) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "ค้นหา",
        // autoFocus: true,
        onChangeText: (event: any) => setSearch(event.nativeEvent.text),
        // onBlur: () => {
        //   console.log("Searching" + search);
        //   handleSearch();
        // },
        hintTextColor: "gray",
        // obscureBackground: false,
        // disableBackButtonOverride: true,
        // search bar options
      },
    });
  }, [navigation]);
  return (
    <View>
      <Text>search : {search}</Text>
      <Button
        alignSelf="center"
        size="$6"
        onPress={() => router.push("/detailTrash/55")}
      >
        go to Trash Detail
      </Button>
      <Button
        alignSelf="center"
        size="$6"
        onPress={() => router.push("/detailStore/99")}
      >
        go to Store Detail
      </Button>
    </View>
  );
};

export default search;

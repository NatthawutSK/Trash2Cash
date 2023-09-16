import { Text } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { View, Button, H5, Tabs, Stack } from "tamagui";

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
		<Tabs fd={"column"} defaultValue="tab1" width={400}>
			<Tabs.List space>
				<Tabs.Tab value="tab1">
					<Text>TAB1</Text>
				</Tabs.Tab>
				<Tabs.Tab value="tab2">
					<Text>TAB2</Text>
				</Tabs.Tab>
			</Tabs.List>
			<Tabs.Content
				value="tab1"
				jc={"center"}
				ai={"center"}
				ac={"center"}
			>
				<H5>Tab 1</H5>
			</Tabs.Content>
			<Tabs.Content value="tab2">
				<H5>Tab 2</H5>
			</Tabs.Content>
		</Tabs>
	);
};

export default search;

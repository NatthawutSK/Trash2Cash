import { MySafeAreaView } from "@/components/MySafeAreaView";
import { useUserContext } from "@/provider/UserContext";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, H4, Input, XStack, YStack } from "tamagui";

type Props = {};
const createSellerMutation = gql`
  mutation CreateSeller(
    $user_name: String!
    $auth_id: String!
    $roles: String!
  ) {
    insertUsers(user_name: $user_name, auth_id: $auth_id, roles: $roles) {
      user_name
    }
    insertScore(
      auth_id: $auth_id
      score_carbon: 0
      score_trash: 0
      score_tree: 0
    ) {
      auth_id
    }
  }
`;

const FormSeller = (props: Props) => {
  const [userName, setUserName] = useState("");
  const [handleMutation, { loading }] = useMutation(createSellerMutation);
  const { authUser, reloadDbUser }: any = useUserContext();
  const onSave = async () => {
    try {
      await handleMutation({
        variables: {
          user_name: userName,
          auth_id: authUser?.id,
          roles: "Seller",
        },
      });
      reloadDbUser();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MySafeAreaView>
      <YStack jc={"center"} ai={"center"} padding={"$4"} space={"$4"} f={1}>
        <H4 className="text-2xl">ชื่อผู้ใช้</H4>
        <XStack ai={"center"} space={"$3"}>
          <Input
            flex={1}
            h={"$4"}
            placeholder="ชื่อผู้ใช้"
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
        </XStack>

        <Button w={"100%"} onPress={() => onSave()}>
          {loading ? "กำลังบันทึก..." : "บันทึก"}
        </Button>
      </YStack>
    </MySafeAreaView>
  );
};

export default FormSeller;

import { View, Text } from "react-native";
import React from "react";
import { Button, Spinner } from "tamagui";
import { gql, useMutation } from "@apollo/client";
// import { useMaterialContext } from "@/provider/MaterialContext";
import { TypeTrashMaterial } from "@/MockData/types";
import { useUserContext } from "@/provider/UserContext";

type Props = {
  materialName: string;
  setMaterialData: (data: TypeTrashMaterial[]) => void;
};

const updateDetailStore = gql`
  mutation MyMutation(
    $auth_id: String
    $store_detail: String
    $store_user_id: ID!
  ) {
    updateStore(
      auth_id: $auth_id
      store_detail: $store_detail
      store_user_id: $store_user_id
    ) {
      auth_id
    }
  }
`;

const DelMaterialData = ({ materialName, setMaterialData }: Props) => {
  const { authUser, reloadDbUser, dbUser }: any = useUserContext();
  const [handleMutation, { loading }] = useMutation(updateDetailStore);

  const DeleteMaterial = async (materialName: string) => {
    const materialDataArr = JSON.parse(dbUser.store[0].store_detail);
    console.log("from user", dbUser.store[0].store_detail);

    const newData = materialDataArr.filter(
      (item: TypeTrashMaterial) => item.materialName !== materialName
    );
    console.log("nexdata", newData);
    setMaterialData(newData);
    await handleMutation({
      variables: {
        auth_id: authUser?.id,
        store_user_id: dbUser.store[0].store_user_id,
        store_detail: JSON.stringify(newData),
      },
    });
    reloadDbUser();
  };

  //   if (loading) return <Spinner size="large" color="white" />;

  return (
    <Button
      onPress={() => DeleteMaterial(materialName)}
      color={"white"}
      bg={"$red9Light"}
      style={{
        width: 80,
        height: 40,
      }}
    >
      ลบ
    </Button>
  );
};

export default DelMaterialData;

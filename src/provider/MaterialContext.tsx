import { createContext, useContext, useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { gql, useQuery } from "@apollo/client";
import { TypeTrashMaterial } from "@/MockData/types";
// import { UserType } from "@/MockData/types";

const getMaterialQuery = gql`
  query StoreQuery($auth_id: String!) {
    usersUsingStore_auth_id_fkey(auth_id: $auth_id) {
      store {
        store_detail
      }
    }
  }
`;
const MaterialContext = createContext({});

const MaterialContextProvider = ({ children }: any) => {
  const { user: authUser, isLoaded: isAuthLoaded } = useUser();

  const { data, loading, refetch, error } = useQuery(getMaterialQuery, {
    variables: { auth_id: authUser?.id },
  });

  const materialData = data?.usersUsingStore_auth_id_fkey.store[0].store_detail;
  //   const materialData = JSON.parse(
  //     data?.usersUsingStore_auth_id_fkey.store[0].store_detail
  //   );
  //   console.log(data?.usersUsingStore_auth_id_fkey);

  //
  //   const [materialData, setMaterialData] = useState<TypeTrashMaterial[]>(
  //     JSON.parse(data.usersUsingStore_auth_id_fkey.store[0].store_detail)
  //   );

  return (
    <MaterialContext.Provider value={{ loading, error, refetch, materialData }}>
      {children}
    </MaterialContext.Provider>
  );
};

export default MaterialContextProvider;
export const useMaterialContext = () => useContext(MaterialContext);

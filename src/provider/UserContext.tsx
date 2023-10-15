import { createContext, useContext } from "react";
import { useUser } from "@clerk/clerk-expo";
import { gql, useQuery } from "@apollo/client";

const getUserQuery = gql`
  query MyQuery($authid: String!) {
    usersUsingusers_auth_user_key(auth_user: $authid) {
      address
      auth_user
      line_id
      phone_number
      roles
      user_name
    }
  }
`;

const UserContext = createContext({});

const UserContextProvider = ({ children }: any) => {
  const { user: authUser, isLoaded: isAuthLoaded } = useUser();

  const {
    data,
    loading: isDbLoading,
    refetch,
  } = useQuery(getUserQuery, {
    variables: { authid: authUser?.id },
  });

  const dbUser = data?.usersUsingusers_auth_user_key;

  const loading = isDbLoading || !isAuthLoaded;
  return (
    <UserContext.Provider
      value={{ dbUser, authUser, loading, reloadDbUser: refetch }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
export const useUserContext = () => useContext(UserContext);

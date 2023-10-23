import { createContext, useContext } from "react";
import { useUser } from "@clerk/clerk-expo";
import { gql, useQuery } from "@apollo/client";

const getUserQuery = gql`
	query MyQuery($authid: String!) {
		users(auth_id: $authid) {
			address
			auth_id
			line_id
			phone_number
			roles
			user_name
			store {
				store_user_id
				store_detail
			}
			score {
				score_carbon
				score_trash
				score_tree
				score_id
			}
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

  const dbUser = data?.users;

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

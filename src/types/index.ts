export type UserType = {
  username: string;
  address: string;
  phone: string;
  line_id: string;
  image: string;
  score: Score;
};

export type Score = {
  score_tree: number;
  score_carbon: number;
  score_trash: number;
};

export type StoreNearbyType = {
  distance: number;
  latitude: number;
  longitude: number;
  user_name: string;
  auth_id: string;
};

export type UserType = {
	username: string;
	address: string;
	phone: string;
	line_id: string;
	image: string;
	score: Score;
};

export type Score = {
	tree: number;
	co2: number;
	trash: number;
};

export type Post = {
	node: {
		url: string;
		title: string;
		coverImage: {
			url: string;
		};
		publication: {
			title: string;
			favicon: string;
		};
	};
};

export type HashnodeResponse<T> = {
	data: {
		user: {
			posts: {
				edges: T[];
			};
		};
	};
};

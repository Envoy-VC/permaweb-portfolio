import type { HashnodeResponse, Post } from '~/types';

export const getBlogPosts = async () => {
	const query = `
		query {
			user(username: "Envoy1084") {
				posts(pageSize: 4, page: 1, sortBy: DATE_PUBLISHED_DESC) {
					edges {
						node {
							url
							title
							url
							coverImage {
								url
							}
							publication {
								title
								favicon
							}
						}
					}
				}
			}
		}
	`;

	const response = await fetch('https://gql.hashnode.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query }),
	});

	const json = (await response.json()) as HashnodeResponse<Post>;
	return json.data.user.posts.edges;
};

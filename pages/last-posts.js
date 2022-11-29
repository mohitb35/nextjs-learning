import { useEffect, useState } from 'react';

function LastPostsPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/posts?_page=1')
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <p>Loading..</p>;
	}

	if (!posts) {
		return <p>No data fetched</p>;
	}

	return (
		<ul>
			{posts.map((post) => (
				<li key={post.id}>{post.title}</li>
			))}
		</ul>
	);
}

export default LastPostsPage;

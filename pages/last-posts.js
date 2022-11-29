import { useEffect, useState } from 'react';
import useSWR from 'swr';

function LastPostsPage() {
	/* const [isLoading, setIsLoading] = useState(false); */
	const [posts, setPosts] = useState(null);

	const fetcher = (...args) => fetch(...args).then((res) => res.json());

	const { data, error } = useSWR(
		'https://jsonplaceholder.typicode.com/posts?_page=1',
		fetcher
	);

	useEffect(() => {
		if (data) {
			console.log(data);
			setPosts(data);
		}
	}, [data]);

	/* useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/posts?_page=1')
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);
				setIsLoading(false);
			});
	}, []); */

	if (error) {
		return <p>No data fetched</p>;
	}

	if (!data || !posts) {
		return <p>Loading..</p>;
	}

	return (
		posts && (
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		)
	);
}

export default LastPostsPage;

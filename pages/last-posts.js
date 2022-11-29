import { useEffect, useState } from 'react';
import useSWR from 'swr';

function LastPostsPage(props) {
	const [posts, setPosts] = useState(props.posts);
	const [page, setPage] = useState(Number(props.page));

	const fetcher = (...args) => fetch(...args).then((res) => res.json());

	const { data, error } = useSWR(
		`https://jsonplaceholder.typicode.com/posts?_page=${page}`,
		fetcher
	);

	useEffect(() => {
		if (data) {
			setPosts(data);
		}
	}, [data]);

	const fetchPrevious = () => {
		setPage((page) => page - 1);
	};

	const fetchNext = () => {
		setPage((page) => page + 1);
	};

	if (error) {
		return <p>No data fetched</p>;
	}

	if (!data && !posts) {
		return <p>Loading..</p>;
	}

	return (
		posts && (
			<>
				<ul>
					{posts.map((post) => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
				{page !== 1 && <button onClick={fetchPrevious}>Previous</button>}
				<button onClick={fetchNext}>Next</button>
			</>
		)
	);
}

export default LastPostsPage;

export async function getStaticProps() {
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_page=1'
	);
	const data = await response.json();

	return {
		props: { posts: data, page: 1 },
	};
}

import { useRouter } from 'next/router';

function ClientPage() {
	const router = useRouter();

	return (
		<div>
			<h1>The Client Page</h1>
			{router.query.id}
		</div>
	);
}

export default ClientPage;

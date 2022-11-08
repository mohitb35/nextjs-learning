import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
	const router = useRouter();
	return (
		<div>
			<h1>Selected Project for Client {router.query.id}</h1>
			{router.query.clientProjectId}
		</div>
	);
}

export default SelectedClientProjectPage;

import Link from 'next/link';
import { useRouter } from 'next/router';

function ClientPage() {
	const router = useRouter();

	function openProject() {
		router.push({
			pathname: '/clients/[id]/[clientProjectId]',
			query: {
				id: router.query.id,
				clientProjectId: 'ProjectA',
			},
		});
	}

	return (
		<div>
			<h1>The Client Page - {router.query.id}</h1>
			<ul>
				<li>
					<Link href="/clients/max/ProjectX">Project X</Link>
				</li>
			</ul>
			<button onClick={openProject}>Load Project A</button>
		</div>
	);
}

export default ClientPage;

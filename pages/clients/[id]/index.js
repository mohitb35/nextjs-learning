import Link from 'next/link';
import { useRouter } from 'next/router';

function ClientPage() {
	const router = useRouter();

	return (
		<div>
			<h1>The Client Page - {router.query.id}</h1>
			<ul>
				<li>
					<Link href="/clients/max/ProjectX">Project X</Link>
				</li>
			</ul>
		</div>
	);
}

export default ClientPage;

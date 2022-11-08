import Link from 'next/link';

function ClientsPage() {
	const clients = [
		{ id: 'max', name: 'Max' },
		{ id: 'mark', name: 'Marcovitch' },
	];

	return (
		<div>
			<h1>The Clients Page</h1>
			<ul>
				{clients.map((client, index) => {
					return (
						<li key={index}>
							<Link href={`/clients/${client.id}`}>{client.name}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default ClientsPage;

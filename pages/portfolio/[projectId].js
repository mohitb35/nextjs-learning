import { useRouter } from 'next/router';

function PortfolioDetailsPage() {
	const router = useRouter();

	console.log(router.pathname); // /project/[projectId] - gives the relative path of this route within the pages folder

	return (
		<div>
			<h1>Portfolio Details</h1>
			{router.query.projectId}
		</div>
	);
}

export default PortfolioDetailsPage;

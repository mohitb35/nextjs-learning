import fs from 'fs/promises';
import Link from 'next/link';
import path from 'path';

function HomePage(props) {
	const { products } = props;

	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>
					<Link href={`/${product.id}`}>{product.title}</Link>
				</li>
			))}
		</ul>
	);
}

export async function getStaticProps(context) {
	console.log('regenerating');
	const filePath = path.join(process.cwd(), 'data', 'dummy_backend.json');
	const jsonData = await fs.readFile(filePath);

	const data = JSON.parse(jsonData);

	if (!data) {
		return { redirect: { destination: '/not-found' } };
	}

	if (data.products?.length === 0) return { notFound: true };

	return {
		props: {
			products: data.products,
		},
		revalidate: 10, //Specify value in seconds after which the page should be rerendered (ISR)
		// notFound: true, //could be used to render 404 page some times because data could not be fetched
		// redirect //specify redirect path (could be conditional)
	};
}

export default HomePage;

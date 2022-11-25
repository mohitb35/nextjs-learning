import fs from 'fs/promises';
import path from 'path';

function HomePage(props) {
	const { products } = props;

	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>{product.title}</li>
			))}
		</ul>
	);
}

export async function getStaticProps() {
	console.log('regenerating');
	const filePath = path.join(process.cwd(), 'data', 'dummy_backend.json');
	const jsonData = await fs.readFile(filePath);

	const data = JSON.parse(jsonData);

	return {
		props: {
			products: data.products,
		},
		revalidate: 10, //Specify value in seconds after which the page should be rerendered (ISR)
	};
}

export default HomePage;

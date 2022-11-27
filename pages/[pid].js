import fs from 'fs/promises';
import path from 'path';

function ProductDetailPage(props) {
	const { loadedProduct } = props;

	return (
		<>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</>
	);
}

async function getData() {
	const filePath = path.join(process.cwd(), 'data', 'dummy_backend.json');
	const jsonData = await fs.readFile(filePath);
	return JSON.parse(jsonData);
}

export async function getStaticProps(context) {
	const { params } = context;

	const productId = params.pid;

	const data = await getData();
	const product = data.products.find((product) => product.id === productId);

	return {
		props: {
			loadedProduct: product,
		},
	};
}

export async function getStaticPaths() {
	const data = await getData();
	return {
		paths: data.products.map((product) => {
			return {
				params: {
					pid: product.id,
				},
			};
		}),
		fallback: 'blocking',
	};
}

export default ProductDetailPage;

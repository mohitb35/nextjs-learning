function UserProfilePage(props) {
	return <h1>{props.username}</h1>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
	//context also contains req, res, query, along with other properties that are also available in getStaticProps
	console.log(context);
	return {
		props: {
			username: 'Mohit',
		},
	};
}

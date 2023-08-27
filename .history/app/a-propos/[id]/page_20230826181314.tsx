export default async function About({ params }: { params: { id: string } }) {
	const product = await getAbout(params.id);

	return <></>;
}

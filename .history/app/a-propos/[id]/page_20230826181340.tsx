async function getAbout(id: string) {
	const res = await fetch(`http://localhost:3000/api/a-propos/${id}`, {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function About({ params }: { params: { id: string } }) {
	const product = await getAbout(params.id);

	return <></>;
}

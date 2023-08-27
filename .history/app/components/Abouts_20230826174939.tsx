import { AboutHero, AboutHeroProps } from "./components/AboutHero";

async function getAbouts(): Promise<AboutHeroProps[]> {
	const res = await fetch(`http://localhost:3000/api/abouts`, {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function Abouts() {
	const abouts: AboutHeroProps[] = await getAbouts();
	return <></>;
}

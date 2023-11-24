import { AboutHero, AboutHeroProps } from './AboutHero';

async function getAbouts(): Promise<AboutHeroProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/abouts`);

  if (!res.ok) {
    console.log(res.ok);
    console.log(res.status);
    console.log(res.statusText);
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Abouts() {
  const abouts: AboutHeroProps[] = await getAbouts();
  return (
    <>
      <div className="flex z-10 relative">
        {abouts.map((about, index) => {
          return (
            <AboutHero
              key={index}
              id={about.id}
              imageUrl={about.imageUrl}
              title={about.title}
              subtitle={about.subtitle}
              descriptions={about.descriptions}
              description={about.description}
            />
          );
        })}
      </div>
    </>
  );
}

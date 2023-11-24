import { AboutHero, AboutHeroProps } from './AboutHero';

async function getAbouts(): Promise<AboutHeroProps[]> {
  const res = await fetch(`http://localhost:3000/api/abouts`, {
    cache: 'no-store',
  });

  if (!res.ok) {
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

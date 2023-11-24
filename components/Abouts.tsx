import { AboutHero } from './AboutHero';
import { abouts } from './a-propos.data';

export default async function Abouts() {
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

import Image from 'next/image';

const logos: string[] = [
  '/img/region_bretagne.png',
  '/img/fondation_france.png',
  '/img/grdf.png',
  '/img/quimperle.png',
  '/img/technopole.png',
];

export const LogoCloud = () => {
  return (
    <div className="flex relative border-b border-brown-100 z-10">
      <div className="flex w-full bg-cream-100">
        {logos.map((logo) => {
          return (
            <div
              className="px-12 py-4 flex-1bg-cream-100  z-20 flex items-center justify-center"
              key={logo}
            >
              <Image
                className="flex items-center justify-center"
                src={logo}
                width={200}
                height={200}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

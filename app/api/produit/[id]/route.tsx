import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    imageUrl: '/img/echantillons.webp',
    imageAlt: 'Echantillons de produits',
    title: 'Produits',
    subtitle: 'Echantillons',
    slug: 'echantillons',
    price: 100,
    availability: 'A venir',
    content: "Un petit pack d'échantillons",
  },
  {
    id: 2,
    imageUrl: '/img/broye_solo.webp',
    imageAlt: 'Les objets réalisés par Adaozan',
    title: 'Produits',
    subtitle: 'Objets',
    slug: 'objets',
    price: 100,
    availability: 'A venir',
    content: 'Objet comme un vide poche',
  },
  {
    id: 3,
    imageUrl: '/img/credence.webp',
    imageAlt: "Image d'exemple de projet sur mesure réalisés par Adaozan",
    title: 'Produits',
    subtitle: 'Projets-sur-mesure',
    objectPosition: 'right',
    slug: 'projet-sur-mesure',
    price: 100,
    availability: 'A venir',
    content: 'Projet sur mesure, commme une crédence personalisée',
  },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = products.find((product) => product.id === +params.id);
  return NextResponse.json(data ?? {});
}

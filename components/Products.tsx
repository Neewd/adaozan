import { ProductHero } from "./ProductHero";
import { products } from "./produits.data";

export default async function Products({
	withDescription = false,
}: {
	withDescription: boolean;
}) {
	return (
		<>
			<div className="flex z-10 relative flex-col sm:flex-row">
				{products.map((product) => {
					return (
						<ProductHero
							key={product.id}
							imageUrl={product.imageUrl}
							title={product.title}
							subtitle={product.subtitle}
							objectPosition={product.objectPosition}
							slug={product.slug}
							id={product.id}
							carousel={product.carousel}
							content={product.content}
							subContent={product.subContent}
							details={product.details}
							price={product.price}
							orderButton={product.orderButton}
							description={
								withDescription
									? product.description
									: undefined
							}
						/>
					);
				})}
			</div>
		</>
	);
}

import { Await, useLoaderData } from 'react-router-dom';
import type { Product } from '../../components/interfaces/product.interface';
import { Suspense } from 'react';

export function Product() {
	const data = useLoaderData() as {data: Product};

	return <>
		<Suspense fallback={<div>Loading...</div>}>
			<Await
				resolve={data.data}
			>
				{({data}: {data: Product}) => (
					<>Product - {data.name}</>
				)}
			</Await>
		</Suspense>
	</>;
}
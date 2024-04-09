import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { Layout } from './components/layout/Layout/Layout';
import { Product } from './pages/Product/Product';
import { PREFIX } from './components/helpers/API';
import axios from 'axios';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [{
			path: '/',
			element: <Menu />
		},
		{
			path: '/cart',
			element: <Cart />
		},
		{
			path: '/product/:id',
			element: <Product />,
			loader: async ({ params }) => {
				await new Promise<void>((resolve) => {
					setTimeout(() => {
						resolve();
					}, 2000);
				});
				const {data} = await axios.get(`${PREFIX}/products/${params.id}`);
				return data;
			}
		}
		]
	},
	{
		path: '*',
		element: <Error />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);

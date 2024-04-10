import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { Layout } from './components/layout/Layout/Layout';
import { Product } from './pages/Product/Product';
import { PREFIX } from './components/helpers/API';
import axios from 'axios';
import { AuthLayout } from './components/layout/Auth/AuthLayout.tsx';
import { Login } from './pages/Login/Login.tsx';
import { Register } from './pages/Register/Register.tsx';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [{
			path: '/',
			element: <Suspense fallback={<>Loading...</>} ><Menu /></Suspense>
		},
		{
			path: '/cart',
			element: <Cart />
		},
		{
			path: '/product/:id',
			element: <Product />,
			errorElement: <>s</>,
			loader: async ({ params }) => {
				return defer({
					data: new Promise((resolve, reject) => {
						setTimeout(() => {
							axios.get(`${PREFIX}/products/${params.id}`).then(data => resolve(data)).catch(e => reject(e));
						}, 2000);
					})
				});
			}
		}
		]
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />
			}, {
				path: 'register',
				element: <Register />
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

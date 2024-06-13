import React from 'react';
import { Route } from 'react-router-dom';
import AdminLayout from '../../../../shared/presentation/layouts/AdminLayout';
import { loginRoute, exampleRoutePublic } from './routes';
import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';
import LoginPage from '../../presentation/pages/ExamplePage';

const exampleRouter = {
	layout: AdminLayout,
	router: [
		{
			path: loginRoute,
			page: LoginPage,
			routeComponent: UnauthenticatedRoute,
			layout: ({ children }) => <>{children}</>, // Optional param to custom layout
		},
		{
			path: exampleRoutePublic,
			page: LoginPage,
			routeComponent: Route,
			layout: ({ children }) => <>{children}</>, // Optional param to custom layout
		},
	],
};

export default exampleRouter;

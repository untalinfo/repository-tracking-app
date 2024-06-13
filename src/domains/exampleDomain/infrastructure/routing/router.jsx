import React from 'react';
import { UnauthenticatedRoute } from '@vecindario/suite-dashboard-layout-lib';
import { Route } from 'react-router-dom';
import AdminLayout from '../../../../shared/presentation/layouts/AdminLayout';
import ExamplePage from '../../presentation/pages/ExamplePage';
import { exampleRoute, exampleRoutePublic } from './routes';

const exampleRouter = {
	layout: AdminLayout,
	router: [
		{
			path: exampleRoute,
			page: ExamplePage,
			routeComponent: UnauthenticatedRoute,
			layout: ({ children }) => <>{children}</>, // Optional param to custom layout
		},
		{
			path: exampleRoutePublic,
			page: ExamplePage,
			routeComponent: Route,
			layout: ({ children }) => <>{children}</>, // Optional param to custom layout
		},
	],
};

export default exampleRouter;

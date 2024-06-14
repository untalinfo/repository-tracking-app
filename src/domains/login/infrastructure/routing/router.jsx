import React, { lazy, Suspense } from 'react';
import AdminLayout from '../../../../shared/presentation/layouts/AdminLayout';
import { loginRoute } from './routes';
import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';
import LoadingComponent from '../../../../shared/presentation/components/LoadingComponent';

const LoginPage = lazy(() => import('../../presentation/pages/LoginPage'));

const exampleRouter = {
	layout: AdminLayout,
	router: [
		{
			path: loginRoute,
			page: () => (
				<Suspense fallback={<LoadingComponent />}>
					<LoginPage />
				</Suspense>
			),
			routeComponent: UnauthenticatedRoute,
			layout: ({ children }) => <>{children}</>,
		},
	],
};

export default exampleRouter;

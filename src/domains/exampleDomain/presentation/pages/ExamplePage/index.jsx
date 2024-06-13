import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, EmbeddedFooter } from '@vecindario/vecindario-suite-components';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../../application/slices/example';
import './ExamplePage.scss';
import { DOMAIN_NAME } from '../../../infrastructure/locales';
import { SUBTITLE, WELCOME_TO_REACT } from '../../../infrastructure/locales/translation_keys';

const ExamplePage = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const history = useHistory();
	const todos = useSelector((state) => state.example.todos);
	const handleAddTodo = () => {
		dispatch(addTodo(`Todo ${todos.length + 1}`));
	};

	const handleRouter = () => {
		if (history.location.pathname === '/example') {
			history.push('/example-public');
			return;
		}
		history.push('/example');
	};
	return (
		<div className="example-page">
			<h1>{history.location.pathname}</h1>
			<h2>{t(`${WELCOME_TO_REACT}`, { ns: DOMAIN_NAME })}</h2>;
			<h3 className="example-page">{t(`${SUBTITLE}`, { ns: DOMAIN_NAME })}</h3>
			<br />
			<h2>{t(`${WELCOME_TO_REACT}`)}</h2>
			<h3 className="example-page">{t(`${SUBTITLE}`, { language: 'IDIOMA' })}</h3>
			<Button onClick={handleRouter}>Text router</Button>
			<Button onClick={handleAddTodo}>Add next todo</Button>
			{todos.map((todo, index) => (
				<div key={index} className="todo">
					{todo}
				</div>
			))}
			<EmbeddedFooter />
		</div>
	);
};

export default ExamplePage;

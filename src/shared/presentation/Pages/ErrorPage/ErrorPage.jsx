import { Box, Container, CssBaseline, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Copyright from '../../components/copyright';
import './ErrorPage.scss';

const ErrorPage = ({ backRoute }) => {
	return (
		<>
			<CssBaseline />
			<Box className="container-error-page">
				<Container maxWidth="sm" space={5} className="container-content">
					<Grid container alignItems={'center'} justifyContent={'center'} spacing={2}>
						<Grid item>
							<Typography sx={{ fontSize: '150px' }}>404</Typography>
						</Grid>
						<Grid item alignItems={'center'}>
							<Typography variant="h3">SORRY!</Typography>
							<Typography variant="h5">
								Parecequea donde vas no es a donde <br /> podemosir...
							</Typography>
						</Grid>
					</Grid>
					<Link href={backRoute} underline="hover" className="link-back">
						Regresar al Dashboard
					</Link>
					<Copyright />
				</Container>
			</Box>
		</>
	);
};
ErrorPage.propTypes = {
	backRoute: PropTypes.string,
};

export default ErrorPage;

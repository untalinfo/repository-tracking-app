import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import './LoginPage.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
	Box,
	Button,
	Checkbox,
	Container,
	CssBaseline,
	FormControlLabel,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import logoOL from '../../../../../shared/application/assets/cropped-Logo-Oficial-OL-Software-230x64.png';
import loginSchema from '../../../application/schema/login';
import authFields from '../../../application/constants/loginFields';

const LoginPage = () => {
	const defaultTheme = createTheme();
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(loginSchema),
	});

	const submitForm = (data) => {
		console.log('DATA FORM', data);
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="sm" className="container-login-page">
				<CssBaseline />
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-star',
					}}
					className="container-box"
				>
					<img src={logoOL} alt="" className="img-logo" />
					<Typography component="h1" variant="h4">
						Bienvenido al gestor de proyectos!
					</Typography>
					<Typography variant="subtitle1">Necesitamos tu usuario y contraseña</Typography>
					<Box component="form" onSubmit={handleSubmit(submitForm)} sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id={authFields.USERNAME}
							label="Nombre de usuario Ej:nombre.apellido"
							name={authFields.USERNAME}
							{...register(authFields.USERNAME)}
							autoComplete={authFields.USERNAME}
							autoFocus
							error={!!errors[authFields.USERNAME]}
							helperText={errors[authFields.USERNAME]?.message}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name={authFields.PASSWORD}
							label="Aquí va tu contraseña"
							type={'password'}
							id={authFields.PASSWORD}
							{...register(authFields.PASSWORD)}
							autoComplete="current-password"
							error={!!errors[authFields.PASSWORD]}
							helperText={errors[authFields.PASSWORD]?.message}
						/>
						<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={!isValid}>
							Ingresar
						</Button>
						<Grid container justifyContent={'space-between'} alignItems={'center'}>
							<Grid item>
								<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Permanecer Conectado" />
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									Recuperar Contraseña
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default LoginPage;

import React, { useState } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'

const Login = ({ onLogin }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = () => {
		if (
			username === process.env.REACT_APP_ADMIN_USERNAME &&
			password === process.env.REACT_APP_ADMIN_PASSWORD
		) {
			onLogin(true)
		} else {
			alert('Неверный логин или пароль')
		}
	}

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			marginTop='50px'
		>
			<Typography variant='h4' gutterBottom>
				Вход в админ-панель
			</Typography>
			<TextField
				label='Логин'
				variant='outlined'
				value={username}
				onChange={e => setUsername(e.target.value)}
				style={{ marginBottom: '15px', width: '300px' }}
			/>
			<TextField
				label='Пароль'
				type='password'
				variant='outlined'
				value={password}
				onChange={e => setPassword(e.target.value)}
				style={{ marginBottom: '20px', width: '300px' }}
			/>
			<Button variant='contained' color='primary' onClick={handleLogin}>
				Войти
			</Button>
		</Box>
	)
}

export default Login

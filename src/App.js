import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import Users from './pages/Users'
import Items from './pages/Items'
import ActiveRentals from './pages/ActiveRentals'
import Login from './pages/Login'

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	const handleLogout = () => {
		setIsAuthenticated(false)
	}

	return (
		<Router>
			{isAuthenticated ? (
				<>
					{/* AppBar с навигацией */}
					<AppBar position='static'>
						<Toolbar>
							<Typography variant='h6' style={{ flexGrow: 1 }}>
								Админ-панель
							</Typography>
							<Button color='inherit' component={Link} to='/users'>
								Пользователи
							</Button>
							<Button color='inherit' component={Link} to='/items'>
								Предметы
							</Button>
							<Button color='inherit' component={Link} to='/active-rentals'>
								Активная аренда
							</Button>
							<Button color='inherit' onClick={handleLogout}>
								Выйти
							</Button>
						</Toolbar>
					</AppBar>

					{/* Контент, отображаемый после успешного логина */}
					<Routes>
						<Route path='/users' element={<Users />} />
						<Route path='/items' element={<Items />} />
						<Route path='/active-rentals' element={<ActiveRentals />} />
					</Routes>
				</>
			) : (
				<Login onLogin={setIsAuthenticated} />
			)}
		</Router>
	)
}

export default App

import React, { useState } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	TextField,
	Button,
} from '@mui/material'

const Users = () => {
	const initialUsers = [
		{ id: 1, name: 'Иван Иванов', balance: 1000, status: 'Активен' },
		{ id: 2, name: 'Петр Петров', balance: 500, status: 'Заблокирован' },
	]

	const [search, setSearch] = useState('')
	const [filteredUsers, setFilteredUsers] = useState(initialUsers)

	const handleSearch = event => {
		const value = event.target.value.toLowerCase()
		setSearch(value)
		setFilteredUsers(
			initialUsers.filter(
				user =>
					user.name.toLowerCase().includes(value) ||
					user.status.toLowerCase().includes(value)
			)
		)
	}

	const toggleBlock = userId => {
		setFilteredUsers(prevUsers =>
			prevUsers.map(user =>
				user.id === userId
					? {
							...user,
							status: user.status === 'Активен' ? 'Заблокирован' : 'Активен',
					  }
					: user
			)
		)
	}

	return (
		<div>
			<TextField
				label='Поиск'
				variant='outlined'
				value={search}
				onChange={handleSearch}
				style={{ marginBottom: '20px' }}
			/>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Имя</TableCell>
							<TableCell>Баланс</TableCell>
							<TableCell>Статус</TableCell>
							<TableCell>Действие</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{filteredUsers.map(user => (
							<TableRow key={user.id}>
								<TableCell>{user.id}</TableCell>
								<TableCell>{user.name}</TableCell>
								<TableCell>{user.balance}</TableCell>
								<TableCell>{user.status}</TableCell>
								<TableCell>
									<Button
										variant='contained'
										color={user.status === 'Активен' ? 'secondary' : 'primary'}
										onClick={() => toggleBlock(user.id)}
									>
										{user.status === 'Активен'
											? 'Заблокировать'
											: 'Разблокировать'}
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default Users

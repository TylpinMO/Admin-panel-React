import React from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material'

const ActiveRentals = () => {
	const rentals = [
		{
			id: 1,
			user: 'Иван Иванов',
			item: 'Склад_1',
			startDate: '2024-12-24',
			dueDate: '2025-02-01',
		},
		{
			id: 2,
			user: 'Петр Петров',
			item: 'Склад_2',
			startDate: '2025-01-02',
			dueDate: '2025-01-25',
		},
	]

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Пользователь</TableCell>
						<TableCell>Название</TableCell>
						<TableCell>Дата старта</TableCell>
						<TableCell>Дата возврата</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rentals.map(rental => (
						<TableRow key={rental.id}>
							<TableCell>{rental.id}</TableCell>
							<TableCell>{rental.user}</TableCell>
							<TableCell>{rental.item}</TableCell>
							<TableCell>{rental.startDate}</TableCell>
							<TableCell>{rental.dueDate}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default ActiveRentals

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

const Items = () => {
	const items = [
		{ id: 1, name: 'Склад_1', status: 'Доступен' },
		{ id: 2, name: 'Склад_2', status: 'Готовится' },
	]

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Название</TableCell>
						<TableCell>Статус</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{items.map(item => (
						<TableRow key={item.id}>
							<TableCell>{item.id}</TableCell>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.status}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default Items

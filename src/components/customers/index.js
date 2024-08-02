import React, { useContext, useEffect, useState } from 'react';
import { Modal, Radio } from 'antd';
import { buyurtmalarData } from '../data/orderData';
import { ApiContext } from '../../context';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Customers = () => {
	const { searchValue, drawerCustomers } = useContext(ApiContext);
	const [filterData, setFilterData] = useState(buyurtmalarData);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [count, setCount] = useState('');
	const [status, setStatus] = useState('');
	const [editItem, setEditItem] = useState(null);

	const trash = (id) => {
		setFilterData(filterData.filter((item) => item.id !== id));
	};

	useEffect(() => {
		if (searchValue) {
			setFilterData(
				buyurtmalarData.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
			);
		} else {
			setFilterData(buyurtmalarData);
		}
	}, [searchValue]);

	useEffect(() => {
		if (drawerCustomers && Object.keys(drawerCustomers).length > 0) {
			setFilterData((prev) => [
				...prev,
				{
					id: prev.length + 1,
					...drawerCustomers,
				},
			]);
		}
	}, [drawerCustomers]);

	const columns = [
		{
			title: 'Mijoz nomi',
			dataIndex: 'name',
			key: 'name',
			width: 300,
			responsive: ['md'],
		},
		{
			title: 'Telefon raqam',
			dataIndex: 'phone',
			key: 'phone',
			width: 300,
			responsive: ['lg'],
		},
		{
			title: 'Buyurtmalar soni',
			dataIndex: 'count',
			key: 'count',
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			responsive: ['md'],
		},
		{
			title: 'Action',
			dataIndex: 'action',
			key: 'action',
			render: (_, record) => (
				<span className="d-flex align-items-center gap-3">
					<button
						onClick={() => {
							showModal(record);
						}}
						type="button"
						className="btn btn-success"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							fill="currentColor"
							className="bi bi-pencil-square"
							viewBox="0 0 16 16"
						>
							<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
							<path
								fillRule="evenodd"
								d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
							/>
						</svg>
					</button>
					<button
						onClick={() => {
							trash(record.id);
						}}
						type="button"
						className="btn btn-danger"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							fill="currentColor"
							className="bi bi-trash3-fill"
							viewBox="0 0 16 16"
						>
							<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
						</svg>
					</button>
				</span>
			),
			responsive: ['lg'],
		},
	];

	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = (record) => {
		setCount(record.count);
		setPhone(record.phone);
		setName(record.name);
		setStatus(record.status);
		setEditItem(record.id);
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setFilterData(
			filterData.map((item) =>
				item.id === editItem ? { ...item, name: name, phone: phone, count: count, status: status } : item
			)
		);
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const onChange = (e) => {
		setStatus(e.target.value);
	};
console.log(filterData,"asdsdasdas");
	return (
		<>
			<Table>
				<Thead>
					<Tr>
						<Th>
							<p className="p-3 bg-white">Mijoz ismi</p>
						</Th>
						<Th>Telefon raqami</Th>
						<Th>Buyurtmalar soni</Th>
						<Th>Status</Th>
						<Th>Action</Th>
					</Tr>
				</Thead>
				<Tbody>
					{filterData.map((item) => (
						<Tr>
							<Td>
								<p className="p-3 bg-white">{item.name}</p>
							</Td>
							<Td>
								<p>{item.phone}</p>{' '}
							</Td>
							<Td>
								<p>{item.count}</p>{' '}
							</Td>
							<Td>
								<p>{item.status}</p>{' '}
							</Td>
							<Td>
								<span className="d-flex align-items-center gap-3">
									<button
										onClick={() => {
											showModal(item);
										}}
										type="button"
										className="btn btn-success"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											fill="currentColor"
											class="bi bi-pencil-square"
											viewBox="0 0 16 16"
										>
											<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
											<path
												fill-rule="evenodd"
												d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
											/>
										</svg>
									</button>
									<button
										onClick={() => {
											trash(item.id);
										}}
										type="button"
										className="btn btn-danger"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											fill="currentColor"
											class="bi bi-trash3-fill"
											viewBox="0 0 16 16"
										>
											<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
										</svg>
									</button>
								</span>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>

			<Modal title="Malumot o'zgartirish" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="mb-3 w-75 rounded p-1 form-control"
				/>
				<input
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					className="mb-3 w-75 rounded p-1 form-control"
				/>
				<input
					value={count}
					onChange={(e) => setCount(e.target.value)}
					className="mb-3 w-75 rounded p-1 form-control"
				/>
				<Radio.Group onChange={onChange} value={status}>
					<Radio value="new">New</Radio>
					<Radio value="accepted">Accepted</Radio>
					<Radio value="delivered">Delivered</Radio>
					<Radio value="closed">Closed</Radio>
				</Radio.Group>
			</Modal>
		</>
	);
};

export default Customers;

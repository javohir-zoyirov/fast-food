import React, { useContext, useEffect, useState } from 'react';
import { Modal } from 'antd';
import { buyurtmalarData } from '../data/orderData';
import { ApiContext } from '../../context';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './style.css'

const Filial = () => {
	const [filterData, setFilterData] = useState(buyurtmalarData);
	const { searchValue, drawerFlialData } = useContext(ApiContext);
	const [nameRu, setNameRu] = useState('');
	const [nameUz, setNameUz] = useState('');
	const [location, setLocation] = useState('');
	const [time, setTime] = useState('');
	const [itemEdit, setItemEdit] = useState('');
	const trash = (id) => {
		setFilterData(filterData.filter((item) => item.id !== id));
	};
	// for (let i = 0; i < 100; i++) {
	//     data.push({
	//       key: i,
	//       name: `Edward King ${i}`,
	//       age: 32,
	//       address: `London, Park Lane no. ${i}`,
	//     });
	//   }

	useEffect(() => {
		if (searchValue) {
			setFilterData(
				buyurtmalarData.filter((item) => item.flial.toLowerCase().includes(searchValue.toLowerCase()))
			);
		} else {
			setFilterData(buyurtmalarData);
		}
	}, [searchValue]);

	useEffect(() => {
		setFilterData((prev) => [
			...prev,
			{
				id: prev.length + 1,
				...drawerFlialData,
			},
		]);
	}, [drawerFlialData]);
	// const columns = [
	// 	{
	// 		title: 'Filial nomi(UZ)',
	// 		dataIndex: 'flial',
	// 		key: 'flial',
	// 		width: 300,
	// 	},
	// 	{
	// 		title: 'Filial nomi(RU)',
	// 		dataIndex: 'flial',
	// 		key: 'flial',
	// 		width: 300,
	// 	},
	// 	{
	// 		title: "Mo'ljal",
	// 		dataIndex: 'location',
	// 		key: 'location',
	// 	},
	// 	{
	// 		title: 'Ish vaqti',
	// 		dataIndex: 'time',
	// 		key: 'time',
	// 	},
	// 	{
	// 		title: 'Action',
	// 		dataIndex: 'action',
	// 		key: 'action',
	// 		render: (_, record) => (
	// 			<span className="d-flex align-items-center gap-3">
	// 				<button
	// 					onClick={() => {
	// 						showModal(record);
	// 					}}
	// 					type="button"
	// 					className="btn btn-success"
	// 				>
	// 					<svg
	// 						xmlns="http://www.w3.org/2000/svg"
	// 						width="20"
	// 						height="20"
	// 						fill="currentColor"
	// 						class="bi bi-pencil-square"
	// 						viewBox="0 0 16 16"
	// 					>
	// 						<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
	// 						<path
	// 							fill-rule="evenodd"
	// 							d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
	// 						/>
	// 					</svg>
	// 				</button>
	// 				<button
	// 					onClick={() => {
	// 						trash(record.id);
	// 					}}
	// 					type="button"
	// 					className="btn btn-danger"
	// 				>
	// 					<svg
	// 						xmlns="http://www.w3.org/2000/svg"
	// 						width="20"
	// 						height="20"
	// 						fill="currentColor"
	// 						class="bi bi-trash3-fill"
	// 						viewBox="0 0 16 16"
	// 					>
	// 						<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
	// 					</svg>
	// 				</button>
	// 			</span>
	// 		),
	// 	},
	// ];

	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = (record) => {
		console.log(record);
		setItemEdit(record);
		setNameUz(record.flial);
		setLocation(record.location);
		setTime(record.time);
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setFilterData(
			filterData.map((item) =>
				item.id == itemEdit.id ? { ...item, flial: nameUz, location: location, time: time } : item
			)
		);
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			{/* <Table
    columns={columns}
    dataSource={filterData}
    pagination={{
      pageSize: 50,
    }}
    scroll={{
      y: 500,
    }}
  /> */}
			<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<input
					onChange={(e) => {
						setNameUz(e.target.value);
					}}
					className="form-control mb-3 p-1 rounded w-75"
					placeholder={nameUz}
				/>
				<input
					onChange={(e) => {
						setNameRu(e.target.value);
					}}
					className="form-control mb-3 p-1 rounded w-75"
					placeholder={nameUz}
				/>
				<input
					onChange={(e) => {
						setLocation(e.target.value);
					}}
					className="form-control mb-3 p-1 rounded w-75"
					placeholder={location}
				/>
				<input
					onChange={(e) => {
						setTime(e.target.value);
					}}
					className="form-control mb-3 p-1 rounded w-75"
					placeholder={time}
				/>
			</Modal>

			<Table>
				<Thead>
					<Tr>
						<Th><p className='p-3 bg-white'>Filial nomi(Uz)</p></Th>
						<Th>Filial nomi(Ru)</Th>
						<Th>Mo'ljal</Th>
						<Th>Ish vaqti</Th>
						<Th>Action</Th>
					</Tr>
				</Thead>
				<Tbody>
					{filterData.map((item) => (
						<Tr>
							<Td><p className='p-3 bg-white'>{item.flial}</p></Td>
							<Td><p>{item.flial}</p> </Td>
							<Td><p>{item.location}</p> </Td>
							<Td><p>{item.time}</p> </Td>
							<Td>
								<span className="d-flex align-items-center gap-3">
									<button onClick={() => {showModal(item)}} type="button" className="btn btn-success">
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
									<button onClick={() => {trash(item.id)}} type="button" className="btn btn-danger">
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
		</>
	);
};

export default Filial;

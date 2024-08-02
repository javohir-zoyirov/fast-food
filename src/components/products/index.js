import './style.css';
import React, { useContext, useEffect, useState } from 'react';
import { Modal } from 'antd';
import ProductData from '../data/productData';
import { ApiContext } from '../../context';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Products = () => {
	const [filterData, setFilterData] = useState(ProductData);
	const [product, setProduct] = useState('');
	const [image, setImage] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [extra, setExtra] = useState('');
  const [itemEdit, setItemEdit] = useState('');
	const { searchValue, drawerData } = useContext(ApiContext);

	const trash = (id) => {
		setFilterData(filterData.filter((item) => item.id !== id));
	};

	useEffect(() => {
		if (drawerData) {
			setFilterData((prev) => [
				...prev,
				{
					id: prev.length + 1,
					...drawerData,
				},
			]);
		}
	}, [drawerData]);

	const productData = searchValue
		? filterData.filter((item) => item.productName.toLowerCase().includes(searchValue.toLowerCase()))
		: filterData;

	const columns = [
		{
			title: 'Mahsulot',
			dataIndex: 'productName',
			key: 'productName',
			width: 200,
			render: (text, record) => (
				<span className="d-flex align-items-center gap-3">
					<img
						style={{ width: '50px', height: '50px' }}
						className="rounded"
						src={record.productImage}
						alt={record.productName}
					/>
					{record.productName}
				</span>
			),
		},
		{
			title: 'Kategoriya',
			dataIndex: 'categoryId',
			key: 'categoryId',
			width: 150,
		},
		{
			title: 'Narxi',
			dataIndex: 'price',
			key: 'price',
			render: (text) => <p className="p-0 m-0">{text} so'm</p>,
		},
		{
			title: "Qo'shimcha",
			dataIndex: 'extra',
			key: 'extra',
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, record) => (
				<span className="d-flex align-items-center gap-3">
					<button onClick={() => {showModal(record)}} type="button" className="btn btn-success">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
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
					<button onClick={() => trash(record?.id)} type="button" className="btn btn-danger">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							className="bi bi-trash3-fill"
							viewBox="0 0 16 16"
						>
							<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
						</svg>
					</button>
				</span>
			),
		},
	];

	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = (record) => {
    console.log(record);
    setItemEdit(record);
    setProduct(record.productName);
    setImage(record.productImage);
    setCategory(record.categoryId);
    setPrice(record.price);
    setExtra(record.extra);
		setIsModalOpen(true);
	};
	const handleOk = () => {
    setFilterData(filterData.map(item => item.id === itemEdit.id ? {...item, productName: product, productImage:image, categoryId: category, price: price, extra: extra} : item))
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};  
console.log(filterData,"FilterDAta");

	return (
		<>
			<Modal title="Malumot o'zgartirish" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<input onChange={(e) => {setProduct(e.target.value)}} className="form-control w-75 rounded p-1 mb-3" placeholder="Mahsulot nomi" />
        <input onChange={(e) => {setImage(e.target.value)}} className="form-control w-75 rounded p-1 mb-3" placeholder="Rasm linki" />
				<input onChange={(e) => {setCategory(e.target.value)}} className="form-control w-75 rounded p-1 mb-3" type="number" placeholder="Kategoriya nomeri" />
				<input onChange={(e) => {setPrice(e.target.value)}} className="form-control w-75 rounded p-1 mb-3" placeholder="Narxi" />
				<input onChange={(e) => {setExtra(e.target.value)}} className="form-control w-75 rounded p-1 mb-3" placeholder="Qo'shimcha" />
			</Modal>
      <Table>
				<Thead>
					<Tr>
						<Th><p className='p-3 bg-white'>Mahsulot</p></Th>
						<Th>Kategoriya</Th>
						<Th>Narxi</Th>
            <Th>Qo'shimcha</Th>
						<Th>Action</Th>
					</Tr>
				</Thead>
				<Tbody>
					{filterData.map((item) => (
						<Tr>
							<Td><p className='p-3 bg-white'>{item.productName
              }</p></Td>
							<Td><p>{item.categoryId}</p> </Td>
							<Td><p>{item.price} so'm</p> </Td>
							<Td><p>{item.extra}</p> </Td>
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

export default Products;

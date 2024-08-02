import { Drawer } from 'antd';
import './style.css';
import { useContext, useState } from 'react';
import { ApiContext } from '../../context';
import CategoriesData from '../data/categoryData';
import ProductData from '../data/productData';
export const HeaderWeb = () => {
	const [active, setActive] = useState(1);
	const {
		setStatus,
		clickValue,
		setSearchValue,
		setDrawerData,
		setDrawerCategoryData,
		setDrawerFlialData,
		setCustomers,
		setDrawerOrderData,
    setCardStyle,
	} = useContext(ApiContext);
	const [open, setOpen] = useState(false);
	const [add, setAdd] = useState(false);
	const [active2, setActive2] = useState(0);
  const [active3, setActive3] = useState(2);
	const [zakasData, setZakasData] = useState([]);
	const [count, setCount] = useState(1);
	const [filterData, setFilterData] = useState([...ProductData]);
	const [productName, setProductName] = useState('');
	const [category2, setCategory2] = useState('');
	const [price, setPrice] = useState('');
	const [extra, setExtra] = useState('');
	const [productImage, setProductImage] = useState('');
	const [categoryName, setCategoryName] = useState('');
	const [categoryNameRu, setCategoryNameRu] = useState('');
	const [mainCategory, setMainCategory] = useState('');
	const [flial, setFlialNomiUz] = useState('');
	const [time, setTime] = useState('');
	const [location, setLocation] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [nameOrder, setNameOrder] = useState('');
	const [phoneOrder, setPhoneOrder] = useState('');
	const [locationOrder, setLocationOrder] = useState('');
	const [operatorOrder, setOperatorsOrder] = useState('');
	const [timeOrder, setTimeOrder] = useState('');
	const [flialOrder, setFlialOrder] = useState('');
	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};
	const [openProduct, setOpenProduct] = useState(false);
	const showDrawerProduct = () => {
		setOpenProduct(true);
	};
	const onCloseProduct = () => {
		setOpenProduct(false);
	};
	const category = (id) => {
		setFilterData(ProductData.filter((item) => item.categoryId === id));
		setActive2(id);
	};
	const plus = (item) => {
    console.log(item,"item");

		setZakasData((prev) => ({
			...prev,
			[item.id]: {
				productName: item.productName,
				count: prev[item.id] ? prev[item.id].count + 1 : 1,
				productsPrice: item.price,
			},
		}));
	};

	const minus = (item) => {
		setZakasData((prev) => ({
			...prev,
			[item.id]: {
				productName: item.productName,
				count: prev[item.id] ? prev[item.id].count - 1 : 1,
				productsPrice: item.price,
			},
		}));
    setCount(item[item.id]?.count)
	};

	const saqlash = () => {
		setDrawerData({
			productName: productName,
			category: category2,
			price: price,
			extra: extra,
			productImage,
			productImage,
		});
	};


	const saqlashCategory = () => {
		setDrawerCategoryData({
			mainCategory: mainCategory,
			categoryName: categoryName,
			categoryNameRu: categoryNameRu,
		});
	};
	const saqlashFlial = () => {
		setDrawerFlialData({
			flial: flial,
			time: time,
			location: location,
		});
	};
	const saqlashCustomers = () => {
		setCustomers({
			name: name,
			phone: phone,
		});
	};

	const saqlashOrders = () => {
		setDrawerOrderData((prev) => [
			...prev,
			{
				id: prev.length + 1,
        productsPrice:sum,
				name: nameOrder,
				phone: phoneOrder,
				location: locationOrder,
				operator: operatorOrder,
				time: timeOrder,
				flial: flialOrder,
				status: 'new',
			},
		]);
	};
	console.log('zakaz data', zakasData);
	let sum = 0;
	Object.values(zakasData).forEach((item) => (sum += item.productsPrice * item.count));

	if (clickValue === 'buyurtmalar') {
		return (
			<div className="w-100 d-flex justify-content-between align-items-center">
				<div
					onClick={showDrawer}
					style={{ cursor: 'pointer' }}
					className="d-flex align-items-center gap-2 border-end px-3"
				>
					<button
						type="button"
						style={{ backgroundColor: '#20D472' }}
						className="btn text-white rounded-pill text-center d-flex align-items-center justify-content-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							class="bi bi-plus-lg"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
							/>
						</svg>
					</button>
					<p className="p-0 m-0">Yangi buyurtma qo'shish</p>
				</div>
				<div className="d-flex gap-3 align-items-center filterbutton rounded-pill px-2">
					<button
						style={active === 1 ? { backgroundColor: 'white' } : {}}
						onClick={() => {
							setActive(1);
							setStatus('new');
						}}
						className="btn btn-outline rounded-pill px-4 border-0"
						type="button"
					>
						Yangi
					</button>
					<button
						style={active === 2 ? { backgroundColor: 'white' } : {}}
						onClick={() => {
							setActive(2);
							setStatus('accepted');
						}}
						className="btn btn-outline rounded-pill px-4 border-0"
						type="button"
					>
						Qabul qilingan
					</button>
					<button
						style={active === 3 ? { backgroundColor: 'white' } : {}}
						onClick={() => {
							setActive(3);
							setStatus('delivired');
						}}
						className="btn btn-outline rounded-pill px-4 border-0"
						type="button"
					>
						Jo'natilgan
					</button>
					<button
						style={active === 4 ? { backgroundColor: 'white' } : {}}
						onClick={() => {
							setActive(4);
							setStatus('closed');
						}}
						className="btn btn-outline rounded-pill px-4 border-0"
						type="button"
					>
						Yopilgan
					</button>
				</div>
				<div className="d-flex align-items-center gap-3 px-3 filterbutton rounded-pill border-start">
					<button
						style={active3 === 1 ? { backgroundColor: 'white' } : {}}
						onClick={() => {
							setActive3(1);setCardStyle('horizontal')
						}}
						type="button"
						className="btn btn-outline rounded-pill border-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-columns-gap"
							viewBox="0 0 16 16"
						>
							<path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" />
						</svg>
					</button>
					<button
						style={active3 === 2 ? { backgroundColor: 'white' } : {}}
						onClick={() => {
							setActive3(2);setCardStyle('vertical')
						}}
						type="button"
						className="btn btn-outline rounded-pill border-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-columns"
							viewBox="0 0 16 16"
						>
							<path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm8.5 0v8H15V2zm0 9v3H15v-3zm-1-9H1v3h6.5zM1 14h6.5V6H1z" />
						</svg>
					</button>
				</div>
				<Drawer title="Yangi buyurtma qo'shish" width={1000} onClose={onClose} open={open}>
					<div className="row">
						<div className="col-lg-6">
							<h5>Yangi buyurtma qo'shish</h5>
							<div className="d-flex align-items-center justify-content-center filterbutton px-2 rounded">
								{CategoriesData.map((item) => (
									<button
										onClick={() => {
											category(item?.id);
										}}
										style={active2 === item.id ? { backgroundColor: 'white' } : {}}
										className="btn btn-outline px-3 rounded border-0"
										type="button"
									>
										{item?.categoryName}
									</button>
								))}
							</div>
							<div className="row">
								{filterData?.map((item) => (
									<div key={item?.id} className="col-lg-6">
										<div className="product-item mt-3 border p-2 rounded">
											<img
												style={{ height: '200px' }}
												src={item?.productImage}
												alt={item.productName}
												className="product-image w-100 rounded"
											/>
											<div className="product-info">
												<p className="product-name p-0 m-0">{item?.productName}</p>
												<p className="product-extra">{item?.extra}</p>
											</div>
											<div className="d-flex align-items-center justify-content-between product-actions">
												<p className="product-price p-0 m-0">{item?.price} UZS</p>

												<div className="d-flex align-items-center justify-content-between gap-3 quantity-controls">
													<button
														onClick={() => {
															minus(item);
														}}
														type="button"
														className="btn"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															class="bi bi-dash-lg"
															viewBox="0 0 16 16"
														>
															<path
																fill-rule="evenodd"
																d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
															/>
														</svg>
													</button>
													<p className="p-0 m-0">{count}</p>
													<button
														onClick={() => {
															plus(item);
														}}
														type="button"
														className="btn"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															class="bi bi-plus-lg"
															viewBox="0 0 16 16"
														>
															<path
																fill-rule="evenodd"
																d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
															/>
														</svg>
													</button>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="col-lg-6">
							<div className="d-flex align-items-center justify-content-between mb-3">
								<h5 className="p-0 m-0">Buyurtmalar ro'yxati</h5>
                  <button onClick={() => setZakasData([])} style={{ backgroundColor: '#EDEFF3' }} className="btn border-0 text-dark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </button>
							</div>

							{Object.values(zakasData)?.map((item) => (
								<div className="d-flex align-items-center justify-content-between border p-1 rounded m-2">
									<p className="p-0 m-0">{item?.productName}</p>
									<p className="p-0 m-0">
										{item?.count} * {item?.productsPrice} UZS
									</p>
								</div>
							))}
							<div style={{ backgroundColor: '#EDEFF3' }} className="p-2 rounded text-center">
								<p className="p-0 m-0">Umumiy summa :</p>
								<p>
									<span className="fw-bold p-0 m-0 fs-5">{sum}</span> <span>so'm</span>
								</p>
							</div>
							<div className="mt-4">
								<p className="p-0 m-0">Mijoz ismi :</p>
								<input
									value={nameOrder}
									onChange={(e) => {
										setNameOrder(e.target.value);
									}}
									placeholder="Mijoz ismi"
									className="form-control"
								/>
							</div>
							<div className="mt-4">
								<p className="p-0 m-0">Telefon raqam :</p>
								<input
									value={phoneOrder}
									onChange={(e) => {
										setPhoneOrder(e.target.value);
									}}
									placeholder="Mijoz telefon raqami"
									type="number"
									className="form-control"
								/>
							</div>
							<div className="mt-4">
								<p className="p-0 m-0">Manzil :</p>
								<input
									value={locationOrder}
									onChange={(e) => {
										setLocationOrder(e.target.value);
									}}
									placeholder="Mijoz manzili"
									className="form-control"
								/>
							</div>
							<div className="mt-4">
								<p className="p-0 m-0">Operator :</p>
								<input
									value={operatorOrder}
									onChange={(e) => {
										setOperatorsOrder(e.target.value);
									}}
									placeholder="Operator ismi"
									className="form-control"
								/>
							</div>
							<div className="mt-4">
								<p className="p-0 m-0">Time :</p>
								<input
									value={timeOrder}
									onChange={(e) => {
										setTimeOrder(e.target.value);
									}}
									placeholder="Vaqti ..."
									className="form-control"
								/>
							</div>
							<div className="mt-4">
								<p className="p-0 m-0">Flial :</p>
								<input
									value={flialOrder}
									onChange={(e) => {
										setFlialOrder(e.target.value);
									}}
									placeholder="Flial nomi"
									className="form-control"
								/>
							</div>
							<button
								onClick={() => {
									saqlashOrders();
                  onClose();
                  
								}}
								style={{ backgroundColor: '#20D472' }}
								className="btn mt-3 text-white fw-bold"
							>
								Saqlash
							</button>
						</div>
					</div>
				</Drawer>
			</div>
		);
	} else if (clickValue === 'mahsulotlar') {
		return (
			<div>
				<div style={{ cursor: 'pointer' }} className="d-flex align-items-center gap-2 border-end px-3">
					<button
						onClick={showDrawerProduct}
						type="button"
						style={{ backgroundColor: '#20D472' }}
						className="btn text-white rounded-pill text-center d-flex align-items-center justify-content-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							class="bi bi-plus-lg"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
							/>
						</svg>
					</button>
					<p className="p-0 m-0">Yangi mahsulot qo'shish</p>
					<div className="px-3">
						<input
							onChange={(e) => {
								setSearchValue(e.target.value);
							}}
							style={{ height: '40px', width: '350px', backgroundColor: '#EDEFF3' }}
							placeholder="Qidirish..."
							className=" rounded-pill border-0 px-3"
						/>
					</div>
				</div>

				<Drawer title="Yangi mahsulot qo'shish" width={500} onClose={onCloseProduct} open={openProduct}>
					<div>
						<p>Mahsulot nomi:</p>
						<input
							value={productName}
							onChange={(e) => {
								setProductName(e.target.value);
							}}
							className="form-control"
						/>
					</div>

					<div class="dropdown my-3">
						<button
							class="btn border dropdown-toggle w-100"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Kategoriya
						</button>
						<ul class="dropdown-menu w-100 border-0 ">
							{CategoriesData.map((item) => (
								<li
									onClick={() => {
										setCategory2(item.categoryName);
									}}
									className="p-0 m-0"
								>
									<a class="dropdown-item" href="#">
										{item.categoryName}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<p>Mahsulot narxi:</p>
						<input
							value={price}
							onChange={(e) => {
								setPrice(e.target.value);
							}}
							className="form-control"
						/>
					</div>

					<div className="my-3">
						<p>Qo'shimcha malumot:</p>
						<input
							value={extra}
							onChange={(e) => {
								setExtra(e.target.value);
							}}
							className="form-control"
						/>
					</div>
					<div className="my-3">
						<p>Mahsulot rasmini linki:</p>
						<input
							value={productImage}
							onChange={(e) => {
								setProductImage(e.target.value);
							}}
							className="form-control"
						/>
					</div>

					<button
						onClick={() => {
							saqlash();
						}}
						style={{ backgroundColor: '#20D472' }}
						className="btn border-0 fw-bold text-white"
					>
						Saqlash
					</button>
				</Drawer>
			</div>
		);
	} else if (clickValue === 'kategoriyalar') {
		return (
			<>
				<div style={{ cursor: 'pointer' }} className="d-flex align-items-center gap-2 border-end px-3">
					<button
						type="button"
						style={{ backgroundColor: '#20D472' }}
						className="btn text-white rounded-pill text-center d-flex align-items-center justify-content-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							class="bi bi-plus-lg"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
							/>
						</svg>
					</button>
					<p className="p-0 m-0">Yangi kategoriya qo'shish</p>
				</div>

				<div className="px-3">
					<input
						onChange={(e) => {
							setSearchValue(e.target.value);
						}}
						style={{ height: '40px', width: '350px', backgroundColor: '#EDEFF3' }}
						placeholder="Qidirish..."
						className="rounded-pill border-0 px-3"
					/>
				</div>

				<Drawer title="Yangi kategoriya qo'shish" width={500} onClose={onCloseProduct} open={openProduct}>
					<div>
						<p>Kategoriya nomiUz:</p>
						<input
							value={categoryName}
							onChange={(e) => {
								setCategoryName(e.target.value);
							}}
							className="form-control"
						/>
					</div>

					<div className="my-3">
						<p>Kategoriya nomiRu:</p>
						<input
							value={categoryNameRu}
							onChange={(e) => {
								setCategoryNameRu(e.target.value);
							}}
							className="form-control"
						/>
					</div>
					<div class="dropend my-3">
						<button
							class="btn btn-secondary dropdown-toggle"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Bosh kategoriyaga biriktirish
						</button>
						<ul class="dropdown-menu w-25">
							{CategoriesData?.map((item) => (
								<li
									onClick={() => {
										setMainCategory(item.categoryName);
									}}
									className="m-0 p-0"
								>
									<a class="dropdown-item" href="#">
										{item?.categoryName}
									</a>
								</li>
							))}
						</ul>
					</div>
					<button
						onClick={() => {
							saqlashCategory();
						}}
						style={{ backgroundColor: '#20D472' }}
						className="btn border-0 fw-bold text-white"
					>
						Saqlash
					</button>
				</Drawer>
			</>
		);
	} else if (clickValue === 'filiallar') {
		return (
			<>
				<div style={{ cursor: 'pointer' }} className="d-flex align-items-center gap-2 border-end px-3">
					<button
						onClick={showDrawerProduct}
						type="button"
						style={{ backgroundColor: '#20D472' }}
						className="btn text-white rounded-pill text-center d-flex align-items-center justify-content-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							class="bi bi-plus-lg"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
							/>
						</svg>
					</button>
					<p className="p-0 m-0">Yangi filial qo'shish</p>
				</div>

				<div className="px-3">
					<input
						onChange={(e) => {
							setSearchValue(e.target.value);
						}}
						style={{ height: '40px', width: '350px', backgroundColor: '#EDEFF3' }}
						placeholder="Qidirish..."
						className=" rounded-pill border-0 px-3"
					/>
				</div>

				<Drawer title="Yangi flial qo'shish" width={500} onClose={onCloseProduct} open={openProduct}>
					<div>
						<p>Filial nomiUz:</p>
						<input
							value={flial}
							onChange={(e) => {
								setFlialNomiUz(e.target.value);
							}}
							className="form-control"
						/>
					</div>

					<div className="my-3">
						<p>Filial nomiRu:</p>
						<input
							value={categoryNameRu}
							onChange={(e) => {
								setCategoryNameRu(e.target.value);
							}}
							className="form-control"
						/>
					</div>
					<div className="my-3">
						<p>Ish vaqti:</p>
						<input
							value={time}
							onChange={(e) => {
								setTime(e.target.value);
							}}
							className="form-control"
						/>
					</div>
					<div className="my-3">
						<p>Filial mo'ljal:</p>
						<input
							value={location}
							onChange={(e) => {
								setLocation(e.target.value);
							}}
							className="form-control"
						/>
					</div>

					<button
						onClick={() => {
							saqlashFlial();
						}}
						style={{ backgroundColor: '#20D472' }}
						className="btn border-0 fw-bold text-white"
					>
						Saqlash
					</button>
				</Drawer>
			</>
		);
	} else if (clickValue === 'mijozlar') {
		return (
			<>
				<div style={{ cursor: 'pointer' }} className="d-flex align-items-center gap-2 border-end px-3">
					<button
						onClick={showDrawerProduct}
						type="button"
						style={{ backgroundColor: '#20D472' }}
						className="btn text-white rounded-pill text-center d-flex align-items-center justify-content-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							class="bi bi-plus-lg"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
							/>
						</svg>
					</button>
					<p className="p-0 m-0">Yangi mijoz qo'shish</p>
				</div>

				<div className="px-3">
					<input
						onChange={(e) => {
							setSearchValue(e.target.value);
						}}
						style={{ height: '40px', width: '350px', backgroundColor: '#EDEFF3' }}
						placeholder="Qidirish..."
						className=" rounded-pill border-0 px-3"
					/>
				</div>

				<Drawer title="Yangi flial qo'shish" width={500} onClose={onCloseProduct} open={openProduct}>
					<div>
						<p>Mijoz ismi:</p>
						<input
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							className="form-control"
						/>
					</div>

					<div className="my-3">
						<p>Telefon raqam:</p>
						<input
							value={phone}
							onChange={(e) => {
								setPhone(e.target.value);
							}}
							className="form-control"
						/>
					</div>
					<div className="my-3">
						<p>Buyurtmalar soni:</p>
						<input className="form-control" />
					</div>
					<button
						onClick={() => {
							saqlashCustomers();
						}}
						style={{ backgroundColor: '#20D472' }}
						className="btn border-0 fw-bold text-white"
					>
						Saqlash
					</button>
				</Drawer>
			</>
		);
	}
};

import './style.css';
import { buyurtmalarData } from '../data/orderData';
import { ApiContext } from '../../context';
import { useContext, useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
export const Cards = () => {
	const { status, drawerOrderData, cardStyle } = useContext(ApiContext);
	const [filteredData, setFilteredData] = useState(buyurtmalarData);
	console.log('drawer data ', drawerOrderData);

	useEffect(() => {
		setFilteredData((prev) => [...prev, ...drawerOrderData]);
	}, [drawerOrderData]);

	useEffect(() => {
		if (status) {
			setFilteredData(buyurtmalarData.filter((res) => res.status === status));
		} else {
			setFilteredData(buyurtmalarData);
		}
	}, [status, buyurtmalarData]);

	const deleteCard = (id) => {
		setFilteredData(filteredData.filter((item) => item.id !== id));
	};

	console.log('filter data', filteredData);   
	return (
		<div
			style={{ overflow: 'scroll', maxHeight: '650px', backgroundColor: '#EDEFF3', height: '100vh' }}
			className="p-4"
		>
			{/* {cardStyle === 'horizontal' ? {
                
                } : 
                 
            
            } */}

			{cardStyle === 'horizontal' ? (
				filteredData
					?.filter((res) => (status === '' ? res.status === status : [res]))
					.map((item) => (
						<div>
							<div
								style={{ boxShadow: '0px 6px 8px 0px rgba(34, 60, 80, 0.2)' }}
								className="d-flex mb-4 rounded align-items-center justify-content-between border p-3 bg-white position-relative"
							>
								<div className="px-5">
									<div className="d-flex align-items-center gap-3">
										<p
											style={{ backgroundColor: '#20D472' }}
											className="text-white fw-bold px-3 py-1 rounded-4 m-0"
										>
											{item?.id}
										</p>
										<span
											style={{ backgroundColor: '#EDEFF3' }}
											className="text-secondary p-2 rounded-pill"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												class="bi bi-bookmark"
												viewBox="0 0 16 16"
											>
												<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
											</svg>
										</span>
									</div>
									<p
										style={{ fontSize: '14px' }}
										className="d-flex align-items-center gap-3 mt-5 p-0"
									>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												class="bi bi-clock"
												viewBox="0 0 16 16"
											>
												<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
												<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
											</svg>
										</span>
										{item?.time}
									</p>
								</div>

								<div className="border-start px-5 ">
									<div className="d-flex align-items-center justify-content-between gap-3">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											class="bi bi-person"
											viewBox="0 0 16 16"
										>
											<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
										</svg>
										<p style={{ fontSize: '20px' }} className="p-0 m-0">
											{item?.name}{' '}
										</p>
									</div>
									<p
										style={{ fontSize: '14px' }}
										className="d-flex align-items-center gap-3 mt-4 p-0"
									>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												class="bi bi-telephone"
												viewBox="0 0 16 16"
											>
												<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
											</svg>
										</span>
										{item?.phone}
									</p>
								</div>

								<div className="border-start px-5 ">
									<div className="d-flex align-items-center justify-content-center gap-2">
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-bookmark"
												viewBox="0 0 16 16"
											>
												<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
											</svg>
										</span>
										<span className="p-0 m-0">{item?.productsPrice} UZS</span>
									</div>
									<div className="d-flex align-items-center justify-content-center gap-2">
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-truck"
												viewBox="0 0 16 16"
											>
												<path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
											</svg>
										</span>
										<p className="p-0 m-0">5000 UZS</p>
									</div>

									<div className="mt-4">
										<p className="p-0 m-0">Umumiy summa :</p>
										<p>
											<span className="fw-bold">{item?.productsPrice + 5000} </span> UZS
										</p>
									</div>
								</div>

								<div className="px-5 border-start">
									<div>
										<p className="p-0 m-0">Operator:</p>
										<p className="fw-bold"> {item?.operator}</p>
									</div>
									<div>
										<p className="p-0 m-0">Filial:</p>
										<p className="p-0 m-0 fw-bold">{item?.flial}</p>
									</div>
								</div>

								<div
									style={{ top: '25%', right: '-2.5%' }}
									className="d-flex align-items-center flex-column gap-2 position-absolute"
								>
									<button
										onClick={() => {
											deleteCard(item.id);
										}}
										style={{ border: '4px solid #EDEFF3' }}
										type="button"
										className="btn checkButton rounded-pill bg-white"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											class="bi bi-x-lg"
											viewBox="0 0 16 16"
										>
											<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
										</svg>
									</button>
									<button
										style={{ border: '4px solid #EDEFF3' }}
										type="button"
										className="btn checkButton rounded-pill bg-white"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											fill="currentColor"
											class="bi bi-check-lg"
											viewBox="0 0 16 16"
										>
											<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					))
			) : (
				<div>
					<div className="row">
						{filteredData
							.filter((res) => (status === '' ? res.status === status : [res]))
							.map((item) => (
								<div className="col-lg-4 col-md-6 col-12">
									<div className="card p-2 bg-white py-3 mb-3">
										<div className="d-flex align-items-center justify-content-between border-bottom pb-4">
											<div className="d-flex align-items-center gap-2">
												<p
													style={{ backgroundColor: '#20D472' }}
													className="text-white fw-bold px-3 py-1 rounded-4 m-0"
												>
													{item?.id}
												</p>
												<span
													style={{ backgroundColor: '#EDEFF3' }}
													className="text-secondary p-2 rounded-pill"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="20"
														height="20"
														fill="currentColor"
														class="bi bi-bookmark"
														viewBox="0 0 16 16"
													>
														<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
													</svg>
												</span>
											</div>
											<div className="d-flex align-items-center gap-2">
												<span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="20"
														height="20"
														fill="currentColor"
														class="bi bi-clock"
														viewBox="0 0 16 16"
													>
														<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
														<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
													</svg>
												</span>
												{item?.time}
											</div>
										</div>
										<div className="d-flex align-items-center gap-3 py-2">
											<UserOutlined />
											<div>
												<p className="p-0 m-0 fw-bold">{item?.name}</p>
												<p className="p-0 m-0">{item?.phone}</p>
											</div>
										</div>
										<div className="border-bottom pb-4 pt-2">
											<p className="p-0 m-0">Umumiy summa</p>
											<p className="fs-5 p-0 m-0">
												<span className="fw-bold">{item?.productsPrice + 5000}</span> UZS
											</p>
										</div>
										<div className="d-flex align-items-center justify-content-between py-3">
											<div>
												<p className="p-0 m-0">Operator:</p>
												<p className="p-0 m-0 fw-bold">{item?.operator}</p>
											</div>
											<button
												onClick={() => {
													deleteCard(item.id);
												}}
												style={{ border: '4px solid #EDEFF3' }}
												type="button"
												className="btn checkButton rounded-pill bg-white"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="20"
													fill="currentColor"
													class="bi bi-x-lg"
													viewBox="0 0 16 16"
												>
													<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
												</svg>
											</button>
										</div>

										<div className="d-flex align-items-center justify-content-between">
											<div>
												<p className="p-0 m-0">Filial:</p>
												<p className="p-0 m-0 fw-bold">{item?.flial}</p>
											</div>
											<button
												style={{ border: '4px solid #EDEFF3' }}
												type="button"
												className="btn checkButton rounded-pill bg-white"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="20"
													fill="currentColor"
													class="bi bi-check-lg"
													viewBox="0 0 16 16"
												>
													<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
												</svg>
											</button>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			)}
		</div>
	);
};

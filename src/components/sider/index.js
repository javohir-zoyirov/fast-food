import { useContext } from 'react';
import './style.css';
import { ApiContext } from '../../context';
import { Menu } from 'antd';
import {
	CheckCircleOutlined,
	EnvironmentOutlined,
	InboxOutlined,
	MenuOutlined,
	UsergroupDeleteOutlined,
} from '@ant-design/icons';
export const SiderWeb = () => {
	const { setClickValue, collapsed } = useContext(ApiContext);
	return (
		<div style={{ backgroundColor: 'white', height: '100%' }} className="p-2">
			<div className="d-flex align-items-center gap-2 flex-wrap">
				<div className="p-1">
					<img
						style={{ width: '50px', height: '50px' }}
						className=" rounded-pill"
						src="https://media.post.rvohealth.io/wp-content/uploads/2020/09/low-carb-fast-foods-1200x628-facebook-1200x628.jpg"
					/>
				</div>
				{collapsed ===false ? <div>
					<p className="fw-bold p-0 m-0">Fast Food</p>
				</div> : <></>}
			</div>

			<Menu
				mode="inline"
				defaultSelectedKeys={['1']}
				items={[
					{
						key: '2',
						icon: <CheckCircleOutlined />,
						label: 'Buyurtmalar',
						onClick: () => {
							setClickValue('buyurtmalar');
						},
					},
					{
						key: '3',
						icon: <InboxOutlined />,
						label: 'Mahsulotlar',
						onClick: () => {
							setClickValue('mahsulotlar');
						},
					},
					{
						key: '4',
						icon: <MenuOutlined />,
						label: 'Kategoriyalar',
						onClick: () => {
							setClickValue('kategoriyalar');
						},
					},
					{
						key: '5',
						icon: <EnvironmentOutlined />,
						label: 'Filiallar',
						onClick: () => {
							setClickValue('filiallar');
						},
					},
					{
						key: '6',
						icon: <UsergroupDeleteOutlined />,
						label: 'Mijozlar',
						onClick: () => {
							setClickValue('mijozlar');
						},
					},
				]}
			/>
		</div>
	);
};

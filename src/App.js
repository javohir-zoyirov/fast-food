import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApiContext } from './context';
import Layout1 from './components/layout';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';
import CategoriesData from './components/data/categoryData';

function App() {
	const [clickValue, setClickValue] = useState('buyurtmalar');
	const [status, setStatus] = useState('new');
	const [searchValue, setSearchValue] = useState('');
	const [drawerData, setDrawerData] = useState([]);
	const [drawerCategoryData, setDrawerCategoryData] = useState([]);
	const [drawerFlialData, setDrawerFlialData] = useState([]);
	const [drawerCustomers, setCustomers] = useState([]);
  const [drawerOrderData, setDrawerOrderData] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [cardStyle, setCardStyle] = useState('vertical');
	const apiContextValue = {
		setClickValue,
		clickValue,
		setStatus,
		status,
		setSearchValue,
		searchValue,
		setDrawerData,
		drawerData,
		drawerCategoryData,
		setDrawerCategoryData,
		setDrawerFlialData,
		drawerFlialData,
		setCustomers,
		drawerCustomers,
    drawerOrderData,
    setDrawerOrderData,
    setCollapsed,
    collapsed,
    cardStyle,
    setCardStyle,
    CategoriesData
	};
	console.log(cardStyle, '<---------- setCardStyle');
	return (
		<div className="App">
			<ApiContext.Provider value={apiContextValue}>
				<Router>
					<Routes>
						<Route path="/" element={<Layout1 />} />
					</Routes>
				</Router>
			</ApiContext.Provider>
		</div>
	);
}

export default App;

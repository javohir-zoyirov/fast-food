import { createContext } from 'react';
import CategoriesData from '../components/data/categoryData';

export const ApiContext = createContext({
	clickValue: '',
	setClickValue: (clickValue) => {},
	status: '',
	setStatus: () => {},
	searchValue: '',
	setSearchValue: () => {},
	drawerData: [],
	setDrawerData: (drawerData) => {},
	drawerCategoryData: [],
	setDrawerCategoryData: (drawerCategoryData) => {},
	drawerFlialData: [],
	setDrawerFlialData: () => {},
	drawerCustomers: [],
	setCustomers: (drawerCustomers) => {},
	drawerOrderData: [],
	setDrawerOrderData: (drawerOrderData) => {},
    collapsed: false,
    setCollapsed:(collapsed) => {},
    cardStyle:"",
    setCardStyle:(cardStyle) => {},
    CategoriesData:[]
});

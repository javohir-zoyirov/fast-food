import { useContext } from "react";
import { Cards } from "../orders";
import "./style.css";
import { ApiContext } from "../../context";
import Products from "../products";
import Category from "../category";
import Filial from "../filial";
import Customers from "../customers";

export const HomePage = () => {
  const { clickValue } = useContext(ApiContext);

  let componentToRender;
  if (clickValue === "buyurtmalar") {
    componentToRender = <Cards />;
  } else if (clickValue === "mahsulotlar") {
    componentToRender = <Products />;
  } else if (clickValue === "kategoriyalar") {
    componentToRender = <Category />;
  }
  else if (clickValue === "filiallar") {
    componentToRender = <Filial />;
  } 
  else if (clickValue === "mijozlar") {
    componentToRender = <Customers />;
  } else {
    componentToRender = <></>;
  }

  return <>{componentToRender}</>;
};

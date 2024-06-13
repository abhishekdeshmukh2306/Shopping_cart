import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AddItem from "./components/AddItem";

function App() {
  const initialProducts = [
    {
      price: 99999,
      name: "IPhone 15 Max",
      quantity: 0,
    },
    {
      price: 10000,
      name: "Oneplus 9R",
      quantity: 0,
    }
  ];

  const [productList, setProductList] = useState(initialProducts);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    const newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    const newProductList = [...productList];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
    }
    setProductList(newProductList);
  };

  const resetQuantities = () => {
    console.log("Reset btn is clicked");
    const newProductList = productList.map(product => ({
      ...product,
      quantity: 0
    }));
    setProductList(newProductList);
  };

  const removeItem = (index) => {
    const newProductList = [...productList];
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(getTotalAmount(newProductList));
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  const getTotalAmount = () => {
    return productList.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  return (
    <>
      <Navbar />
      <main className='container mb-5'>
        <AddItem addItem={addItem} />
        <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem} />
      </main>
      <Footer totalAmount={getTotalAmount()} resetQuantities={resetQuantities} />
    </>
  );
}

export default App;

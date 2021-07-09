import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import { ProductComponent } from './ProductComponent';

export const ProductListing = () => {

   const products = useSelector(state => state);
   const dispatch = useDispatch();

   const fetchProducts = async () => {
     const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
      dispatch(setProducts(res.data))
   };

   useEffect(() => {
      fetchProducts();
      
   }, [])


    console.log(products)
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

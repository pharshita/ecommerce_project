import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Category.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, CategoriesProductList, CategoryList, ProdutList } from '../../Redux/Action/CategoryAction';

function Category() {
    const [selectCategory, setSelectCategory] = React.useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const categoriesList = useSelector((state) => state.CategoryReducer.categorylist);
    const productList = useSelector((state) => state.CategoryReducer.productList);
    const categoriesProduct = useSelector((state) => state.CategoryReducer.productCategoryList);
    useEffect(() => {
        dispatch(CategoryList())
        dispatch(ProdutList())
    }, [])

    const handleChange = (event) => {
        setSelectCategory(event.target.value);
        dispatch(CategoriesProductList(event))
    };

    const handlecarts = (id) => {
       dispatch(AddToCart(id,navigate))
    }
    return (
        <div className='container'>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 420 }}>
                <InputLabel >Category List</InputLabel>
                <Select
                    style={{ textAlign: 'left' }}
                    value={selectCategory}
                    onChange={(event) => handleChange(event)} >
                    <MenuItem value="">default value</MenuItem>
                    {
                        categoriesList.length>0 && categoriesList.map((item, index) => (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <div className='row cardStyle'>
                {
                    categoriesProduct.length !== 0 && categoriesProduct.length>0
                        ? categoriesProduct.map((product, index) => {
                            return (
                                <>
                                    <div className='col-sm-3 card'>
                                        <div className='p-3'>
                                            {product.fileDetails && product.fileDetails.path ? (
                                                <img src={`http://localhost:5000/${product.fileDetails.path}`} width='150px' alt='Product' />
                                            ) : (
                                                <span>No Image</span>
                                            )}
                                            <h2>{product.name}</h2>
                                            <p>{product.company}</p>
                                            <h5>&#x20B9; {product.price}</h5>
                                            <button className='btn btn-dark' onClick={() => handlecarts(product._id.toString())}>Add To Cart</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                        :
                        productList.length > 0 && productList.map((product, index) => {
                            return (
                                <>
                                    <div className='col-sm-2 card'>
                                        <div className='p-3'>
                                            {product.fileDetails && product.fileDetails.path ? (
                                                <img src={`http://localhost:5000/${product.fileDetails.path}`} width='150px' alt='Product' />
                                            ) : (
                                                <span>No Image</span>
                                            )}
                                            <h2>{product.name}</h2>
                                            <p>{product.company}</p>
                                            <h5>&#x20B9; {product.price}</h5>
                                            <button className='btn btn-dark' onClick={() => handlecarts(product._id.toString())}>Add To Cart</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Category

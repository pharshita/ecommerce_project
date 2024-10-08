import React, { useEffect, useState } from 'react'
import Navbar from '../../containers/Navbar'
import './productList.css'
import swal from '@sweetalert/with-react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteProductID, ProdutList, UpdateProductID } from '../../Redux/Action/CategoryAction'

export default function ProductList() {
  const [id, setId] = useState("")
  const [file, setFile] = useState(null)
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productCategory, setProductCategory] = useState("")
  const [companyName, setCompanyName] = useState("")
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.CategoryReducer.productList);

  useEffect(() => {
    dispatch(ProdutList())
  }, [])

  const UpdateProduct = (data) => {
    setId(data._id)
    setProductName(data.name)
    setProductPrice(data.price)
    setProductCategory(data.category)
    setCompanyName(data.company)
  }

  const DeleteProduct = (id) => {
    swal({
      title: "Are you Sure ?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(DeleteProductID(id))
        }
      })
  }
  const updateData = () => {
    const payload = {
      fileDetails: "dsf",
      name: productName,
      price: productPrice,
      category: productCategory,
      userId: JSON.parse(localStorage.getItem('auth')).id,
      company: companyName,
    }
    dispatch(UpdateProductID(id , payload))
   
  }
  return (
    <div>
      <div style={{ justifyContent: "center", display: 'flex' }}>
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>name</th>
              <th>price</th>
              <th>category</th>
              <th>company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              productList.length > 0 && productList.map((product, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.company}</td>
                    <td>
                      <button onClick={() => DeleteProduct(product._id)}>Delete</button>
                      <button onClick={() => UpdateProduct(product)} data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                    </td>
                  </tr>
                )
              })
            }
            <tr></tr>
          </tbody>
        </table>
      </div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Product Update</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <label >Add Produnct</label><br />
                <input type="text" placeholder="produnct name..." value={productName} onChange={(e) => setProductName(e.target.value)} /><br />
                <input type="text" placeholder="price..." value={productPrice} onChange={(e) => setProductPrice(e.target.value)} /><br />
                <input type="text" placeholder="category..." value={productCategory} onChange={(e) => setProductCategory(e.target.value)} /><br />
                <input type="text" placeholder="company name..." value={companyName} onChange={(e) => setCompanyName(e.target.value)} /><br />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateData}>Update changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

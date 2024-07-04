import React, {useEffect, useContext} from "react";
import {NavLink, useParams, useNavigate} from "react-router-dom";
import {deleteProductById, getProductById} from "../services/ApiService";
import {ProductContext} from "../context/ProductContext";

export default function ProductDetail() {

  const { id } = useParams();
  const { product, updateProduct, removeProductById } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {

    async function fetchData() {
      try {
        const product = await getProductById(id);
        updateProduct(product);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, []);

  async function deleteProduct() {
    try {
      await deleteProductById(id);
      removeProductById(id);
      navigate("/");
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  return(
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Show Breach</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink active to={`/${id}`}>{id}</NavLink>
          </li>
        </ol>
      </nav>
      <h4 className="text-center mb-5 mt-5"> Breached Item: {id}</h4>
      <table className="table">
        <tbody>
        <tr>
          <th scope="row">Name</th>
          <td>{product.name}</td>
        </tr>
        <tr>
          <th scope="row">Email</th>
          <td>{product.email}</td>
        </tr>
        <tr>
          <th scope="row">Credit Card</th>
          <td>{product.creditcard}</td>
        </tr>
        </tbody>
      </table>
      <div>
        <div className="row">
          <div className="col-6">
            <NavLink className="btn btn-light" to={`/${id}/edit`}>Edit</NavLink>
          </div>
          <div className="col-6 text-end">
            <button onClick={deleteProduct} className="btn btn-danger pull-right">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );

}
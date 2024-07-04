import React, {useContext, useRef} from "react";
import {createProduct} from "../services/ApiService";
import {useNavigate} from'react-router-dom';
import {ProductContext} from "../context/ProductContext";

export default function CreateProductForm() {

  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const creditcardRef = useRef();

  const {addProduct} = useContext(ProductContext);

  async function add(target) {
    target.preventDefault();

    try {

      const newProduct = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        creditcard: creditcardRef.current.value
      };

      console.log(newProduct)

      const response = await createProduct(newProduct);
      console.log(response)
      addProduct(response);
      navigate(`/${response.id}`);

    } catch (error) {
      console.error('Error', error);
    }
  }

  return(
    <form>
      <div className="mb-3 mt-5">
        <label htmlFor="name" className="form-label">Name</label>
        <input ref={nameRef} type="text" className="form-control" id="title" aria-describedby="titleHelp" />
        <div id="titleHelp" className="form-text">Input the name here.</div>
      </div>
      <div className="mb-3">

        <div className="row">
          <div className="col-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input ref={emailRef} type="text" className="form-control" id="price" />
          </div>
          <div className="col-6">
            <label htmlFor="creditcard" className="form-label">Credit Card</label>
            <input ref={creditcardRef} type="number" className="form-control" id="quantity" />
          </div>
        </div>

      </div>
      <button onClick={add} type="submit" className="btn btn-primary">Add</button>
    </form>
  );

}
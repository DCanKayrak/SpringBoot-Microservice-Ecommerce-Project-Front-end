import React, { Component, useEffect, useState } from 'react'

export default function TestTest(props) {
    const url = "http://localhost:8080/api/v1/products";
    const [products,setProducts] = useState([]);

    useEffect( ()=> {
        fetch(url)
        .then(response => response.json())
        .then(product => {
            setProducts(product)
            console.log(product)
        })
    },[])

    return (
      <div>{products}</div>
    )
  }

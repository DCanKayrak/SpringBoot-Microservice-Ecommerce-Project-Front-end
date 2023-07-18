import { useState,useEffect, React } from 'react';

export default function Orders() {

    const [orders,setOrders] = useState([]);

    const getOrders = () => {
        let url = "/api/v1/orders/user/" + localStorage.getItem("currentUser")

        fetch(url)
        .then(res => res.json())
        .then(result => setOrders(result))
    }

    useEffect(() => {
        getOrders();
    },[])

  return (
    <div className='orders-container'>
      <h3 className='orders-header'>Orders</h3>
      {orders.map((order) => (
        <div className='cart-item'>
        <div className='cart-item-left'>
            <img src={order.product.imageUrl} alt='cart-img' height="200px"></img>
        </div>
        <div className='cart-item-mid'>
            <div className='cart-item-mid-header'>
                <p className='text-black'>{order.product.name} - {order.quantity}</p>
            </div>
            <div className='cart-item-mid-pricing'>
                <p className='text-black pricing-text'>
                    <span className='price-text'>{order.product.price} TL</span><div className='badge bg-sale'>-%{order.product.discountRate}</div>
                </p>
                <p className='pricing-after-discount'>
                    {order.product.afterDiscount} TL
                </p>
            </div>
        </div>
        <div className='cart-item-right'>
            <p className='text-order-date'>{order.date}</p>
            <p className='text-quantity'>{order.quantity}</p>
            <button className='refund-button'>Kargo Takibi</button>
            <button className='refund-button'>İade Et</button>
        </div>
    </div>
      ))}
    </div>
  )
}

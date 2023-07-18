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
    <div>{orders.map((order) => (<p className='text-black'>{order.product.name} ---- {order.quantity}</p>))}</div>
  )
}

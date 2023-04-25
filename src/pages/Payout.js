import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import api from '../components/Api'


export default function Payout() {
    const [earnings, setEarnings] = useState({});
    const [orders, setOrders] = useState();

    useEffect(() => {
        api.get('/payouts/')
            .then((response) => {
                setEarnings(response.data);
            }).catch(error => console.log(error));

        api.get('/orders/')
            .then((response) => {
                setOrders(response.data);
            }).catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Sidebar activeLink='/payouts/' />
            <div className='content'>
                <div className='page-name'>
                    <h1>Payouts</h1>
                </div>

                <div className='my-5'>
                    <div className='card-group'>
                        <div className='card bg-dark border-white h-100'>
                            <div className='card-body p-5'>
                                <p>Balance</p>
                                <h1 className='card-title'>${earnings.balance}</h1>
                            </div>
                        </div>
                        <div className='card bg-dark border-white h-100'>
                            <div className='card-body p-5'>
                                <p>Past 7 days</p>
                                <h1 className='card-title'>${earnings.past_7_days_earnings}</h1>
                            </div>
                        </div>
                        <div className='card bg-dark border-white h-100'>
                            <div className='card-body p-5'>
                                <p>Past 30 days</p>
                                <h1 className='card-title'>${earnings.past_30_days_earnings}</h1>
                            </div>
                        </div>
                        <div className='card bg-dark border-white h-100'>
                            <div className='card-body p-5'>
                                <p>Total Earnings</p>
                                <h1 className='card-title'>${earnings.total_earnings}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-5'>
                    <h3>Orders</h3>
                    <hr />
                    {orders && orders.map(order => (
                        <div className='border-secondary border p-3 my-2 rounded-2'>
                            <div className='d-flex justify-content-between'>
                                <p>{order.email}</p>
                                <p>${order.price}</p>
                                <p>{new Date(order.updated_at).toLocaleDateString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
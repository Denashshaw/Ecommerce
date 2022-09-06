import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/CartSlice';
import { getData } from '../features/ProductSlice';


function Dashboard() {
    
    
    const products = useSelector(state => state?.products?.data);
    const carts = useSelector(state => state?.carts?.data);
    const dispatch = useDispatch();
    // console.log(carts);
    
    useEffect(() => {
        dispatch(getData());
    }, [dispatch])


  return (
    <div className='row d-flex m-2'>
    {products?.map((res, i) => (
        <div key={i} className='card-deck col-md-3'>
            <div className="card mb-3" >
            <b className="card-header">{res.category.toUpperCase()}</b>

                <div className="card-body text-center">
                    <img src={res.image} className='img-responsive' alt={''} style={{'maxWidth': '265px'}} height={'200px'} />
                    <p className="card-title text-center">{res.title.substr(0,10)}</p>
                    
                    {carts?.some(val => val.id === res.id) ? 
                    (<button onClick={() => dispatch(removeFromCart(res.id))} className='btn btn-danger text-left'>Remove from Cart</button> ) : 
                    (<button className='btn btn-primary text-left' onClick={() => dispatch(addToCart(res))}>Add to Cart</button>) }
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Dashboard
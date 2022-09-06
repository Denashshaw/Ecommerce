import React from 'react';
import {Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeQty } from '../features/CartSlice';

export default function Popup({show, handleClose}) {

    const carts = useSelector(state=> state.carts.data)
    const dispatch = useDispatch();
    
  return (
    <>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Items in Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row' style={{display: 'flex', justifyContent: 'space-evenly'}}>
            {carts.length === 0 && <h6 className='text-center text-danger'>No items in cart! Purchase any product</h6>}
            {carts.map((cart, i) => (
            <div className='col-md-4 my-2' key={i}>
                <div className='rounded text-center' style={{background: '#c77878'}}>
                <img src={cart.image} alt='alternative text' width={'100'} height={'100'} className='p-2 rounded-circle' />
                <h3>{cart.category}</h3>
                <p>{cart.title.substr(1, 20)}</p>

                    <div className='d-flex col-3 offset-3 p-2'>
                    <button className='btn btn-danger btn-xs' onClick={() => dispatch(changeQty({id :cart.id,qty: cart.qty - 1}))}>-</button>
                        <h4 className='px-2'>{cart.qty}</h4>
                    <button className='btn btn-success btn-xs' onClick={() => dispatch(changeQty({id :cart.id,qty: cart.qty + 1}))}>+</button>
                    </div>
                </div>
            </div>
            ))}

            <div className='text-center'>
                {carts.length > 0 && <h2>Total: {carts.reduce((acc, cur) => acc+cur.price * cur.qty, 0).toFixed(2)}</h2>}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {carts.length > 0 &&
          <Button variant="success" onClick={handleClose}>
            Confirm
          </Button>}
        </Modal.Footer>
      </Modal>
    </>
  );
}
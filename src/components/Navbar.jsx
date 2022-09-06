// import Popup from './Popup'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Popup from './Popup';

function Navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const carts = useSelector(state => state.carts.data)

  return (
    <>
    <nav>
        <ul style={{display: 'flex'}}>
            <li className='active'>Home</li>
            <li>About</li>
            <li>Contact</li>
            {/* <li>Login</li>
            <li>Logout</li> */}
      
            <li onClick={handleShow} style={{marginLeft:"auto"}}><i className="fa fa-cart-plus" aria-hidden="true"></i> 
            Cart <sup className='p-1 rounded-circle' style={{background: 'red'}}>{carts.length}</sup></li>
        </ul>
    </nav>

    <Popup show={show} handleClose={handleClose} />
    </>
  )
}

export default Navbar;
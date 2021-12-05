import React, { useContext } from 'react'
//import SuccessIcon from "../../img/success.png";
//<img alt="" className="img-circle" src={SuccessIcon} width="50px" height="50px" />

import OrderContext from '../../Context/OrderContext'; // Importing Context API

const OrderConfirmation = () => {

    const { checkoutDetails } = useContext(OrderContext); // Context API
    console.log(checkoutDetails)


    return (
        <>
            <div>
                <br /><br />
                <h4>Your order has been successfully placed!</h4>
                <br /><br />
            </div>
        </>
    )
}
export default OrderConfirmation
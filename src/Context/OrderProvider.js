import React, { useState } from 'react';
import OrderContext from './OrderContext'; 


function OrderProvider() {

  // State to store checkout details
  // This is used to prevent losing unsaved changes when you switch the component.
  const [checkoutDetails, setCheckoutDetails] = useState();
  const [proceedNext, setProceedNext] = useState(true); // Enable or Disable 'Next' button within each component

  return(
      <OrderContext.Provider 
        value={{ checkoutDetails, 
                 setCheckoutDetails, 
                 setProceedNext,
                 proceedNext
               }}
      >

      </OrderContext.Provider>
  )
}
export default OrderProvider
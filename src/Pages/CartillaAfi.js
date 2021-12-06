import React, { useState } from 'react';

import MultiStepForm from "../Components/CartAfi/Common/MultiStepForm/MultiStepForm"
import { ProvCartilla, LocCartilla, ModCartilla, ReviewOrder, OrderConfirmation } from "../Components/CartAfi/Index";
import OrderContext from '../Context/OrderContext'; 

// List of components to switch inside the multi-form container
const componentsList = [
  { headerText: 'Provincia', headerIcon: 'fa fa-address-card', component: <ProvCartilla /> },
  { headerText: 'Localidad (Multiple)', headerIcon: 'fa fa-credit-card', component: <LocCartilla /> },
  { headerText: 'Modalidad (Multiple)', headerIcon: 'fa fa-credit-card', component: <ModCartilla /> },
  { headerText: 'Especialidad (Multiple)', headerIcon: 'fa fa-clock-o', component: <ReviewOrder /> },
  { headerText: 'Prestadores', headerIcon: 'fa fa-check', component: <OrderConfirmation /> },
];

// Supplying initial state values to use with different components.
const InitialValues = {
  //shippingData: { firstName: "", lastName: "", address1: "", address2: "", city: "", state: "", postalcode: "", country: "" },
  provinciaData: {  },
  localidadData: {  },
  modalidadData: {  },
  PaymentsData: { cardName: "", cardNumber: "", expiryDate: "", cvvNumber: "" },
  productsData: [
    { id: "pr1", productName: "Product 1" },
    { id: "pr2", productName: "Product 2" },
    { id: "pr3", productName: "Product 3" },
    { id: "pr4", productName: "Product 4" }
  ]
}

function CartillaAfi() {

  // State to store checkout details
  // This is used to prevent losing unsaved changes when you switch the component.
  const [checkoutDetails, setCheckoutDetails] = useState(InitialValues);
  const [proceedNext, setProceedNext] = useState(true); // Enable or Disable 'Next' button within each component

  return (
    <>
     <div className="wrap-appointment d-md-flex ftco-animated fadeInUp ">
      <div className="col-md-12 contact-wrap w-60 p-md-5 p-4">   
      <OrderContext.Provider value={{ checkoutDetails, setCheckoutDetails, setProceedNext }}>
        <MultiStepForm 
          list={componentsList}
          displayProgressBar={true} // Set this to false if you don't want to display the progress bar.
          proceedNext={proceedNext} // Optional props. To Enable/Disable 'Next' button from child component.
        />
      </OrderContext.Provider>
      </div>  
     </div>
    </>
  );
}

export default CartillaAfi;
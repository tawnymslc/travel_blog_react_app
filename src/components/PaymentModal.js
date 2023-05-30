import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentModal = () => {

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  const cardElementOptions = {
    style: {
      base: {
        iconColor: '#4d48d9',
        color: '#000',
        fontWeight: '500',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        '::placeholder': {
          color: '#4d48d9',
        },
      },
      invalid: {
        iconColor: '	#880808',
        color: '	#880808',
      },
    },
  };

  const domainPaymentSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (error) {
      setPaymentError(error.message);
    } else {
      // Payment method created successfully, handle the payment
      // You can call your server-side endpoint to process the payment
      console.log(paymentMethod);
    }
  };

  return (
    <>
    <Button
      outline
      onClick={() => setLoginModalOpen(true)}
      style={{ color: 'white', backgroundColor: 'rgb(77, 72, 242)' }}
      >
        Credit Card
    </Button>
    <Modal isOpen={loginModalOpen}>
      <ModalHeader toggle={() => setLoginModalOpen(false)}>
          Payment
      </ModalHeader>
      <ModalBody>
        <form onSubmit={domainPaymentSubmit}>
          <CardElement options={cardElementOptions}/>
          {paymentError && <div>{paymentError}</div>}
        </form>
      </ModalBody>
      <ModalFooter>
        <Button style={{ backgroundColor: 'rgb(77, 72, 242)' }}>
          Pay
        </Button>
        <Button color="secondary" onClick={() => setLoginModalOpen(false)}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
    </>
  );
};

export default PaymentModal;
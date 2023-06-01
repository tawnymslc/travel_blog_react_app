import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from "axios";

const PaymentModal = ({price}) => {

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [success, setSuccess ] = useState(false)
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

    if (!error) {
      const {id} = paymentMethod;

      axios.post("http://localhost:4243/payment", {
        amount: price * 100,
        id
      })
      .then(response => {
        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      })
      .catch(error => {
        console.log("Error", error);
      })
    } else {
      setPaymentError(error.message);
      console.log(error.message);
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
      {!success ?
        <Modal isOpen={loginModalOpen}>
          <ModalHeader style={{color: 'white', backgroundColor: 'rgb(77, 72, 242)' }} toggle={() => setLoginModalOpen(false)}>
              Payment
          </ModalHeader>
          <ModalBody>
              <CardElement options={cardElementOptions}/>
              {paymentError && <div>{paymentError}</div>}
          </ModalBody>
          <ModalFooter>
            <form onSubmit={domainPaymentSubmit}>
            <Button type='submit' style={{ backgroundColor: 'rgb(77, 72, 242)' }}>
              Pay
            </Button>
            <Button color="secondary" onClick={() => setLoginModalOpen(false)}>
              Cancel
            </Button>
            </form>
          </ModalFooter>
        </Modal>
          : 
        <Modal isOpen={loginModalOpen}>
          <ModalHeader toggle={() => setLoginModalOpen(false)}>
            Payment Successful!
          </ModalHeader>
          <ModalBody>
            You have completed your purchase. 
          </ModalBody>
        </Modal>
      }
    </>
  );
};

export default PaymentModal;
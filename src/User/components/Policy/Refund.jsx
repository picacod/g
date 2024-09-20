import React, { useEffect } from 'react';
import Footer from '../../common/Footer';
import { Link } from 'react-router-dom';


function Refund() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <>
    <div style={{
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      maxWidth: '100%',
      padding: '20px',
      backgroundColor: '#0000',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
      <div style={{
        width: '100%',
        backgroundColor: 'rgba(55, 55, 55, 0.3)', // Slight transparency for better blur effect
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)', // Blur effect
        WebkitBackdropFilter: 'blur(10px)', // Safari support
        color:'#b78846'
      }}
        className='container fs-5'
      >
        <Link to={'/'}><p>Back</p></Link>
        <h1 style={{ fontSize: '2em', marginBottom: '20px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>Refund Policy</h1>
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>Refund and Cancellation Policy</h2>

        <p style={{ fontSize: '1em', lineHeight: '1.6',  }}>
          At Ancient Shadows, we strive to ensure you are satisfied with your purchase. However, please
          review our refund and cancellation policy carefully before making any transactions.
        </p>

        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',}}>1. Digital Products</h2>
          <p>
            Since all purchases on Ancient Shadows are for digital content and in-game items, refunds are
            generally not provided once a transaction has been completed and the content has been
            delivered.
          </p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',}}>2. Exceptions</h2>
          <p>
            Refunds may be considered under the following circumstances:
          </p>
          <p>● The content purchased is faulty or not as described.</p>
          <p>● Technical issues prevent the content from being delivered or accessed.</p>
          <p>In these cases, you must contact our support team within 7 days of the purchase to request a
            refund. Refund decisions are at the sole discretion of Ancient Shadows.</p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px',background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>3. Cancellation of Orders</h2>
          <p>If you wish to cancel an order for digital content, please contact us immediately before the
            content is delivered or used. Once the digital content has been accessed, cancellations are not
            permitted.</p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',}}>3. Cancellation of Orders</h2>
          <p>If you wish to cancel an order for digital content, please contact us immediately before the
            content is delivered or used. Once the digital content has been accessed, cancellations are not
            permitted.</p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>4. Processing of Refunds</h2>
          <p>Approved refunds will be processed within 7-10 business days and will be credited to the
            original payment method. We are not responsible for any delays caused by the payment
            processor or your financial institution.</p>
        </div>
        <h2 style={{ fontSize: '1.5em', marginTop: '30px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',}}>Contact Us</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
          For assistance with refunds or cancellations, please email us at
          <br />
          <a href="mailto:ancientsshadowsgame@gmail.com" style={{ color: '#007bff' }}>ancientsshadowsgame@gmail.com</a>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Refund;

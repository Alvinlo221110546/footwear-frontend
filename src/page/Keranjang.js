import React, { useState, useEffect } from 'react';
import { Modal, Button, Card, ListGroup, Badge, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { FaTrash, FaShoppingCart, FaCheck } from 'react-icons/fa';
import './Css/Keranjang.css'; 

function Keranjang({ show, onHide }) {
  const [cartItems, setCartItems] = useState([]);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://footwear-backend-985529487455.asia-southeast2.run.app/api/keranjang', {
          params: { timestamp: new Date().getTime() },
          withCredentials: false
        });
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const cleanedPrice = item.pricedescription.replace(/[^\d,]/g, '');
      const price = parseFloat(cleanedPrice.replace(',', '.'));
      if (!isNaN(price)) {
        total += price * item.quantity;
      }
    });
    return total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  const handleRemoveFromCart = async (item) => {
    try {
      if (item.quantity > 1) {
        await axios.put(`https://footwear-backend-985529487455.asia-southeast2.run.app/api/keranjang/${item.itemId}`, 
          { quantity: item.quantity - 1 }, 
          { withCredentials: false }
        );
      } else {
        await axios.delete(`https://footwear-backend-985529487455.asia-southeast2.run.app/api/keranjang/${item.itemId}`, {
          withCredentials: false,
        });
      }
      const response = await axios.get('https://footwear-backend-985529487455.asia-southeast2.run.app/api/keranjang', {
        withCredentials: false,
        params: { timestamp: new Date().getTime() }
      });
      setCartItems(response.data);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleCheckout = async () => {
    setIsProcessingPayment(true);
  
    const greeting = 'Halo, saya ingin melakukan pemesanan berikut:\n\n';
    const itemList = cartItems.map(item => 
      `• ${item.title} x${item.quantity} - ${item.pricedescription}`
    ).join('\n');
  
    const totalText = `\n\nTotal Belanja: ${calculateTotalPrice()}`;
    const closing = `\n\nTerima kasih!`;
  
    const whatsappMessage = `${greeting}${itemList}${totalText}${closing}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/6281396961133?text=${encodedMessage}`;
  
    window.open(whatsappURL, '_blank');
  
    await new Promise(resolve => setTimeout(resolve, 1500));
  
    try {
      await axios.delete('https://footwear-backend-985529487455.asia-southeast2.run.app/api/keranjang', {
        withCredentials: false,
      });
  
      setCheckoutSuccess(true);
  
      setTimeout(() => {
        setIsProcessingPayment(false);
        setCheckoutSuccess(false);
        onHide();
      }, 2000);
  
    } catch (error) {
      console.error('Error handling checkout:', error);
      setIsProcessingPayment(false);
    }
  };
  

  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="lg"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton className=" border-bottom  border-2">
        <Modal.Title className="w-100 text-center">
          <h2 className="mb-0">
            <FaShoppingCart className="me-2" />
            Keranjang Belanja
          </h2>
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="p-4">
        {cartItems.length > 0 ? (
          <>
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.itemId} className="border-0 py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <Badge pill bg="secondary" className="me-3">
                        {item.quantity}
                      </Badge>
                      <div>
                        <h5 className="mb-1">{item.title}</h5>
                        <small className="text-muted">{item.pricedescription}</small>
                      </div>
                    </div>
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      onClick={() => handleRemoveFromCart(item)}
                      title="Hapus dari keranjang"
                    >
                      <FaTrash />
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            
            <Card className="mt-4 border shadow-sm">
              <Card.Body className="py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">Total Belanja:</h4>
                  <h4 className="mb-0 text-primary fw-bold">
                    {calculateTotalPrice()}
                  </h4>
                </div>
              </Card.Body>
            </Card>
          </>
        ) : checkoutSuccess ? (
          <div className="text-center py-5">
            <div className="checkout-success-icon mb-4">
              <FaCheck />
            </div>
            <h4 className="text-success">Pembayaran Berhasil!</h4>
            <p className="text-muted">Terima kasih telah berbelanja dengan kami</p>
          </div>
        ) : (
          <div className="text-center py-5">
            <FaShoppingCart size={48} className="text-muted mb-3" />
            <h4>Keranjang Kosong</h4>
            <p className="text-muted">Tambahkan produk ke keranjang Anda</p>
          </div>
        )}
      </Modal.Body>
      
      <Modal.Footer className="border-top-0">
        <Button variant="outline-secondary" onClick={onHide}>
          Lanjut Belanja
        </Button>
        
        {cartItems.length > 0 && !checkoutSuccess && (
          <Button 
            variant="primary" 
            onClick={handleCheckout}
            disabled={isProcessingPayment}
          >
            {isProcessingPayment ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                Memproses...
              </>
            ) : (
              "Checkout Sekarang"
            )}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default Keranjang;
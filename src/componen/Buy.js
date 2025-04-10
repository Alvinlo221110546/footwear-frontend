import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Buy() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPriceModal, setShowPriceModal] = useState(false);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowPriceModal(true);
  };

  const handlePriceModalClose = () => {
    setShowPriceModal(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      {filteredPria.map((product) => (
        <div key={product.id}>
          <Card>
            <div className='d-flex'>
              <Button style={{ margin: '5px' }} variant="dark" onClick={() => handleBuyNow(product)}>Buy Now</Button>

            </div>
          </Card>
        </div>
      ))}
      <Modal show={selectedProduct !== null} onHide={handlePriceModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Price</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <p>The price for {selectedProduct.title} is {selectedProduct.price}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePriceModalClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Buy;

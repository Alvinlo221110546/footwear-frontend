import React, { useState, useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import ScrollToTopButton from '../componen/ScrollToTopButton';
import { Card, Button, Modal, Spinner } from 'react-bootstrap';
import axios from "axios"
import Form from 'react-bootstrap/Form';
import Keranjang from './Keranjang';
import { FaShoppingBag, FaWhatsapp, FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';


function Product() {
    const handleNavLinkClick = (eventKey) => {
        const section = document.getElementById(eventKey);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const isLoggedIn = !!localStorage.getItem('user');
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [showKeranjang, setShowKeranjang] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isPaymentProcessed] = useState(false);
    const [priaData, setPriaData] = useState([]);
    const [wanitaData, setWanitaData] = useState([]);
    const [anakData, setAnakData] = useState([]);


    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleAddToCart = async (product) => {
        try {
            const { title, pricedescription, id } = product;
            const existingItem = cartItems.find((item) => item.id === id);

            if (existingItem) {
                const updatedCartItems = cartItems.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
                setCartItems(updatedCartItems);
            } else {
                const newItem = { id, title, pricedescription, quantity: 1 };
                setCartItems([...cartItems, newItem]);
            }

            await axios.post('https://footwear-backend-985529487455.asia-southeast2.run.app/api/keranjang', {
                title,
                pricedescription,
                itemId: id,
            }, {
                withCredentials: false
            });

            const response = await axios.get('https://footwear-backend-985529487455.asia-southeast2.run.app/api/keranjang', {
                params: { timestamp: new Date().getTime() },
                withCredentials: false
            });

            setCartItems(response.data);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Produk ditambahkan ke keranjang!',
                showConfirmButton: false,
                timer: 1500,
                toast: true,
                background: '#28a745',
                color: 'white'
            });

        } catch (error) {
            console.error('Error adding item to cart:', error.message, error.config);
            Swal.fire({
                icon: 'error',
                title: 'Gagal',
                text: 'Gagal menambahkan produk ke keranjang!',
            });
        }
    };
    const fetchData = async () => {
        try {
            const responsePria = await axios.get('https://footwear-backend-985529487455.asia-southeast2.run.app/api/pria');
            setPriaData(responsePria.data);

            const responseWanita = await axios.get('https://footwear-backend-985529487455.asia-southeast2.run.app/api/wanita');
            setWanitaData(responseWanita.data);

            const responseAnak = await axios.get('https://footwear-backend-985529487455.asia-southeast2.run.app/api/anak');
            setAnakData(responseAnak.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredPria = priaData.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredWanita = wanitaData.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredAnak = anakData.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleShowKeranjang = () => {
        setShowKeranjang(true);
    };

    const handleCloseKeranjang = () => {
        setShowKeranjang(false);
    };

    const handleRemoveItem = (item) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
    };

    const handleBuyNow = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    // const handlePayment = () => {
    //     setIsPaymentProcessed(true);
    //     setTimeout(() => {
    //         setIsPaymentProcessed(false);
    //         setShowModal(false);
    //     }, 1500);
    // };


    return (
        <Container fluid>
            <Row className="justify-content-center ">
                <Nav className="justify-content-center " >
                    <Nav.Item>
                        <Nav.Link eventKey="pria" onClick={() => handleNavLinkClick('pria')} style={{ color: 'black', fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold' }}>
                            Pria
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Wanita" onClick={() => handleNavLinkClick('Wanita')} style={{ color: 'black', fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold' }}>
                            Wanita
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Anak-anak" onClick={() => handleNavLinkClick('Anak-anak')} style={{ color: 'black', fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold' }}>
                            Anak-anak
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{ marginLeft: 'auto' }}>
                        <div style={{ marginTop: '8px' }} >
                            <Button variant='dark' style={{
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} onClick={handleShowKeranjang}><FaShoppingBag /></Button>
                            <Keranjang
                                cartItems={cartItems}
                                show={showKeranjang}
                                onHide={handleCloseKeranjang}
                                onRemoveItem={handleRemoveItem}
                            />
                        </div>
                    </Nav.Item>
                </Nav>
            </Row>
            <Row className="justify-content-center my-4">
                <Form style={{ width: '1330px' }}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        style={{ borderColor: 'black' }}
                    />
                </Form>
            </Row>
            <section id="pria" className='my-4'>
                <Container>
                    <h1>Section Pria</h1>
                    <p>Ini adalah bagian khusus untuk produk pria.</p>
                </Container>
                <Container className="mx-auto" >
                    <Row>
                        {filteredPria.map((product) => (
                            <Card key={product.id} style={{ width: '18rem', margin: '19px' }}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.pricedescription}</Card.Text>
                                    <div className='d-flex'>
                                        {isLoggedIn ? (
                                            <>
                                                <Button style={{ margin: '5px' }} variant="dark" onClick={() => handleBuyNow(product)}>Buy Now</Button>
                                                <Button style={{ margin: '5px' }} variant="success" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                            </>
                                        ) : (
                                            <p>Login untuk menambahkan ke keranjang atau beli sekarang.</p>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </Container>
            </section>
            <section id="Wanita" >
                <Container>
                    <h1>Section Wanita</h1>
                    <p>Ini adalah bagian khusus untuk produk Wanita.</p>
                </Container>
                <Container className="mx-auto" >
                    <Row>
                        {filteredWanita.map((product) => (
                            <Card key={product.id} style={{ width: '18rem', margin: '19px' }}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.pricedescription}</Card.Text>
                                    <div className='d-flex'>
                                        {isLoggedIn ? (
                                            <>
                                                <Button style={{ margin: '5px' }} variant="dark" onClick={() => handleBuyNow(product)}>Buy Now</Button>
                                                <Button style={{ margin: '5px' }} variant="success" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                            </>
                                        ) : (
                                            <p>Login untuk menambahkan ke keranjang atau beli sekarang.</p>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </Container>
            </section>
            <Row>
                <section id="Anak-anak">
                    <Container>
                        <h2>Section Anak-anak</h2>
                        <p>Ini adalah bagian khusus untuk produk Anak-anak.</p>
                    </Container>
                    <Container className="mx-auto" >
                        <Row>
                            {filteredAnak.map((product) => (
                                <Card key={product.id} style={{ width: '18rem', margin: '19px' }}>
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>{product.pricedescription}</Card.Text>
                                        <div className='d-flex'>
                                            {isLoggedIn ? (
                                                <>
                                                    <Button style={{ margin: '5px' }} variant="dark" onClick={() => handleBuyNow(product)}>Buy Now</Button>
                                                    <Button style={{ margin: '5px' }} variant="success" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                                </>
                                            ) : (
                                                <p>Login untuk menambahkan ke keranjang atau beli sekarang.</p>
                                            )}
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Row>
                    </Container>
                </section>
            </Row>
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                size="md"
                centered
                backdrop="static"
                className="product-modal"
            >
                <Modal.Header className="border-0 pb-0 mb-3">
                    <Modal.Title className="w-100 text-center">
                        <h4 className="mb-0 fw-bold">{selectedProduct?.title}</h4>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="pt-0 px-4">
                    <Card className="border shadow-sm">
                        <Card.Img
                            variant="top"
                            src={selectedProduct?.image}
                            className="p-3"
                            style={{
                                maxHeight: '300px',
                                objectFit: 'contain',
                            }}
                        />
                        <Card.Body className="text-center pt-0">
                            <div className="d-flex justify-content-between align-items-center border-top pt-3">
                                <h5 className="mb-0 text-muted">Harga:</h5>
                                <h4 className="mb-0 text-primary fw-bold">
                                    {selectedProduct?.pricedescription}
                                </h4>
                            </div>
                        </Card.Body>
                    </Card>
                </Modal.Body>

                <Modal.Footer className="border-0 justify-content-center">
                    {!isPaymentProcessed ? (
                        <div className="d-flex gap-3 w-100">
                            <Button
                                variant="outline-secondary"
                                onClick={handleCloseModal}
                                className="d-flex align-items-center justify-content-center"
                                style={{ flex: 1 }}
                            >
                                <FaTimes className="me-2" />
                                Tutup
                            </Button>
                            <Button
                                variant="success"
                                onClick={() => {
                                    const productName = selectedProduct?.title || "Produk";
                                    const productPrice = selectedProduct?.pricedescription || "Harga";
                                    const whatsappMessage = `Halo, saya ingin memesan:\n\n*${productName}*\nHarga: ${productPrice}\n\nApakah masih tersedia?`;
                                    window.open(`https://wa.me/6281396961133?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                                    handleCloseModal();
                                }}
                                className="d-flex align-items-center justify-content-center whatsapp-btn"
                                style={{ flex: 1 }}
                            >
                                <FaWhatsapp className="me-2" />
                                Beli Sekarang
                            </Button>

                        </div>
                    ) : (
                        <div className="text-center py-2 w-100">
                            <Spinner animation="border" variant="success" className="me-2" />
                            <span>Mengarahkan ke WhatsApp...</span>
                        </div>
                    )}
                </Modal.Footer>
            </Modal>
            <ScrollToTopButton />
        </Container>
    );
}

export default Product;

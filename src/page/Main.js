import Hero from "../componen/Hero";
import React from 'react';
import Cardproduk from "../componen/Cardproduk";
import produk1 from "./../aset/produk.jpeg"
import produk2 from "./../aset/produk (2).jpeg"
import produk3 from "./../aset/produk (3).jpeg"
import Producthero from "../componen/Produkhero";
import Promobanner from "../componen/Promobanner";
import Lokal from "../componen/Lokal";
import Terbaru from "../componen/Terbaru";
import Image from 'react-bootstrap/Image';
import pict from '../aset/main.jpg'
import pict2 from '../aset/main (2).jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import pict3 from '../aset/pict (3).jpg';
import { FaArrowRight } from 'react-icons/fa';

function Main() {
    return (
        <>
            <Hero />
            <div className="container my-4">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>WHAT'S HOT</h1>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <Cardproduk image={produk1} produk="AVRYN" deskripsi="Kenyamanan bagi semua dalam setiap langkah." />
                            </div>
                            <div className="col-4">
                                <Cardproduk image={produk2} produk="SUPERNOVA 3" deskripsi="Pengembangan energi dalam setiap langkah yang nyaman." />
                            </div>
                            <div className="col-4 ">
                                <Cardproduk image={produk3} produk="Taklukan Medan Trail" deskripsi="Tingkatkan motivasi dan kepercayaan dirimu di medan trail" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center my-4">Best Sales</h1>
            <Producthero />
            <div className="my-4 d-flex justify-content-center">
                <Nav.Link as={Link} to="/Product">
                    <Button variant="dark" size="lg">
                        Cek Product Kami <FaArrowRight />
                    </Button>
                </Nav.Link>
            </div>
            <Promobanner />
            <h1 className="text-center my-4">Produk Lokal</h1>
            <Lokal />
            <div className="my-4 d-flex justify-content-center">
                <Nav.Link as={Link} to="/Product">
                    <Button variant="dark" size="lg">
                        Cek Product Kami <FaArrowRight />
                    </Button>
                </Nav.Link>
            </div>
            <div className="container" style={{ width: '100%' }}>
                <div className="row my-4">
                    <div className="col">
                        <img style={{ objectFit: 'cover' }} src={pict3} alt="Gambar" />
                    </div>
                </div>
            </div>

            <h1 className="text-center my-4">Terbaru</h1>
            <Terbaru />
            <div className="my-4 d-flex justify-content-center">
                <Nav.Link as={Link} to="/Product">
                    <Button variant="dark" size="lg">
                        Cek Product Kami <FaArrowRight />
                    </Button>
                </Nav.Link>
            </div>
            <div class="container text-center">
                <div class="row mt-5">
                    <div class="col">
                        <Image src={pict} fluid />
                    </div>
                    <div class="col">
                        <Image src={pict2} fluid />
                    </div>
                </div>
            </div>
            <div className="px-3 mt-6">
                <h1 style={{ color: 'gray' }} className=" my-4">Toko Sepatu Online Termurah</h1>
                <p style={{ color: 'gray' }}>Footwear Haven adalah toko online sepatu terpercaya dan termurah di Indonesia yang menjual sepatu beragam jenis dan brand ke seluruh masyarakat Indonesia. Kami jual sepatu olahraga mulai dari sepatu bola, sepatu futsal, sepatu jogging, sepatu lari, sepatu sandal, aksesoris sepatu, kaos kaki, jersey bola, perlengkapan kiper, bola futsal, sepak bola, topi, tas olahraga, sepatu olahraga wanita, sepatu olahraga anak-anak, dan lain sebagainya. Seiring dengan berkembangnya teknologi dan banyaknya aktivitas di smartphone, Footwear Haven memudahkan siapapun untuk berbelanja secara online di website ini dengan cara dan pembayaran yang mudah dan dapat dilakukan kapanpun dan dimanapun. Footwear Haven kini hadir sebagai toko online sepatu termurah dan terpercaya dengan beragam pilihan produk yang tersedia. Ayo belanja di Footwear Haven untuk kebutuhan olahraga dan gaya hidup sehatmu.</p>
            </div>
        </>
    );
}
export default Main;
import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='mt-5' style={{ backgroundColor: '#f1f1f1', padding: '20px', textAlign: 'center' }}>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h1 style={{ textAlign: 'left' }} className='fw-80'>Footwear Haven</h1>
            <p style={{ textAlign: 'left' }} >Footwear Haven adalah toko online sepatu terpercaya dan termurah di Indonesia yang menjual sepatu beragam jenis dan brand ke seluruh masyarakat Indonesia.</p>
          </div>
          <div class="col">
            <div style={{ textAlign: 'center' }}>
              Temukan kami di
            </div>
            <div class="row ">
              <ul className='d-flex justify-content-center ' style={{ listStyle: 'none' }}>
                <li style={{ margin: '10px' }}>
                  <a style={{ color: 'black' }} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                  </a>
                </li>
                <li style={{ margin: '10px' }}>
                  <a style={{ color: 'black' }} href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={30} />
                  </a>
                </li>
                <li style={{ margin: '10px' }}>
                  <a style={{ color: 'black' }} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} />
                  </a>
                </li>
                <li style={{ margin: '10px' }}>
                  <a style={{ color: 'black' }} href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="col">
              <h5 className='text-center'>LAYANAN PELANGGAN</h5>
              <ul style={{ listStyle: 'none', paddingInlineStart: 0 }}>
                <li style={{ marginBottom: '10px' }}>FAQ</li>
                <li style={{ marginBottom: '10px' }}>Panduan Ukuran</li>
                <li style={{ marginBottom: '10px' }}>Pengembalian</li>
                <li style={{ marginBottom: '10px' }}>Hubungi Kami</li>
                <li style={{ marginBottom: '10px' }}>Peta Situs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-info text-center" style={{ marginTop: '80px' }}>
          <p>&copy; 2023 Footwear Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

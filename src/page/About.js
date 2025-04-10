import React from 'react';
import Image from 'react-bootstrap/Image';
import Gambar from '../aset/about.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pencipta from '../aset/pencipta.jpeg'
import Pencipta2 from '../aset/pencipta (2).jpeg'
import Pencipta3 from '../aset/pencipta (3).jpeg'


function About() {
    return (
        <>
            <Image src={Gambar} className='w-100 ' style={{ maxHeight: '650px' }} />
            <Container>
                <Row className="mb-4 mt-5">
                    <Col><h1>Dipimpin oleh Andrew dan Mark O'Keefe bersaudara, kami adalah seorang
                        Boutique dari komunitas brand agency dimana kamu dapat memperoleh kreativitas secara lansung</h1>
                    </Col>
                </Row>
                <Row className='mb-5' >
                    <Col className='text-justify'><p>dengan kebangaan yang ada pada diri kami ,penciptaan kami dan perhatian kami terhadap detail .kami juga memasukan banyak perawatan dengan hubungan client kami dan memberikan perlakuan baik kepada mereka .kami dengan bangga mengenai perkerjaan kami </p> </Col>
                    <Col className='text-justify'><p>kami flexibel , kreatif , responsive dan sangat beradaptasi . tidak ada agency yang secara tegas membungkam kami karena kami hanya fokus pada diri sendiri sehingga kami dapat berkembang hingga sekarang </p></Col>
                </Row>

                <Row>
                    <h1>Pendiri</h1>
                    <Col sm>
                        <Image src={Pencipta} roundedCircle style={{ width: '300px', height: '300px' }} />
                        <p className='mt-4'>Sejak kecil, Andrew sudah tertarik pada dunia seni dan desain. Ia sering memperhatikan detail-detail kecil pada sepatu yang ia pakai dan merenungkan bagaimana ia bisa menciptakan karya yang serupa atau bahkan lebih baik. Setelah lulus dari Universitas Seni Jakarta dengan gelar sarjana dalam desain produk, Rizky memulai karirnya sebagai pembuat sepatu junior di salah satu perusahaan terkemuka di Jakarta.</p>
                    </Col>
                    <Col sm>
                        <Image src={Pencipta2} roundedCircle style={{ width: '300px', height: '300px' }} />
                        <p className='mt-4'>Mark O'Keefe adalah seorang pembuat sepatu berbakat dengan lebih dari 10 tahun pengalaman di industri ini. Ia memiliki keahlian dalam merancang, mengukir, dan merakit sepatu dengan presisi tinggi. Rizky memiliki hasrat yang besar dalam menciptakan sepatu berkualitas tinggi dan modis untuk memenuhi kebutuhan dan preferensi klien. Ia selalu berusaha untuk menggabungkan kreativitas dengan keahliannya dalam menciptakan sepatu yang unik</p>
                    </Col>
                    <Col sm>
                        <Image src={Pencipta3} roundedCircle style={{ width: '300px', height: '300px' }} />
                        <p className='mt-4'>Di sebuah kota metropolitan yang sibuk, ada seorang seniman sepatu bernama Brian Steward. Rizky telah lama menyimpan hasrat yang mendalam untuk menciptakan sepatu yang tidak hanya indah secara visual, tetapi juga nyaman untuk dipakai. Dengan lebih dari 10 tahun pengalaman di industri pembuatan sepatu, ia telah mencapai tingkat keahlian yang luar biasa.</p>
                    </Col>
                </Row>
            </Container>
            <Container className='my-4 mt-5'>
                <Row>
                    <Col>
                        <h3>Visi Kami</h3>
                        <p>
                            Visi kami adalah menjadi pemimpin yang diakui secara global dalam menyediakan solusi inovatif dan berkelanjutan di industri kami. Kami bertujuan untuk merevolusi cara orang mengalami produk dengan terus mendorong batasan teknologi, desain, dan fungsionalitas.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Misi Kami</h3>
                        <p>
                            Di perusahaan kami, misi kami adalah memperkaya kehidupan orang dengan menawarkan produk berkualitas tinggi yang meningkatkan pengalaman sehari-hari mereka. Kami berkomitmen untuk memberikan keunggulan dalam desain, kinerja, dan keandalan, sehingga setiap produk yang kami tawarkan melebihi harapan pelanggan.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Nilai-nilai Kami</h3>
                        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                            <li>Kualitas: Kami berdedikasi untuk menyediakan produk berkualitas tertinggi, yang dirancang dengan presisi dan perhatian terhadap detail.</li>
                            <li>Inovasi: Kami merangkul inovasi dan berupaya menciptakan solusi terdepan yang dapat mengantisipasi dan memenuhi kebutuhan yang berkembang dari pelanggan kami.</li>
                            <li>Kepuasan Pelanggan: Kami memberikan prioritas pada kepuasan pelanggan dan berkomitmen untuk memberikan layanan dan dukungan yang luar biasa selama perjalanan mereka dengan kami.</li>
                            <li>Keberlanjutan: Kami sangat berkomitmen untuk meminimalkan dampak lingkungan dan mempromosikan praktik berkelanjutan di seluruh operasi kami.</li>
                            <li>Integritas: Kami beroperasi dengan integritas, menjunjung tinggi standar etika tertinggi dalam semua aspek bisnis kami.</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Tujuan Utama Kami</h3>
                        <p>
                            Tujuan utama kami adalah memberikan dampak positif bagi kehidupan orang dengan menciptakan produk yang meningkatkan rutinitas harian mereka, memberikan kegembiraan, dan menginspirasi kreativitas. Kami berusaha untuk membangun hubungan jangka panjang dengan pelanggan, mitra, dan karyawan berdasarkan kepercayaan, saling pengertian, dan nilai-nilai bersama.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            Terima kasih telah memilih kami sebagai penyedia terpercaya untuk produk inovatif dan andal. Kami sangat antusias untuk memulai perjalanan ini bersama dan berkomitmen untuk melayani Anda dengan keunggulan.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>


    );
}

export default About;

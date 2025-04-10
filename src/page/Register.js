import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setcofPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://footwear-backend-985529487455.asia-southeast2.run.app/api/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        phone: phone
      }, {
        withCredentials: false
      });
      navigate('/');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }


  return (
    <section className=" is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className='colums is-centered'>
            <div className="colum is-4-desktop">
              <form onSubmit={Register} className='box border'>
                <h1>Register</h1>
                <div className='field'>
                  <label className="label">Name</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>
                <div className='field mt-4'>
                  <label className="label">Email</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className='field mt-4'>
                  <label className="label">Password</label>
                  <div className="controls">
                    <input type="password" className="input" placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className='field mt-4'>
                  <label className="label">Confirm Password</label>
                  <div className="controls">
                    <input type="password" className="input" placeholder='********' value={confPassword} onChange={(e) => setcofPassword(e.target.value)} />
                  </div>
                </div>
                <p className='has-text-centered'>{msg}</p>
                <div className='field mt-4'>
                  <label className="label">Phone</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>
                <div className='field d-flex align-items-center mt-4'>
                  <label className='d-flex align-items-center mb-0'>
                    <input type="checkbox" name="agree" required />
                    <p className='px-1 mb-0'>Saya setuju dengan syarat dan ketentuan</p>
                  </label>
                </div>
                <div className='field mt-5'>
                  <button className='button is-link is-fullwidth'>Register</button>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <div>
                    <div className='d-flex'>
                      <p>Sudah punya Akun?</p>
                      <Nav.Link as={Link} to="/">
                        <p className='has-text-link'>Masuk disini</p>
                      </Nav.Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register

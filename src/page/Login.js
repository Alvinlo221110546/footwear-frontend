import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();


  const Auth = async (event) => {
    event.preventDefault();

    const response = await fetch('https://footwear-backend-985529487455.asia-southeast2.run.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'email': email, password })
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/home');
    } else {
      setErrorMessage('Wrong email or password');
    }
  };

  return (
    <section className=" is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className='colums is-centered'>
            <div className="colum is-4-desktop">
              <form onSubmit={Auth} className='box border'>
                <h1 className='is-center'>Login</h1>
                <div className='field mt-4'>
                  <label className="label">Email or Username</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder='username' value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className='field mt-4'>
                  <label className="label">Password</label>
                  <div className="controls">
                    <input type="password" className="input" placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <p className='has-text-centered has-text-danger'>{errorMessage}</p>
                <div className='field d-flex align-items-center'>
                  <label className='d-flex align-items-center mb-0'>
                    <input type="checkbox" name="agree" required />
                    <p className='px-1 mb-0'>Saya setuju dengan syarat dan ketentuan</p>
                  </label>
                </div>
                <div className='field mt-5'>
                  <button className='button is-link is-fullwidth'>Login</button>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <div>
                    <div className='d-flex'>
                      <p>Belum punya Akun?</p>
                      <Nav.Link as={Link} to="/Register">
                        <p className='has-text-link'>Daftar disini</p>
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

export default Login

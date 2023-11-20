// login.js

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../../styles/profile.module.css';
import Modal from 'react-bootstrap/Modal';

function Login() {
  const router = useRouter();

  const [values, setValues] = useState({
    Email: '',
    Password: '',
  });

  axios.defaults.withCredentials = true;
  const [lgShowadd, setLgShowadd] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
     console.log(values)
    try {
      
      const res = await axios.post('http://localhost:5000/api/retailer/login', values);

       console.log(res)
            if (res.data.data.length>0 ) {
                router.push('/retailer/dashboard/dashboard');
            } else {
                alert(res.data.Error);
            }
  
        } catch (err) {
            console.error(err);
        }
    }; 

  return (
    <div className={styles.custom1bg}>
      <div
        className="custom-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        

        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email address</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setValues({ ...values, Email: e.target.value })}
              className="form-control rounded"
              autoComplete="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={(e) => setValues({ ...values, Password: e.target.value })}
              className="form-control rounded"
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Log in
          </button>
          <p>You agree to our terms and policies</p>
          <Link href="/retailer/profile/profile">
            <div className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
              Create Account
            </div>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;



















// import React from 'react'
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import Form from 'react-bootstrap/Form';
// import Link from 'next/link';

// import 'bootstrap/dist/css/bootstrap.min.css';

// import styles from '../../../styles/profile.module.css'

// function login() {

//     const router = useRouter();

//     const [values, setValues] = useState({
//         email: '',
//         password: '',
//     });

//     axios.defaults.withCredentials = true;

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const res = await axios.post('http://localhost:50000/login', values);

//             if (res.data.status === 'Success') {
//                 router.push('/');
//             } else {
//                 alert(res.data.Error);
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     };
//     return (
//         <div>
//             <div className={styles.custom1bg} style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 height: '100vh'
//             }}  >
//                 <div className={styles['custom-container']}>

//                     <h2>Sign-In</h2>

//                     <Form onSubmit={handleSubmit}>

//                         <div className="mb-3">
//                             <label htmlFor='email'><strong>Email address</strong></label>
//                             <input
//                                 type="email"
//                                 placeholder="Enter email"
//                                 name="email"
//                                 onChange={(e) => setValues({ ...values, email: e.target.value })}
//                                 className="form-control rounded"
//                                 autoComplete="username" />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor='password'><strong>Password</strong></label>
//                             <input
//                                 type="password"
//                                 placeholder="Enter password"
//                                 name="password"
//                                 onChange={(e) => setValues({ ...values, password: e.target.value })}
//                                 className="form-control rounded"
//                                 autoComplete="current-password"
//                             />
//                         </div>
//                         <button type='submit' className='btn btn-success w-100 rounded-0'>
//                             Log in
//                         </button>
//                         <p>You agree to our terms and policies</p>
//                         <Link href='/register'>
//                            <div className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</div>
//                         </Link>

//                     </Form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default login
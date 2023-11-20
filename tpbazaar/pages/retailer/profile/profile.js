import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Sidebar from '../sidebar/sidebar';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import css from '../../../styles/product.module.css';

export default function Banking() {
  const [value, setValue] = useState('one');
  const [formData, setFormData] = useState({
    Reg_no: '',
    Gst_no: '',
    Tin: '',
    Pan: '',
    Shop_name: '',
    Owner_name: '',
    Password: '',
    Mobile: '',
    Email: '',
    Address: '',
    State: '',
    Region: '',
    City: '',
    Pin: '',
    Terms_and_Conditions: '',
    Registration_doc: null,
    Pan_doc: null,
    Shop_doc: null,
  });
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/retailer/newshopregister', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        router.push('/users');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [fieldName]: file });
  };

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  return (
    <div className={css.formContainer}>
          <h2 className={css.formHeader}>ADD RETAILER</h2>
          <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.formGroup}>
              <label htmlFor="inputReg_no" className={css.formLabel}>Registration Number</label>
              <input
                type="text"
                className={css.formControl}
                id="inputReg_no"
                value={formData.Reg_no}
                onChange={(e) => handleInputChange(e, 'Reg_no')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputGst_no" className={css.formLabel}>GST Number</label>
              <input
                type="text"
                className={css.formControl}
                id="inputGst_no"
                value={formData.Gst_no}
                onChange={(e) => handleInputChange(e, 'Gst_no')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputTin" className={css.formLabel}>TIN</label>
              <input
                type="text"
                className={css.formControl}
                id="inputTin"
                value={formData.Tin}
                onChange={(e) => handleInputChange(e, 'Tin')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputPan" className={css.formLabel}>PAN</label>
              <input
                type="text"
                className={css.formControl}
                id="inputPan"
                value={formData.Pan}
                onChange={(e) => handleInputChange(e, 'Pan')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputShop_name" className={css.formLabel}>Shop Name</label>
              <input
                type="text"
                className={css.formControl}
                id="inputShop_name"
                value={formData.Shop_name}
                onChange={(e) => handleInputChange(e, 'Shop_name')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputOwner_name" className={css.formLabel}>Owner Name</label>
              <input
                type="text"
                className={css.formControl}
                id="inputOwner_name"
                value={formData.Owner_name}
                onChange={(e) => handleInputChange(e, 'Owner_name')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputPassword" className={css.formLabel}>Password</label>
              <input
                type="password"
                className={css.formControl}
                id="inputPassword"
                value={formData.Password}
                onChange={(e) => handleInputChange(e, 'Password')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputMobile" className={css.formLabel}>Mobile</label>
              <input
                type="text"
                className={css.formControl}
                id="inputMobile"
                value={formData.Mobile}
                onChange={(e) => handleInputChange(e, 'Mobile')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputEmail" className={css.formLabel}>Email</label>
              <input
                type="email"
                className={css.formControl}
                id="inputEmail"
                value={formData.Email}
                onChange={(e) => handleInputChange(e, 'Email')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputAddress" className={css.formLabel}>Address</label>
              <input
                type="text"
                className={css.formControl}
                id="inputAddress"
                value={formData.Address}
                onChange={(e) => handleInputChange(e, 'Address')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputState" className={css.formLabel}>State</label>
              <input
                type="text"
                className={css.formControl}
                id="inputState"
                value={formData.State}
                onChange={(e) => handleInputChange(e, 'State')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputRegion" className={css.formLabel}>Region</label>
              <input
                type="text"
                className={css.formControl}
                id="inputRegion"
                value={formData.Region}
                onChange={(e) => handleInputChange(e, 'Region')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputCity" className={css.formLabel}>City</label>
              <input
                type="text"
                className={css.formControl}
                id="inputCity"
                value={formData.City}
                onChange={(e) => handleInputChange(e, 'City')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputPin" className={css.formLabel}>PIN</label>
              <input
                type="text"
                className={css.formControl}
                id="inputPin"
                value={formData.Pin}
                onChange={(e) => handleInputChange(e, 'Pin')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputTerms_and_Conditions" className={css.formLabel}>Terms and Conditions</label>
              <textarea
                className={css.formControl}
                id="inputTerms_and_Conditions"
                placeholder='Enter Terms and Conditions'
                value={formData.Terms_and_Conditions}
                onChange={(e) => handleInputChange(e, 'Terms_and_Conditions')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputRegistration_doc" className={css.formLabel}>Registration Document</label>
              <input
                type="file"
                className={css.formControl}
                id="inputRegistration_doc"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileChange(e, 'Registration_doc')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputPan_doc" className={css.formLabel}>Pan Document</label>
              <input
                type="file"
                className={css.formControl}
                id="inputPan_doc"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileChange(e, 'Pan_doc')}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="inputShop_doc" className={css.formLabel}>Shop Document</label>
              <input
                type="file"
                className={css.formControl}
                id="inputShop_doc"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileChange(e, 'Shop_doc')}
              />
            </div>
            <div className={css.formGroup}>
              <button type="submit" className={css.submitButton}>Submit</button>
            </div>
          </form>
        </div>
  );
}






// import React, { useState } from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import Sidebar from '../sidebar/sidebar';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import css from '../../../styles/product.module.css';

// export default function Banking() {
//   const [value, setValue] = useState('one');
//   const [formData, setFormData] = useState({
//     Reg_no: '',
//     Gst_no: '',
//     Tin: '',
//     Pan: '',
//     Shop_name: '',
//     Owner_name: '',
//     Password: '',
//     Mobile: '',
//     Email: '',
//     Address: '',
//     State: '',
//     Region: '',
//     City: '',
//     Pin: '',
//     Terms_and_Conditions: '',
//     Registration_doc: null,
//     Pan_doc: null,
//     Shop_doc: null,
//   });
//   const router = useRouter();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formDataToSend = new FormData();

//     for (const key in formData) {
//       formDataToSend.append(key, formData[key]);
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/retailer/newshopregister', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.status === 200) {
//         router.push('/users');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleFileChange = (e, fieldName) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, [fieldName]: file });
//   };

//   const handleInputChange = (e, fieldName) => {
//     setFormData({ ...formData, [fieldName]: e.target.value });
//   };

//   return (
//     <Sidebar>
//       <div>
//         <Head>
//           <link rel="stylesheet" href="/banking.css" />
//         </Head>
//         <Box sx={{ width: '100%' }}>
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             textColor="secondary"
//             indicatorColor="secondary"
//             aria-label="secondary tabs example"
//           >
//             <Tab value="one" label="ADD" />
//             <Tab value="two" label="View" />
//           </Tabs>
//         </Box>
//       </div>

//       {value === 'one' && (
//         <div className={css.formContainer}>
//           <h2 className={css.formHeader}>ADD RETAILER</h2>
//           <form className={css.form} onSubmit={handleSubmit}>
//             <div className={css.formGroup}>
//               <label htmlFor="inputReg_no" className={css.formLabel}>Registration Number</label>
//               <input
//                 type="text"
//                 className={css.formControl}
//                 id="inputReg_no"
//                 value={formData.Reg_no}
//                 onChange={(e) => handleInputChange(e, 'Reg_no')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputGst_no" className={css.formLabel}>GST Number</label>
//               <input
//                 type="text"
//                 className={css.formControl}
//                 id="inputGst_no"
//                 value={formData.Gst_no}
//                 onChange={(e) => handleInputChange(e, 'Gst_no')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputTin" className={css.formLabel}>TIN</label>
//               <input
//                 type="text"
//                 className={css.formControl}
//                 id="inputTin"
//                 value={formData.Tin}
//                 onChange={(e) => handleInputChange(e, 'Tin')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputPan" className={css.formLabel}>PAN</label>
//               <input
//                 type="text"
//                 className={css.formControl}
//                 id="inputPan"
//                 value={formData.Pan}
//                 onChange={(e) => handleInputChange(e, 'Pan')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputShop_name" className={css.formLabel}>Shop Name</label>
//               <input
//                 type="text"
//                 className={css.formControl}
//                 id="inputShop_name"
//                 value={formData.Shop_name}
//                 onChange={(e) => handleInputChange(e, 'Shop_name')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputOwner_name" className={css.formLabel}>Owner Name</label>
//               <input
//                 type="text"
//                 className={css.formControl}
//                 id="inputOwner_name"
//                 value={formData.Owner_name}
//                 onChange={(e) => handleInputChange(e, 'Owner_name')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputPassword" className={css.formLabel}>Password</label>
//               <input
//                 type="password"
//                 className={css.formControl}
//                 id="inputPassword"
//                 value={formData.Password}
//                 onChange={(e) => handleInputChange(e, 'Password')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputMobile" className={css.formLabel}>Mobile</label>
//               <input
//                 type="text"
//                 className={css.formControl}
//                 id="inputMobile"
//                 value={formData.Mobile}
//                 onChange={(e) => handleInputChange(e, 'Mobile')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputEmail" className={css.formLabel}>Email</label>
//               <input
//                 type="email"
//                 className={css.formControl}
//                 id="inputEmail"
//                 value={formData.Email}
//                 onChange={(e) => handleInputChange(e, 'Email')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputAddress" className={css.formLabel}>Address</label>
//               <input
//                 type="text"
//                 className={css.formControl}
//                 id="inputAddress"
//                 value={formData.Address}
//                 onChange={(e) => handleInputChange(e, 'Address')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputState" className={css.formLabel}>State</label>
//               <input
//                 type="text"
//                 className={css.formControl}
//                 id="inputState"
//                 value={formData.State}
//                 onChange={(e) => handleInputChange(e, 'State')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputRegion" className={css.formLabel}>Region</label>
//               <input
//                 type="text"
//                 className={css.formControl}
//                 id="inputRegion"
//                 value={formData.Region}
//                 onChange={(e) => handleInputChange(e, 'Region')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputCity" className={css.formLabel}>City</label>
//               <input
//                 type="text"
//                 className={css.formControl}
//                 id="inputCity"
//                 value={formData.City}
//                 onChange={(e) => handleInputChange(e, 'City')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputPin" className={css.formLabel}>PIN</label>
//               <input
//                 type="text"
//                 className={css.formControl}
//                 id="inputPin"
//                 value={formData.Pin}
//                 onChange={(e) => handleInputChange(e, 'Pin')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputTerms_and_Conditions" className={css.formLabel}>Terms and Conditions</label>
//               <textarea
//                 className={css.formControl}
//                 id="inputTerms_and_Conditions"
//                 placeholder='Enter Terms and Conditions'
//                 value={formData.Terms_and_Conditions}
//                 onChange={(e) => handleInputChange(e, 'Terms_and_Conditions')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputRegistration_doc" className={css.formLabel}>Registration Document</label>
//               <input
//                 type="file"
//                 className={css.formControl}
//                 id="inputRegistration_doc"
//                 accept=".pdf,.doc,.docx"
//                 onChange={(e) => handleFileChange(e, 'Registration_doc')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputPan_doc" className={css.formLabel}>Pan Document</label>
//               <input
//                 type="file"
//                 className={css.formControl}
//                 id="inputPan_doc"
//                 accept=".pdf,.doc,.docx"
//                 onChange={(e) => handleFileChange(e, 'Pan_doc')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="inputShop_doc" className={css.formLabel}>Shop Document</label>
//               <input
//                 type="file"
//                 className={css.formControl}
//                 id="inputShop_doc"
//                 accept=".pdf,.doc,.docx"
//                 onChange={(e) => handleFileChange(e, 'Shop_doc')}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <button type="submit" className={css.submitButton}>Submit</button>
//             </div>
//           </form>
//         </div>
//       )}

//       {value === 'two' && (
//         <div>
//           <h1>View Tab Content</h1>
//           <p>This is the content for the View tab.</p>
//         </div>
//       )}
//     </Sidebar>
//   );
// }


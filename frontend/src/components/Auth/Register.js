
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Register = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/api/auth/register',
//         formData,
      
        
//       );

//       if (response.data) {
//         toast.success('Registration successful');
//         navigate('/login');
//       }
//     } catch (err) {
//       console.log(err);
//       toast.error(
//         err.response?.data?.error || 
//         err.message || 
//         'Registration failed'
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <h2>Register</h2>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Registering...' : 'Register'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// components/Auth/Register.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/register',
        formData
      );

      if (response.data) {
        toast.success('Registration successful');
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.error || 
        err.message || 
        'Registration failed'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} >
        <h2>Register</h2>
        <div className="input-group">
          <FaUser className="icon" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <FaEnvelope className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

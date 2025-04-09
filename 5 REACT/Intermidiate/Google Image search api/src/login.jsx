import React, { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './fire';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const usersRef = collection(db, 'users');
    const snapshot = await getDocs(usersRef);
    //To see all users (for admin purposes), you can use this code:
    // snapshot.forEach(doc => {
    //   console.log('User:', doc.data());
    // });
      
    
    try {  
    // Create a query to find user with matching email
    const q = query(usersRef, where('email', '==', loginData.email));
    
    // Execute the query
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      setMessage('No user found with this email');
      return;
    }
    // Check credentials
    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();
    
    if (userData.password === loginData.password) {
      setMessage('Login successful! Welcome ' + userData.name);
      // Here you can:
      // 1. Save user data to state/context
      // 2. Redirect to dashboard
      // 3. Set authentication tokens
    } else {
      setMessage('Incorrect password');
    }

    } catch (error) {
      setMessage('Error during login: ' + error.message);
    }
    
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      
      {message && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          {message}
        </div>
      )}
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './fire';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // const db = getFirestore();
      const usersCollection = collection(db, 'users');
      
      // Add a new document with auto-generated ID
     const docRef = await addDoc(usersCollection, {
        email: formData.email,
        name: formData.name,
        password: formData.password, // Note: In production, use proper authentication
        timestamp: new Date()
      });

      setMessage(`User registered successfully! Document ID: ${docRef.id}`);
      
      // Clear form
      setFormData({
        email: '',
        name: '',
        password: ''
      });
    } catch (error) {
      setMessage('Error registering user: ' + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register User
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

export default UserRegistration;
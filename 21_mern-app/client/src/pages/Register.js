import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: ''
  })

  const { name, email, password1, password2 } = formData;

  // Handle change from inputs
  const handleChange = text => e => {
    console.log(name, email, password1, password2)
    setFormData({ ...formData, [text]: e.target.value })
  }

  // Submit data to backend
  const handleSubmit = e => {
    e.preventDefault()
    if (name && email && password1) {
      if (password1 === password2) {
        axios.post(`${process.env.REACT_APP_API_URL}/register`, {
          name,
          email,
          password: password1
        })
          .then(res => {
            setFormData({
              ...formData,
              name: '',
              email: '',
              password1: '',
              password2: '',
              textChange: 'Submitted'
            });

            toast.success(res.data.message);
          })
          .catch(err => {
            setFormData({
              ...formData,
              name: '',
              email: '',
              password1: '',
              password2: '',
              textChange: 'Sign Up'
            });
            console.log(err.response);
            toast.error(err.response.data.errors);
          });
      } else {
        toast.error('Password dont matches')
      }
    } else {
      toast.error('Please fill all fileds')
    }
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          onChange={handleChange('name')}
          value={name}
        />
        <input
          type='email'
          placeholder='Email'
          onChange={handleChange('email')}
          value={email}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={handleChange('password1')}
          value={password1}
        />
        <input
          type='password'
          placeholder='Confirm Password'
          onChange={handleChange('password2')}
          value={password2}
        />
        <button>Register</button>
      </form>
    </>
  )
}

export default Register

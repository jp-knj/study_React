import React, { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import jwt from 'jsonwebtoken'


const Activation = ({match}) => {
  const [formData, setFormData] = useState({
    name: '',
    token: '',
    show: true,
  })

  const { name, token } = formData;

  useEffect(() => {
    let token = match.params.token
    let name = jwt.decode(token)

    if (token) {
      setFormData({ ...formData, name, token })
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/activation`, {token})
      .then(res => {
        setFormData({ ...formData, show: false});
        toast.success(res.data.message);
      })
      .catch(err => {
        toast.error(err.response.data.errors);
      });
  };


  return (
    <>
      <ToastContainer />
      Welcome {name}
      <form
        onSubmit={handleSubmit}
      >
        <button type="submit">
          Activate your accout
        </button>
      </form>
    </>
  )
}
export default Activation

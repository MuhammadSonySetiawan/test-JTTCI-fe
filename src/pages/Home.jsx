import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

function Home() {
 axios.get(`http://localhost:8000/`).then(res => console.log(res)).catch(err=>console.error(err))
  return (
    <div>
        <Navbar />

        <h1 className='d-flex justify-content-center align-items-center'>Halaman Home</h1>
    </div>
  )
}

export default Home
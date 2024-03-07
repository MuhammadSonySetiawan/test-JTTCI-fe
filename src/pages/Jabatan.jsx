import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

function Jabatan() {
    // axios.get(`http://localhost:8000/`)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => console.log(err));


    
    

        useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/');
                const jsonData = await response.json();
                console.log(jsonData);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
            }

            fetchData()
            } , [] )

  return (
    <div>
        <Navbar />
         <h1 className='d-flex justify-content-center align-items-center'>Halaman Jabatan</h1>
    </div>
  )
}

export default Jabatan
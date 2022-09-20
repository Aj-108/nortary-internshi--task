import React, { useEffect, useState } from 'react'
import axios from 'axios' ;
import './Home.css'

function Home() {

  const [data,setData] = useState([]) ;
  const [isLoad,setisLoad] = useState(false) ;

  useEffect(() => {
    async function fetchData(){
      const request = await axios.post('https://demo2211087.mockable.io/mock',{}) ;
      const reqData = await request.data ;
      setData(request.data.companies)
      setisLoad(true) ;
      return request ;
    }

    fetchData() ;
  },[isLoad])

  return (
    <div>
      <span className="heading h1 "> The Notary App </span>

    <div className="container-lg">
      <table className='table table-striped'> 
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
            {data.map((res) => (
              <tr>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.status}</td>
              </tr>
            
          ))} 
        </tbody>
      </table>
    </div>
      
    </div>
  )
}

export default Home
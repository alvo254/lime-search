import React, { useEffect, useState } from 'react'
import axios from "axios";

const Home = () => {

    const [search, setSearch] = useState("")

    const [ticket, setTicket] = useState("")

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios("/tickets")
        .then((rec) => {setTicket(ticket)})
    },[])

    console.log(ticket)

    
   useEffect(() => {
    axios("/customers")
    .then((resv) => {setCustomers(resv.data)})
   },[])
   console.log(customers)

   const mapping = () =>{
    customers.map((val, key) => {
        console.log(val.FirstName +' '+ val.LastName)
    })
   }
   mapping()


  return (
    <div>
        {/* <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
            </span>
        </div> */}
        <div class="input-group" style={{width:"520px", marginLeft:"750px", paddingTop:"40px"}}>
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-primary">search</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Customers</th>
                    <th scope="col">Tickets</th>
                    <th scope="col">Description</th>
                    <th scope="col">payments</th>
                    {/* <div class="input-group rounded" style={{width:"220px", marginRight:"-100px"}}>
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                        </span>
                    </div> */}
                </tr>
            </thead>
            <tbody>
  
                <tr>
                    <th scope="row">1</th>
                    {
                        customers.map((value, key) => {
                            return(
                                <>
                                <td>{value.FirstName +' '+value.LastName}</td>
                                </>
                    
                                
                                )
                        })
                    }
                    {}
                    <td></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                {/* <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr> */}
            </tbody>
        </table>
    </div>
  )
}

export default Home
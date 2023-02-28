import React, { useEffect, useState } from 'react'
import axios from "axios";

const Home = () => {

    const [search, setSearch] = useState('')
    // console.log(search)

    const [ticket, setTicket] = useState("")

    const [customers, setCustomers] = useState([]);


    // useEffect(() => {
    //     axios("/payments")
    //     .then((rec) => {setTicket(rec.data)})
    // },[])

    // console.log(ticket)


   useEffect(() => {
    axios("/customers")
    .then((resv) => {setCustomers(resv.data)})
   },[])
   console.log(customers)

//    const mapping = () =>{
//     customers.map((val, key) => {
//         console.log(val.FirstName +' '+ val.LastName)
//     })
//    }
//    mapping()


  return (
    <div>
        {/* <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
            </span>
        </div> */}
        <div className="input-group" style={{width:"520px", paddingTop:"40px"}}>
            <input onChange={(e) => setSearch(e.target.value)} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            {/* <button onClick={searching} type="button" class="btn btn-outline-primary">search</button> */}
        </div>

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Customers</th>
                    <th scope="col">User Name</th>
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
                    {/* {
                        
                        customers.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.FirstName.toLowerCase().includes(search)
                        }).map((value, key) => (
                            
                                <>
                                <td>{value.FirstName +' '+value.LastName}</td>
                                <td>{value.Username}</td>
                                <td>{value.ticket}</td>
                                <td>{value.payments}</td>
                                <td style={{color:"red"}}>Pending</td>
                                
                                </>
                    
                                
                                )
                        )
                    }
                     */}
                    {/* <td></td>
                    <td>Otto</td>
                    <td>@mdo</td> */}
                </tr>

                {customers.filter((data) => {
                    return search.toLowerCase() === '' ? data : data.FirstName.toLowerCase().includes(search)
                }).map((value) => (
                            <tr>
                    <th scope="row" key={value.id}>{value.id}</th>

                              <td>{value.FirstName + ' ' + value.LastName}</td>
                              <td>{value.Username}</td>
                              {value.tickets.map((data) => (<td key={ticket.id}>{data.Title}</td> ))}
                              {value.tickets.map((data) => (<td key={ticket.id}>{data.Description}</td> ))}
                              {value.payments.map((data) => (<td>{data.Amount}</td> ))}
                          </tr>

                ))}

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
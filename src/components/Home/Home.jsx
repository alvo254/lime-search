import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./Home.css"

const Home = () => {

    const [search, setSearch] = useState('')
    // console.log(search)

    // const [input, setInput] = useState("")
    const [ticket, setTicket] = useState("")

    const [customers, setCustomers] = useState([]);

    // const searching = (e) =>{
    //     e.preventDefault()
    //     var dataItem = e.target.value.toLowerCase()
    //     setInput(dataItem)
    // }


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

        {/* <div className="card text-dark bg-light mb-3" style={{maxWidth: "18rem;"}}>
            <div className="card-header">Header</div>
                <div className="card-body">
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div> */}


       

        <div class="row">

            <div class="col-sm-2">
                <div class="card">
                <div class="card-body">
                <div className="card-header">Customers</div>
                    {
                        customers.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.FirstName.toLowerCase().includes(search)
                        }).map((data) => (
                            <>
                            <li >{data.FirstName +' '+ data.LastName}</li>
                            {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            </>
                        ))
                    }
                </div>
                </div>
            </div>

            <div class="col-sm-2">
                <div class="card">
                <div class="card-body">
                <div className="card-header">First name</div>
                    {
                        customers.map((data) => (
                            <>
                            <li style={{listStyle:"none"}}>{data.FirstName}</li>
                            {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            </>
                        ))
                    }
                </div>
                </div>
            </div>

            <div class="col-sm-2">
                <div class="card">
                <div class="card-body">
                <div className="card-header">Usernames</div>
                    {
                        customers.map((data) => (
                            <>
                            <li style={{listStyle:"none"}}>{data.Username}</li>
                            {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            </>
                        ))
                    }
                </div>
                </div>
            </div>

            <div class="col-sm-2">
                <div class="card">
                <div class="card-body">
                <div className="card-header">Tickets</div>
                    {
                        customers.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.FirstName.toLowerCase().includes(search)
                        }).map((data) => (
                            <>
                             {data.tickets.map((data) => (<li>{data.Title}</li> ))}
                            {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            </>
                        ))
                    }
                </div>
                </div>
            </div>
            
            {/* <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                <div className="card-header">Description</div>
                    {
                        customers.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.FirstName.toLowerCase().includes(search)
                        }).map((data) => (
                            <>
                             {data.tickets.map((data) => (<li>{data.Description}</li> ))}

                            </>
                        ))
                    }
                </div>
                </div>
            </div> */}

            <div class="col-sm-2">
                <div class="card">
                <div class="card-body">
                <div className="card-header">Amount</div>
                    {
                        customers.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.FirstName.toLowerCase().includes(search)
                        }).map((data) => (
                            <>
                              {data.payments.map((data) => (<li>{data.Amount}</li> ))}
                           
                            </>
                        ))
                    }
                </div>
                </div>
            </div>

            <div class="col-sm-2">
                <div class="card">
                <div class="card-body">
                <div className="card-header">Transaction code</div>
                    {
                        customers.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.FirstName.toLowerCase().includes(search)
                        }).map((data) => (
                            <>
                              {data.payments.map((data) => (<li>{data.TransactionCode}</li> ))}
                           
                            </>
                        ))
                    }
                </div>
                </div>
            </div>
        


        {/* <div class="col-sm-3">
            <div class="card">
            <div class="card-body">
            <div className="card-header">Header</div>

                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
           
            </div>
            </div>
        </div> */}
{/* 
        <div class="col-sm-3">
            <div class="card">
            <div class="card-body">
            <div className="card-header">Header</div>

                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

            </div>
            </div>
        </div> */}
        
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
                    {/* <th scope="row">1</th> */}
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

                {/* {customers.filter((data) => {
                    return search.toLowerCase() === '' ? data : data.FirstName.toLowerCase().includes(search)
                }).map((value) => (
                            <tr>
                    <th scope="row" >{value.id}</th>

                              <td>{value.FirstName + ' ' + value.LastName}</td>
                              <td>{value.Username}</td>
                              {value.tickets.map((data) => (<td key={ticket.id}>{data.Title}</td> ))}
                              {value.tickets.map((data) => (<td key={ticket.id}>{data.Description}</td> ))}
                              {value.payments.map((data) => (<td>{data.Amount}</td> ))}
                          </tr>

                ))} */}

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
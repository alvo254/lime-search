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
                        customers.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.FirstName.toLowerCase().includes(search)
                        }).map((data) => (
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
                        customers.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.FirstName.toLowerCase().includes(search)
                        }).map((data) => (
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


        
    </div>
  )
}

export default Home
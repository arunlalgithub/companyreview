import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useLocation } from "react-router";


const ComapnyDetail = () => {

     let data = useLocation();
     let id = data.state.id
     const [company, setCompany] = useState("")

     useEffect(() => {
          getCompany();
     }, [])

     const getCompany = async () => {
          let result = await fetch(`http://localhost:5000/company/${id}`)
          result = await result.json()
          setCompany(result)
     }
     console.warn(company.address)

     return (
          <>
               <Nav />
               <br /> <br />   
               <div className="container h-150">
               <Link className="btn btn-primary btn-lg active navbar-right" role="button" aria-pressed="true" to="/addcompany">+ Add Review</Link>    
               <br /> <br /><br /><br /> 
               <p><Link to="/companylist" className="navbar-right h4"><u>Back to Company List </u></Link></p> <br /> <br />  
               <div className="card" key={company._id}>
                    <div className="card-body bg-warning">
                         <h5 className="card-text">{company.foundingdate}</h5>
                         <h1 className="card-text">{company.name}</h1>
                         <h4 className="card-text">{company.address}</h4>
                         
                    </div>
               </div>
               </div>
          </>
     )
}

export default ComapnyDetail

import React from "react";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CompanyList = () => {

    const [company, setcompany] = useState("")

    useEffect(() => {
        getCompany();
    }, [])

    const getCompany = async () => {
        let result = await fetch('http://localhost:5000/companies')
        result = await result.json()
        setcompany(result)
    }

    const deleteCompany = async (id) => {
        console.log("delete Company")
        let result = await fetch(`http://localhost:5000/company/${id}`, {
            method: "delete"
        });
        result = await result.json()
        if (result) {
            alert("Record is deleted")
            getCompany(); //after delete it will delete from page
        }
    }

    const searchHandle = async (event) => {
        console.warn(event.target.value);
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if (result) {
                setcompany(result)
            }
        } else {
            getCompany();
        }
    }
    return (
        <>
            <Nav />

            <div className="container h-100">
                <h3> Company List</h3>

                <div className="d-flex flex-row">

                    <div className="p-2">
                    <input className="search-product-box" type="text" placeholder="Search Company" onChange={searchHandle} />
                        
                        <Link className="btn btn-primary btn-lg active navbar-right" role="button" aria-pressed="true" to="/addcompany">Add Company</Link>
                    </div> <br/> <br/> <br/>
                </div>

                {
                    company.length > 0 ? company.map((item, index) =>
                        <div className="card">
                            <div className="card-body bg-warning" key={item._id}>
                                <Link to='/companydetail' state={{ id: item._id }}> {item.name} </Link>
                                <h4 className="card-title">{item.name}</h4>
                                <h4 className="card-text">{item.address}</h4>
                            </div> <br />
                        </div>
                    )
                        : <h1> No Comapny Found </h1>
                }
            </div>
        </>
    )
}

export default CompanyList


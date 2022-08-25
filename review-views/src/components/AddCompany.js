import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddCompany = () => {

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [foundingDate, setFindingDate] = useState("")

  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const addCompany = async () => {
    console.warn(name)
    if (!name || !address || !foundingDate) {
      setError(true)
      return false
    }

    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch('http://localhost:5000/addcompany', {
      method: 'post',
      body: JSON.stringify({ name, address, foundingDate, userId }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json()
    navigate("/companylist")
    console.warn(result)
  }

  return (
    <div className="login">
      <section className="vh-10">
        <div className="container py-5 h-90">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://about.me/cdn-cgi/image/q=80,dpr=1,f=auto,fit=cover,w=1200,h=630,gravity=auto/https://assets.about.me/background/users/g/r/a/graffersid_1595412391_311.jpg"
                className="img-fluid" alt="Phone image" style={{ width: "600px", height: "600px" }} />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h2 className="bg-warning text-center font-weight-bold text-info"> Add Company </h2> <br /><br />

              <div className="form-outline mb-4">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-control form-control-lg"
                  onChange={(e) => setName(e.target.value)} value={name} />
              </div><br />

              <div className="form-outline mt-20">
                <label className="form-label"> Address </label>
                <input type="text" className="form-control form-control-lg"
                  onChange={(e) => setAddress(e.target.value)} value={address} />
              </div><br />

              <div className="form-outline mb-4">
                <label className="form-label">Founding Date</label>
                <input type="text" className="form-control form-control-lg"
                  onChange={(e) => setFindingDate(e.target.value)} value={foundingDate} />
              </div><br />

              <div className="d-flex justify-content-around align-items-center mb-4">
              </div> <br />
              <p><Link to="/companylist">Company List</Link></p>
              <br />
              <button type="submit" onClick={addCompany} className="btn btn-primary btn-lg btn-block">Add Company</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AddCompany

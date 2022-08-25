import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate()

  // //to stop user login for direct url
  // useEffect(() => {
  //   const auth = localStorage.getItem('user')
  //   if (auth) {
  //     navigate("/")
  //   }
  // },[]);

  const handleLogin = async () => {
    console.log(email, password)
    let result = await fetch('http://localhost:5000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    result = await result.json();
    console.warn(result)
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result))
      navigate("/companylist")
    } else {
      alert("Please enter correct details")
    }
  }

  return (

    <div className="login">
      <section className="vh-10">
        <div className="container py-5 h-90">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://about.me/cdn-cgi/image/q=80,dpr=1,f=auto,fit=cover,w=1200,h=630,gravity=auto/https://assets.about.me/background/users/g/r/a/graffersid_1595412391_311.jpg"
                className="img-fluid" alt="Phone image" style={{ width: "500px", height: "600px" }} />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h2 className="bg-warning text-center font-weight-bold text-info"> Login </h2> <br /><br />
              <div className="form-outline mb-4">

                <input type="email" className="form-control form-control-lg"
                  onChange={(e) => setEmail(e.target.value)} value={email} />
                <label className="form-label">Email address</label>
              </div>

              <div className="form-outline mb-4"> <br />
                <input type="password" id="form1Example23" className="form-control form-control-lg"
                  onChange={(e) => setPassword(e.target.value)} value={password} />
                <label className="form-label">Password</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                <label className="form-check-label"> Remember me </label>
              </div>

              <br />
              <button type="submit" onClick={handleLogin} className="btn btn-primary btn-lg btn-block">Sign in</button>
              <br />
              <p>  I don't have an account on Review & Rate  </p>
              <hr />
              <li><Link to="/signup" className="h4">Sign Up!</Link></li>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login

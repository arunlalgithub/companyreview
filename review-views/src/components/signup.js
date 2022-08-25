import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")

  //for hide signup  menu, if already 
  const navigate = useNavigate();

  // useEffect(() =>{
  //     const auth = localStorage.getItem('user');
  //     if(auth){
  //         navigate('/login')
  //     }
  // }) 

  const collectData = async () => {
    console.warn(name, password, email, phone, city, state)
    let result = await fetch('http://localhost:5000/signup', {
      method: 'post',
      body: JSON.stringify({ name, password, email, phone, city, state }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json()
    console.warn(result)
    localStorage.setItem('user', JSON.stringify(result))
    if (result) {
      navigate('/')
    }
  }

  return (

    <div className="login" style={{ backgroundColor: "" }}>
      <section className="vh-60">
        <div className="container py-5 h-70">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://about.me/cdn-cgi/image/q=80,dpr=1,f=auto,fit=cover,w=1200,h=630,gravity=auto/https://assets.about.me/background/users/g/r/a/graffersid_1595412391_311.jpg"
                className="img-fluid" alt="Phone image" style={{ width: "500px", height: "600px" }} />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 bg-light p-3" >
              <h2 className="bg-warning text-center font-weight-bold text-info"> sign Up! </h2> <br /><br />


              <div className="form-outline mb-2">
                <label className="form-label" for="form1Example23">Enter name</label>
                <input type="text" id="form1Example23" className="form-control form-control-lg"
                  onChange={(e) => setName(e.target.value)} value={name} />
              </div><br />

              <div className="form-outline mb-2" styel={{ border: "2px solid black", backgroundColor: "pink" }}>
                <label className="form-label" for="form1Example13">Email address</label>
                <input type="email" id="form1Example13" className="form-control form-control-lg"
                  onChange={(e) => setEmail(e.target.value)} value={email} />
              </div><br />

              <div className="form-outline mb-2">
                <label className="form-label" for="form1Example23">Enter Password</label>
                <input type="password" id="form1Example23" className="form-control form-control-lg"
                  onChange={(e) => setPassword(e.target.value)} value={password} />
              </div><br />

              <div className="form-outline mb-2">
                <label className="form-label" for="form1Example23">Enter Phone no.</label>
                <input type="text" id="form1Example23" className="form-control form-control-lg"
                  onChange={(e) => setPhone(e.target.value)} value={phone} />
              </div><br />

              <div className="form-outline mb-2">
                <label className="form-label" for="form1Example23">Enter City</label>
                <input type="text" id="form1Example23" className="form-control form-control-lg"
                  onChange={(e) => setCity(e.target.value)} value={city} />
              </div><br />


              <div className="form-outline mb-2">
                <label className="form-label" for="form1Example23">Enter State</label>
                <input type="text" id="form1Example23" className="form-control form-control-lg"
                  onChange={(e) => setState(e.target.value)} value={state} />
              </div><br />


              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="form-check">
                </div>
              </div>
              <br />
              <button type="submit" onClick={collectData} className="btn btn-primary btn-lg btn-block">Sign Up</button>
              <hr />
              <label className="form-check-label" for="form1Example3"> I already have an account: <Link to="/">Login</Link> </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup

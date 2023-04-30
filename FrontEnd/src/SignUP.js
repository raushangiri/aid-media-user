import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUP = () => {
  let navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [pan_number, setPan_number] = useState("");
  const [referrel_id, setreferrel_id] = useState("");
  const [email_id, setEmail_id] = useState("");

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_id,
        password,
        name,
        pan_number,
        referrel_id,
        contact_number: phone,
      }),
    });
    await res.json();
    if (res.status === 422) {
      window.alert("please fill all required field");
      console.log("enter information ");
    } else if (res.status === 402) {
      window.alert("User Already Registered");
      console.log("User Already Registered");
    } else {
      window.alert("Thank You for Connecting");
      navigate("/sign-in");
    }
  };

  return (
    <div className="background">
      <div className="center-box col-sm-6 p-5 ">
        <h1 className="my-4">LOGO</h1>
        <h4>Sign Up | Aid Media</h4>
        <form className="row text-start" method="POST">
          <div className="col-sm-6 ">
            {" "}
            <h6 className="form-label float-start mt-3">
              Sponsor Id/Invite Code (Optional)
            </h6>
            <input
              type="text"
              id="SponserID"
              className="form-control"
              name="referrel_id"
              onChange={(e) => setreferrel_id(e.target.value)}
              value={referrel_id}
            />
          </div>
          <div className="col-sm-6">
            <h6 className="form-label float-start mt-3">Name</h6>
            <input
              type="text"
              id="Name"
              className="form-control"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="col-sm-6">
            <h6 className="form-label float-start mt-3">Phone</h6>
            <input
              type="text"
              id="Phone"
              className="form-control"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
          </div>
          <div className="col-sm-6">
            <h6 className="form-label float-start mt-3">Email</h6>
            <input
              type="email"
              id="Email"
              className="form-control"
              name="email_id"
              onChange={(e) => setEmail_id(e.target.value)}
              value={email_id}
              required
            />
          </div>
          <div className="col-sm-6">
            <h6 className="form-label float-start mt-3">Password</h6>
            <input
              type="password"
              id="psw"
              className="form-control"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="col-sm-6">
            <h6 className="form-label float-start mt-3">PAN</h6>
            <input
              type="text"
              id="pan"
              className="form-control"
              name="pan_number"
              onChange={(e) => setPan_number(e.target.value)}
              value={pan_number}
              required
            />
          </div>
          <div className="form-check mt-3 ms-4">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label
              className="form-check-lab  el float-start "
              htmlFor="flexCheckDefault"
              style={{ fontSize: "1.2rem" }}
            >
              I agree with the terms and conditions
            </label>
          </div>
          <button
            type="submit"
            disabled={!isChecked}
            className="btn btn-dark my-4"
            onClick={registerUser}
          >
            Sign Up
          </button>
          <p className="">
            Already have an acount?
            <Link to="/sign-in">login</Link>
          </p>{" "}
        </form>
      </div>
    </div>
  );
};

export default SignUP;

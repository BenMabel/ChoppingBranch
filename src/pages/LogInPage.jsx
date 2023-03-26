import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Header";
import insta from "../images/insta.png";
import f from "../images/f.png";
import twiter from "../images/twiter.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login(username, password) {
    if (username === "root" && password === "root") {
      console.log("Login successful");
      navigate("/home");
    } else {
      console.log("Login failed");
    }
  }

  function handleLogin() {
    login(username, password);
  }

  return (
    <div className="landing-page">
      <Header />
      <Container style={{ marginTop: "50px", display: "flex", height: "100%" }}>
        <div
          className="col-7"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div style={{ paddingTop: "90px" }}>
            <h1 className="title">Choppings</h1>
            <p style={{ fontSize: "40px" }}>Chop “buka” in style!</p>
          </div>
          <div style={{ paddingBottom: "20px", display: "flex", gap: 20 }}>
            <a href="#">
              <img src={insta} />
            </a>
            <a href="#">
              <img src={f} />
            </a>
            <a href="#">
              <img src={twiter} />
            </a>
          </div>
        </div>
        <div
          className="col-5"
          style={{
            backgroundColor: "white",
            borderRadius: 5,
            marginBottom: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px 30px",
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              background: "red",
              color: "white",
              textAlign: "center",
              borderRadius: 4,
              fontSize: 20,
              alignSelf: "end",
              marginBottom: "30px",
            }}
          >
            x
          </div>
          <h1 className="welcome">Welcome back</h1>
          <div className="card-greeting" style={{ marginBottom: 22 }}>
            Please enter your username and password to continue
          </div>
          <input
            className="input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <button className="loginBtn" onClick={handleLogin}>
            Login
          </button>
          <br />
          <div className="">
            <label>
              <input type="checkbox" name="key" value="value" />
              <span className="texts">Remember me</span>
            </label>
            <div className="texts">Forgot password?</div>
          </div>
          {/* <Link className='loginBtn' style={{ width: '90%', textAlign: 'center', marginBottom: 30, marginTop: 20 }} to='/login'>Log in</Link> */}
          <div className="createAccount">
            Don’t have an account?{" "}
            <Link to={"/signup"} style={{ color: "red", fontWeight: "bold" }}>
              Sign up
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default LoginPage;

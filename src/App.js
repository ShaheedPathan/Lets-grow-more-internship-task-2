import React from "react";
// eslint-disable-next-line
import { useState } from "react";
import Cards from "./Components/user";
import { FaGithub,  FaFacebook, FaInstagram,  FaLinkedin } from "react-icons/fa";
//import Footer from "./components/footer";
import "./App.css";
import "./fotter.css";

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // To fetch data from https://reqres.in/api/users?page=1 (api)
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);  
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
        <div class="brand">
          <h1>Let's Grow More </h1>
        </div>
      <section className="wholecontainer">
        {/*creating get users button*/}
        <div class="topnav" id="myTopnav">
         
          <a href="#getusers" class="btn" onClick={handleClick}>Get Users</a>
        </div>
      

        <div className="container">
          <div>
            <img src="illustrated-people.jpg" className="image" alt=""/>
          </div>
          <div className="row justify-content-center ">
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div class="loader"></div>
              )
            ) : (
              <div className="instruction">
                <p> "Users will be displayed here!!" </p>
              </div>
            )}
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <footer>
        <div class="footer-content">
          <h3>About Us</h3>
          <p>Connecting made easy!</p>
          <ul class="socials">
            <li><a href="https://www.facebook.com/shaheed.pathan.756/"><FaFacebook/></a></li>
            <li><a href="https://github.com/ShaheedPathan"><FaGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/shaheed-pathan-14342720a/"><FaLinkedin/></a></li>
            <li><a href="https://www.instagram.com/pathan__shaheed/"><FaInstagram/></a></li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p>copyright &copy;2021 Let's Grow More. designed and developed by Shaheed Pathan <span></span></p>
        </div>
      </footer>
      </section>
    </>
  );
}
export default App;


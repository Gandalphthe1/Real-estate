import './App.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  return (
    <>
      <section class="showcase">
  <header>
    <h2 class="logo">Travel</h2>
    <div class="toggle"><RxHamburgerMenu /></div>
  </header>
  <video />
  <div class="text">
    <h2>Never Stop To </h2> 
    <h3>Exploring The World</h3>
    <p>Hello World dolor sittt amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Hello</p>
    <a href="#">Explore</a>
  </div>
  <ul class="social">
    <li><a href="#"><CiInstagram /></a></li>
    <li><a href="#"><FaFacebook /></a></li>
    <li><a href="#"><FaXTwitter /></a></li>
  </ul>
</section>

<div class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">Destination</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>
    </>
  );
}

export default App;

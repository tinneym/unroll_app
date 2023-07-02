import '../App.css';
import HomeHeader from "../components/Home_header.js";
import HomeButtons from "../components/Home_buttons.js";
import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <div className = "home-container small-home xs-home"> 
        <HomeHeader />
        <HomeButtons />
    </div>
  );
}

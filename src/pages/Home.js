import '../App.css';
import HomeHeader from "../components/Home_header.js";
import HomeButtons from "../components/Home_buttons.js";


export default function Home() {
  return (
    <div className = "home-container"> 
        <HomeHeader />
        <HomeButtons />
    </div>
  );
}

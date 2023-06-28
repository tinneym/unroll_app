import './App.css';
import HomeHeader from "./components/Home_header.js";
import HomeButtons from "./components/Home_buttons.js";


function App() {
  return (
    <div className = "home-container"> 
        <HomeHeader />
        <HomeButtons />
    </div>
  );
}

export default App;

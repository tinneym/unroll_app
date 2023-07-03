import './App.css';
import Home from "./pages/Home.js"
import Study from "./pages/Study.js"
import FindSpot from "./pages/FindSpot.js"
import LoadingPage from './pages/LoadingPage';
import WalkingPage from './pages/WalkingPage';

function App() {
  /* controls routing */
  let Component;
  switch (window.location.href) {
    case "https://unroll-app-k7ob.onrender.com/":
      Component = <Home />
      break;
    case "https://unroll-app-k7ob.onrender.com/study":
      Component = <Study />
      break;
    case "https://unroll-app-k7ob.onrender.com/findSpot":
      Component = <FindSpot />
      break;
    case "https://unroll-app-k7ob.onrender.com/loading":
      Component = <LoadingPage />
      break;
    case "https://unroll-app-k7ob.onrender.com/walking":
      Component = <WalkingPage />
      break;
  }
  return (
    <>
      {Component}
    </>
  );
}

export default App;

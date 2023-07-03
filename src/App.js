import './App.css';
import Home from "./pages/Home.js"
import Study from "./pages/Study.js"
import FindSpot from "./pages/FindSpot.js"
import LoadingPage from './pages/LoadingPage';
import WalkingPage from './pages/WalkingPage';

function App() {
  /* controls routing */
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Home />
      break;
    case "/study":
      Component = <Study />
      break;
    case "/findSpot":
      Component = <FindSpot />
      break;
    case "/loading":
      Component = <LoadingPage />
      break;
    case "/walking":
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

import './App.css';
import Home from "./pages/Home.js"
import Study from "./pages/Study.js"
import FindSpot from "./pages/FindSpot.js"
import SetTimePage from './components/SetTimePage';

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
    case "/study/settings":
      Component = <SetTimePage />
      break;

  }
  return (
    <>
      {Component}
    </>
  );
}

export default App;

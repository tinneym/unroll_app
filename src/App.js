import './App.css';
import Home from "./pages/Home.js"
import Study from "./pages/Study.js"
import FindSpot from "./pages/FindSpot.js"


function App() {
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
  }
  return (
    <>
      {Component}
    </>
  );
}

export default App;

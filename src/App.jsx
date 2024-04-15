// CSS STYLES
import "./App.scss";

// REACT COMPONENTS
import { Navbar } from "./components/Navbar";

// REACT RAUTER
import AppRouter from "./components/Router/AppRouter";



function App() {
  return (
    <div className="App">
 
        <Navbar />
       <AppRouter/>
   
    </div>
  );
}

export default App;

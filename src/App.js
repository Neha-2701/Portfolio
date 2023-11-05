
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Socials from './Components/Socials';
import About from './Components/About';
import Experience from './Components/Experience';
import Contact from './Components/Contact'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Socials/>
      <About/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;

import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import About from "./Components/About/about";
import Project from "./Components/Project/project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context/Context";
import { useContext } from "react";

function App() {
  
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode 
  return (
    <div className="App"
      style={{
        background:darkMode ? "#232D3F" : "",
        color:darkMode ? "white":""
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

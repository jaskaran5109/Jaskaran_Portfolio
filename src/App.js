import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import ContactMe from './Components/ContactMe/ContactMe';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;

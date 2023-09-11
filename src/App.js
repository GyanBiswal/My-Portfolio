import './App.css';
import Profile from './portfolioContainer/Home/Profile';
import Sidebar from './portfolioContainer/Home/Sidebar/Sidebar';
import Projects from './portfolioContainer/Projects/Projects';
import About from './portfolioContainer/About/About';
import Contact from './portfolioContainer/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Profile/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;

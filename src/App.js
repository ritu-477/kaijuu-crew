import './App.css';
import Header from './common/Header';
import AboutUs from './components/AboutUs';
import Faq from './components/Faq';
import Hero from './components/Hero';
import KaijuuCrewClasses from './components/KaijuuCrewClasses';
import Team from './components/Team';
import Story from './components/Story';
import Traits from './components/Traits';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <KaijuuCrewClasses />
      <Story />
      <Traits/>
      <Team />
      <Faq />
    </div>
  );
}

export default App;

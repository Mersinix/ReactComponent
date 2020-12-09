import Navbar from './components/Navbar'
import Carousell from './components/Carousel'
import './App.css';
import ProfilPhoto from './components/Profile/ProfilPhoto';
import FullName from './components/Profile/FullName';
import Address from './components/Profile/Address';

function App() {
  return (
    <div className="App bg-dark">
    <Navbar/>
    <Carousell/>
    <div className="Card" id="about-me">
    <ProfilPhoto/>
    <FullName/>
    <Address/>
    </div>
    
    
    </div>
  );
}

export default App;

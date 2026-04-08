import { HashRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Opportunities from './pages/Opportunities';
import MemberNetwork from './pages/MemberNetwork';
import RSVP from './pages/RSVP';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/network" element={<MemberNetwork />} />
        <Route path="/rsvp" element={<RSVP />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
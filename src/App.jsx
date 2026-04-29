import { HashRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Opportunities from './pages/Opportunities';
import ProjectsGallery from './pages/ProjectsGallery';
import MemberNetwork from './pages/MemberNetwork';
import RSVP from './pages/RSVP';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter>
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        
        {/* 컨텐츠가 화면을 채우도록 flex-grow 설정 */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/gallery" element={<ProjectsGallery />} />
            <Route path="/network" element={<MemberNetwork />} />
            <Route path="/rsvp" element={<RSVP />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
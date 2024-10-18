import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Project from './pages/project';

function App() {
  return (
    <div className="min-h-screen">
      <div> 
        <BrowserRouter>
          <header>
              <div>
                <div>
                  <Header />
                  <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/project" element={<Project />} />
                  </Routes>
                </div>
              </div>
            </header>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

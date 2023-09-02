import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'; 
import HeroList from './HeroList';
import Dashboard from './Dashboard';
import NotFound from './notFound';
import HeroDetails from './HeroDetails';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/heroes" element={<HeroList />} />
            <Route path="/heroes/:id" element={<HeroDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
} 

export default App;

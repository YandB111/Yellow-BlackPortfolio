

import DynamicElement from './MyComponent/DynamicElement';

import About from './MyComponent/About'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './MyComponent/Service';
import Project from './MyComponent/Project';
import Contact from './MyComponent/Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<DynamicElement />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service/>}/>
          <Route path='/Project' element={<Project/>}/>
          <Route path="/contact" element={<Contact />} /> 

        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

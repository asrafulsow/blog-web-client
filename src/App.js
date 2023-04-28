import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import About from './components/Home/About/About';
import Navigation from './components/Home/Shared/Navigation/Navigation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

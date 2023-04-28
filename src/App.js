import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

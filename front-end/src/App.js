
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sign from './components/Sign';
import Private from './components/Private';
//import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>


          <Route element={<Private />}>
            <Route path="/" element={<h1>Products List</h1>} />
            <Route path="/add" element={<h1>Add List</h1>} />
            <Route path="/update" element={<h1>Update List</h1>} />
            <Route path="/logout" element={<h1>Logout List</h1>} />
            <Route path="/profile" element={<h1>Profile List</h1>} />

          </Route>

          <Route path="/sign" element={<Sign />} />
         
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;

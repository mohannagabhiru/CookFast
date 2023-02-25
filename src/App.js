import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import CategoryItems from './pages/CategoryItems';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Details' element={<h1>Next</h1>}/>
        <Route path = "/meal/category/:name" element = {<CategoryItems />} />

        {/* <h1>hii</h1> */}
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Review from './component/Review/Review';
import Dashbord from './component/Dashbord/Dashbord';
import Blogs from './component/Bloge/Blogs';
import About from './component/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
       
      </Routes>
        
    </div>
  );
}

export default App;

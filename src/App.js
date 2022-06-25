import { Routes, Route } from 'react-router-dom';
import './App.css';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Home from './Components/Home/Home';
import AdditionalAboutus from './Components/Pages/AdditionalPage/AdditionalAboutus';
import Career from './Components/Pages/AdditionalPage/Career';
import Faq from './Components/Pages/AdditionalPage/Faq';
import Blog from './Components/Pages/Blog';
import Client from './Components/Pages/Client';
import ContactUs from './Components/Pages/ContactUs';
import Gallery from './Components/Pages/Gallery';
import NotFoundPage from './Components/Pages/NotFoundPage';
import BuildingManagement from './Components/Pages/Service/BuildingManagement';
import CarRental from './Components/Pages/Service/CarRental';
import Cleaning from './Components/Pages/Service/Cleaning';
import Gardening from './Components/Pages/Service/Gardening';
import PestControl from './Components/Pages/Service/PestControl';
import Stationary from './Components/Pages/Service/Stationary';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/client' element={<Client></Client>}></Route>
        <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contacts' element={<ContactUs></ContactUs>}></Route>
        <Route path='/aboutus' element={<AdditionalAboutus></AdditionalAboutus>}></Route>
        <Route path='/faq' element={<Faq></Faq>}></Route>
        <Route path='/career' element={<Career></Career>}></Route>
        <Route path='/cleaning' element={<Cleaning></Cleaning>}></Route>
        <Route path='/car-rental' element={<CarRental></CarRental>}></Route>
        <Route path='/Building-management' element={<BuildingManagement></BuildingManagement>}></Route>
        <Route path='/pest-control' element={<PestControl></PestControl>}></Route>
        <Route path='/stationary' element={<Stationary></Stationary>}></Route>
        <Route path='/Gardening' element={<Gardening></Gardening>}></Route>
        <Route path='/dashboard' element={<AdminDashboard></AdminDashboard>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;

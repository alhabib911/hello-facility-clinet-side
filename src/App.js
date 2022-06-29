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
import RequereAuth from './Components/Authentication/RequereAuth'
import MyProfile from './Components/AdminDashboard/MyProfile';
import MyProfileEdit from './Components/AdminDashboard/MyProfileEdit'
import AddGallery from './Components/AdminDashboard/AddGallery';
import AddBlog from './Components/AdminDashboard/AddBlog'
import AllBlogs from './Components/Pages/AllBlogs';
import UserStatus from './Components/AdminDashboard/UserStatus';
import Overview from './Components/AdminDashboard/Overview';
import Cost from './Components/AdminDashboard/Cost';
import Profit from './Components/AdminDashboard/Profit';
import Employee from './Components/AdminDashboard/Employee';
import EmployeeUpdate from './Components/AdminDashboard/EmployeeUpdate';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/client' element={<Client></Client>}></Route>
        <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/all-blogs' element={<AllBlogs></AllBlogs>}></Route>
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
        <Route path='/dashboard' element={<RequereAuth>
          <AdminDashboard></AdminDashboard>
        </RequereAuth>}>
        <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='profile/edit' element={<MyProfileEdit></MyProfileEdit>}></Route>
          <Route path='add-gallery' element={<AddGallery></AddGallery>}></Route>
          <Route path='add-blog' element={<AddBlog></AddBlog>}></Route>
          <Route path='user-status' element={<UserStatus></UserStatus>}></Route>
          <Route path='overview' element={<Overview></Overview>}></Route>
          <Route path='cost' element={<Cost></Cost>}></Route>
          <Route path='profit' element={<Profit></Profit>}></Route>
          <Route path='employee' element={<Employee></Employee>}></Route>
          <Route path='employee/:id' element={<EmployeeUpdate></EmployeeUpdate>}></Route>
          
        </Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;

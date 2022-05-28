import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import AllProducts from './Pages/Products/AllProducts';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Order from './Pages/Order/Order';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import Profile from './Pages/Dashboard/Profile';
import Users from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/Login/RequireAuth/RequireAdmin';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddProducts from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';

function App() {
  return (
    <div className="max-w-7xl mx-auto shadow">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/product' element={<AllProducts></AllProducts>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/order/:id' element={<RequireAuth><Order></Order></RequireAuth>} ></Route>

        <Route path='/dashboard' element={
          <RequireAuth><Dashboard ></Dashboard></RequireAuth>
        }>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='/dashboard/myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path='/dashboard/addreview' element={<AddReview></AddReview>}></Route>
          <Route path='/dashboard/makeAdmin' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='/dashboard/manageorders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path='/dashboard/addProduct' element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
          <Route path='/dashboard/manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>

        </Route>

        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

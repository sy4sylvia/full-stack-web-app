import { render } from "react-dom";
import {BrowserRouter, Routes, Route,} from "react-router-dom";

import './index.css';

import App from "./App";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Test from "./routes/Test";
import SearchCars from "./routes/SearchCars";
import Display from "./routes/Display";
import Checkout from "./routes/Checkout";
import Complete from "./routes/Complete";
import Review from "./routes/Review";

import UserProfile from "./routes/UserProfile";

import UserEditInfo from "./routes/UserProfileSubRoutes/UserEditInfo";
import UserEditAddressInfo from "./routes/UserProfileSubRoutes/UserEditAddressInfo";
import OrderHistory from "./routes/UserProfileSubRoutes/OrderHistory";
import EmployeeLogin from "./routes/EmployeeActions/EmployeeLogin";
import EditVehicle from "./routes/EmployeeActions/EditVehicle";
import UpdateOrder from "./routes/EmployeeActions/UpdateOrder";
import UserPersonalInfo from "./containers/UserPersonalInfo";

import CorpCustomerInfo from "./containers/CorpCustomerInfo";
import EmployeeProfile from "./routes/EmployeeActions/EmployeeProfile";
import DeleteCustomers from "./routes/EmployeeActions/DeleteCustomers";
import EditVehicleClass from "./routes/EmployeeActions/EditVehicleClass";

const rootElement = document.getElementById("root");
render(<BrowserRouter>

        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home" element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="user-personal-info" element={<UserPersonalInfo />} />
                <Route path="login" element={<Login />} />

                <Route path="search-cars" element={<SearchCars />} />
                <Route path="display" element={<Display />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="review-pickup" element={<Review />} />
                <Route path="complete" element={<Complete />} />

                <Route path="user-profile" element={<UserProfile />} />


                <Route path="corp-customer-info" element={<CorpCustomerInfo />} />
                <Route path="user-profile-edit-info" element={<UserEditInfo />} />
                <Route path="user-profile-edit-address" element={<UserEditAddressInfo />} />
                <Route path="order-history" element={<OrderHistory />} />

                {/*Employee actions*/}
                {/*<Route path="employee" element={<Employee />} />*/}
                <Route path="employee-login" element={<EmployeeLogin />} />
                <Route path = "employee-profile" element ={<EmployeeProfile /> } />

                <Route path="delete-customers" element={<DeleteCustomers />} />
                <Route path="insert-vehicle-class" element={<EditVehicleClass />} />
                <Route path="insert-vehicle" element={<EditVehicle />} />
                <Route path="dropoff-order" element={<UpdateOrder />} />
            </Route>

            <Route path="test" element={<Test />} />
            {/*outside route - no navbar, header, footer*/}

        </Routes>
    </BrowserRouter>,
     rootElement);
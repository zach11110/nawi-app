import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import CategoriesType from "./pages/categoriesType";
import Map1 from "./pages/Map1";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import Page from "./components/Homepage/page";
import PageVehicle from "./components/Homepage/pageVehicle";
import PageOrderTravel from "./components/Homepage/pageOrderTravel";
import DetailsCardsProperty from "./components/DetailsCard/DetailsCardsProperty";
import DetailsCardsVehicle from "./components/DetailsCard/DetailsCardsVehicle";
import DetailsCardsTravelOrder from "./components/DetailsCard/DetailsCardsTravelOrder";
import AddProperty from "./components/Property/Add";
import AddOrderTravel from "./components/OrderTravel/Add";
import TravelServices from "./components/OrderTravel/TravelServices";
import Result from "./components/OrderTravel/Result1";
import AllOrders from "./components/OrderTravel/AllOrders";
import AddTravel from "./components/OrderTravel/Add2";
import Start from "./components/OrderTravel/Start";
import Share from "./components/Property/PropertyServices";
import InfluancerServices from "./components/Property/InfluancerServices";
import Add1 from "./components/AddVehicle/Add1";
import Add2 from "./components/AddVehicle/Add2";
import Add3 from "./components/AddVehicle/Add3";
import Add4 from "./components/AddVehicle/Add4";
import Add5 from "./components/AddVehicle/Add5";
import Add6 from "./components/AddVehicle/Add6";
import ShareV from "./components/AddVehicle/VehicleServicesV";
import InfluancerServicesV from "./components/AddVehicle/InfluancerServicesV";
import Agency from "./components/Homepage/Agency";
import DetailsOffices from "./components/Homepage/DetailsOffices";
import TravelOfficesServices from "./components/OrderTravel/TravelOfficesServices";
import BrokerServices from "./components/Homepage/BrokerServices";
import StatisticsBroker from "./components/Homepage/StatisticsBroker";
import StatisticsInfluancer from "./components/Homepage/StatisticsInfluancer";
import StatisticsTravelOffice from "./components/Homepage/StatisticsTravelOffice";
import DetailsCardsPropertyBroker from "./components/DetailsCard/DetailsCardsPropertyBroker";
import DetailsCardsVehicleBroker from "./components/DetailsCard/DetailsCardsVehicleBroker";
import Payment from "./pages/Payment";
import JoinTravelOfficee from "./pages/JoinTravel_officee";
import VerificationPayment from "./pages/VerificationPayment";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Content from "./pages/Content";
import Settings from "./pages/Settings";
import EditProfilebrin from "./pages/EditProfilebr_in";
import EditProfile from "./pages/EditProfile";
import Sort from "./pages/Sort";
import Order from "./pages/Order";
// import Navbarlogin from "./components/Navbarlogin";
import JoinBroker from "./pages/JoinBroker";
import JionInfluencer from "./pages/JionInfluencer";
import DetailsPropety from './pages/DetailsPropety' ;
import Chat from './components/Chat1';


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        {/* <Navbarlogin /> */}
        
        <Routes>

{/* done */}
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Content" element={<Content />} />
          <Route path="/JionInfluencer" element={<JionInfluencer />} />
          <Route path="/DetailsPropety" element={<DetailsPropety />} />
          <Route path="/JoinTravel_officee" element={<JoinTravelOfficee />} />
          <Route path="/Sort" element={<Sort />} />
          <Route path="/JoinBroker" element={<JoinBroker />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/EditProfilebr_in" element={<EditProfilebrin />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/verifica_tionpaymen" element={<VerificationPayment />} />


        {/* done */}
          <Route index element={<Home />} /> 
          <Route path="/map" element={<Map1 />} />

          {/* done */}
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          {/* done */}
          <Route path="/choose_categories" element={<CategoriesType />} />


          {/* done */}
          <Route
            path="/choose_categories/homepage_vehicles"
            element={<PageVehicle />}
          />

          {/* done */}
          <Route path="/agency" element={<Agency />} />

          <Route path="/details_offices/" element={<DetailsOffices />} />

          
          {/* done */}
          <Route
            path="/details_cards_property"
            element={<DetailsCardsProperty />}
          />

          {/* done */}
          <Route
            path="/details_cards_vehicle"
            element={<DetailsCardsVehicle />}
          />

          {/* done */}

          <Route path="/BrokerServices" element={<BrokerServices />} />

          {/* done */}
          {/***************** الإحصائيات ****************/}

          <Route path="/statistics_broker" element={<StatisticsBroker />} />
          <Route
            path="/statistics_influancer"
            element={<StatisticsInfluancer />}
          />
          <Route
            path="/statistics_travel_office"
            element={<StatisticsTravelOffice />}
          />

          {/********************************************/}
          {/* done */}
            {/*Start Section AddVehicle (CRUD)*/}

          <Route path="/vehicle/add1" element={<Add1 />} />
          <Route path="/vehicle/add2" element={<Add2 />} />
          <Route path="/vehicle/add3" element={<Add3 />} />
          <Route path="/vehicle/add4" element={<Add4 />} />
          <Route path="/vehicle/add5" element={<Add5 />} />
          <Route path="/vehicle/add6" element={<Add6 />} />
          <Route path="/vehicle/share" element={<ShareV />} />
          {/*End Section AddVehocle (CRUD)*/}

          {/* done */}
          
          {/*Start Section Property (CRUD)*/}

          <Route path="/property/add" element={<AddProperty />} />
          <Route path="/property/share" element={<Share />} />
          {/*End Section Property (CRUD)*/}

          {/* done */}
          <Route
            path="/property/influancer_services"
            element={<InfluancerServices />}
          />

          {/* done */}
          <Route
            path="/order_travel/travel_service"
            element={<TravelServices />}
          />

          {/* done */}
          <Route
            path="/order_travel/travel_offieces_services"
            element={<TravelOfficesServices />}
          />

          {/* done */}
          <Route path="/order_travel/add1" element={<AddTravel />} />
          <Route path="/order_travel/start" element={<Start />} />
          <Route path="/order_travel/result" element={<Result />} />

          {/* done */}
          <Route
            path="/vehicle/influancer_servicesV"
            element={<InfluancerServicesV />}
          />

          {/* done */}
          <Route path="/order_travel/AllOrders" element={<AllOrders />} />

          {/* done */}
          <Route path="/order_travel/add" element={<AddOrderTravel />} />











{/* **************************************************************************************************** */}

         <Route path="/chat" element={ <Chat />} />






{/* تلزم تظبيط التصميم ثم ترجمة */}
        <Route
          path="/choose_categories/homepage_properties"
          element={<Page />}
        />


{/* Cards -- */}
          <Route
            path="/choose_categories/homepage_order_travel"
            element={<PageOrderTravel />}
          />


{/* Cards -- */}
          <Route
            path="/details_cards_property_broker"
            element={<DetailsCardsPropertyBroker />}
          />

{/* Cards -- */}
          <Route
            path="/details_cards_vehicle_broker"
            element={<DetailsCardsVehicleBroker />}
          />
{/* Cards -- */}
          <Route
            path="/order_travel/details_cards_travel_order"
            element={<DetailsCardsTravelOrder />}
          />

        </Routes>
        <ScrollToTop />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
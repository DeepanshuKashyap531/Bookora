import Navigation from "./routes/navigation/navigation.components";
import Home from "./routes/home/home.component";
import SignInAndUp from "./components/signIn-Up/signIn-Up.component";
import { Route,Routes } from "react-router-dom";
import SubscriptionPlans from "./routes/subscriptionPlans/subsciptions-plan.component";
import MarketPlace from "./routes/MarketPlace/marketplace.component";
const App = () =>{
  return (
    <Routes>
      <Route path = '/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='/signIn' element={<SignInAndUp />}></Route>
        <Route path='/plans' element={<SubscriptionPlans />}></Route>
        <Route path='/marketPlace' element={<MarketPlace />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

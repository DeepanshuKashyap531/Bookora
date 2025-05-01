import Market from "../../components/marketplace/market.component";
import { Outlet } from "react-router-dom";

const MarketPlace = () => {
    return (
        <div>
            <Outlet />
            <Market /> 
        </div>
    )
}

export default MarketPlace;
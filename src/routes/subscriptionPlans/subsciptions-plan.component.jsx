import { Outlet } from 'react-router-dom';
import PlansLists from '../../components/plansLists/plansLists.component';

const SubscriptionPlans = () => {
    return ( 
        <div>
            <Outlet /> 
            <PlansLists />
        </div>  
    )
};

export default SubscriptionPlans;
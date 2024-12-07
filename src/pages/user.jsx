
import UserDashboard from '../component/userLogin/UserDashboard';
import PersonalInfo from '../component/userLogin/PersonalInfo';
import MyOrders from '../component/userLogin/MyOrders';

const user = () => {
    return (
        <div>
            <UserDashboard />
      <PersonalInfo />
      <MyOrders />

        </div>
    );
};

export default user;